import * as d3 from 'd3';

let circleIndex = 0;

const { innerWidth, innerHeight } = window;
const eventType = 'ontouchstart' in document ? 'touchmove' : 'mousemove';
const dispatch = d3.dispatch('remove-circle');
const rand = modifier => Math.random() * modifier;

dispatch.on('remove-circle', canvas => {
	const newCircle = canvas.append('circle');
	const newCircleData = generateCircleData(1);

	setCircleData(canvas, newCircle.node(), newCircleData[0], circleIndex);
});

export const createSVG = (id, width, height) => {
	const svg = d3
		.select(`#${id}`)
		.append('svg')
		.attr('width', width)
		.attr('height', height)
		.attr('preserveAspectRatio', 'xMinYMin meet')
		.attr('viewBox', `0 0 ${width} ${height}`);

	return svg;
};

export const drawCircle = (canvas, data) => {
	canvas
		.append('circle')
		.attr('cx', data.cx)
		.attr('cy', data.cy)
		.attr('r', 0)
		.style('stroke-opacity', 1)
		.style('stroke', data.color)
		.style('fill', 'none')
		.transition()
		.duration(1000)
		.ease(d3.easeQuadIn)
		.attr('r', 100)
		.style('stroke-opacity', 0.001)
		.remove();
};

export const setCircleData = (canvas, circle, data, index) => {
	d3
		.select(circle)
		.attr('class', 'circle')
		.attr('cx', d => data.cx)
		.attr('cy', d => data.cy)
		.attr('r', 0)
		.style('stroke', d => data.color)
		.style('stroke-width', '1')
		.style('stroke-opacity', d => data.op)
		.style('stroke-linecap', 'round')
		.style('fill', 'none')
		.transition()
		.duration(rand(10000))
		.attr('r', d => data.r)
		.transition()
		.delay(rand(100000))
		.duration(1000)
		.style('stroke-opacity', 0)
		.on('end', function() {
			dispatch.call('remove-circle', null, canvas);

			d3.select(this).remove();
		});
};

export const generateCircleData = count => {
	return d3.range(count).map(() => {
		const cx = rand(innerWidth);
		const cy = rand(innerHeight);
		const r = rand(100);
		const op = rand(1);
		const color = d3.hsl((circleIndex = (circleIndex + 1) % 360), 1, 0.5);

		return {
			cx,
			cy,
			r,
			op,
			color
		};
	});
};

export const initCanvas = id => {
	let i = 0;

	const canvas = createSVG(id, innerWidth, innerHeight);

	canvas.on(eventType, function() {
		const offset = d3.mouse(this);
		const color = d3.hsl((i = (i + 1) % 360), 1, 0.5);

		drawCircle(canvas, {
			color,
			cx: offset[0],
			cy: offset[1]
		});
	});

	return canvas;
};

export const createDots = canvas => {
	const circles = canvas
		.selectAll('circle')
		.data(generateCircleData(30))
		.enter()
		.append('circle')
		.each(function(d, i) {
			setCircleData(canvas, this, d, i);
		});

	return canvas;
};
