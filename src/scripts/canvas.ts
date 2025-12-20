import * as d3 from 'd3';

export type Dots = d3.Selection<SVGCircleElement, any, SVGSVGElement, any>;
export type Canvas = d3.Selection<SVGSVGElement, unknown, HTMLElement, any>;

type Data = {
	color: d3.HSLColor | string;
	cx: number;
	cy: number;
	op?: number;
	r?: number;
};

let circleIndex = 0;

const rand = (modifier: number): number => Math.random() * modifier;
const eventType: string = 'ontouchstart' in document ? 'touchmove' : 'mousemove';
const dispatcher: d3.Dispatch<EventTarget> = d3.dispatch('remove-circle');
const { innerHeight, innerWidth } = window;

dispatcher.on('remove-circle', (canvas: Canvas) => {
	const newCircle = canvas.append('circle');
	const newCircleData = generateCircleData(1);
	const node = newCircle.node() as SVGCircleElement;

	setCircleData(canvas, node, newCircleData[0]);
});

export const createSVG = (id: string, width: number, height: number): Canvas =>
	d3
		.select(`#${id}`)
		.append('svg')
		.attr('width', width)
		.attr('height', height)
		.attr('preserveAspectRatio', 'xMinYMin meet')
		.attr('viewBox', `0 0 ${width} ${height}`);

export const drawCircle = (canvas: Canvas, data: Data): void => {
	canvas
		.append('circle')
		.attr('cx', data.cx)
		.attr('cy', data.cy)
		.attr('r', 0)
		.style('stroke-opacity', 1)
		.style('stroke', data.color as string)
		.style('fill', 'none')
		.transition()
		.duration(1000)
		.ease(d3.easeQuadIn)
		.attr('r', 100)
		.style('stroke-opacity', 0.001)
		.remove();
};

export const setCircleData = (canvas: Canvas, circle: SVGCircleElement, data: Data): void => {
	d3.select(circle)
		.attr('class', 'circle')
		.attr('cx', () => data.cx)
		.attr('cy', () => data.cy)
		.attr('r', 0)
		.style('stroke', () => data.color as string)
		.style('stroke-width', '1')
		.style('stroke-opacity', () => data.op!)
		.style('stroke-linecap', 'round')
		.style('fill', 'none')
		.transition()
		.duration(rand(10000))
		.attr('r', () => data.r!)
		.transition()
		.delay(rand(100000))
		.duration(1000)
		.style('stroke-opacity', 0)
		.on('end', function () {
			dispatcher.call('remove-circle', undefined, canvas);

			d3.select(this).remove();
		});
};

export const generateCircleData = (count: number): Data[] =>
	d3.range(count).map(() => {
		const cx = rand(innerWidth);
		const cy = rand(innerHeight);
		const r = rand(100);
		const op = rand(1);
		const color = d3.hsl((circleIndex = (circleIndex + 1) % 360), 1, 0.5);

		return {
			color,
			cx,
			cy,
			op,
			r
		};
	});

export const initCanvas = (id: string): Canvas => {
	let i = 0;

	const canvas = createSVG(id, innerWidth, innerHeight);

	canvas.on(eventType, (event: MouseEvent) => {
		const offset = d3.pointer(event);
		const color = d3.hsl((i = (i + 1) % 360), 1, 0.5);

		drawCircle(canvas, {
			color,
			cx: offset[0],
			cy: offset[1]
		});
	});

	return canvas;
};

export const createDots = (canvas: Canvas): Dots => {
	return canvas
		.selectAll('circle')
		.data(generateCircleData(30))
		.enter()
		.append('circle')
		.each(function (d: Data) {
			setCircleData(canvas, this, d);
		});
};

export const destroyDots = (canvas: Dots | null): void => {
	if (!canvas) {
		return;
	}

	canvas.html('');
};
