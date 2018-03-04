import * as d3 from 'd3';

const { innerWidth, innerHeight } = window;
const eventType = 'ontouchstart' in document ? 'touchmove' : 'mousemove';

const createSVG = id => {
	const svg = d3
		.select(`#${id}`)
		.append('svg')
		.attr('width', innerWidth)
		.attr('height', innerHeight)
		.attr('preserveAspectRatio', 'xMinYMin meet')
		.attr('viewBox', `0 0 ${innerWidth} ${innerHeight}`);

	return svg;
};

const drawCircle = (canvas, offset, color) => {
	canvas
		.append('circle')
		.attr('cx', offset[0])
		.attr('cy', offset[1])
		.attr('r', 0)
		.style('stroke-opacity', 1)
		.style('stroke', color)
		.style('fill', 'none')
		.transition()
		.duration(1000)
		.ease(d3.easeQuadIn)
		.attr('r', 100)
		.style('stroke-opacity', 0.001)
		.remove();
};

const generateCircleData = count => {
	return d3.range(count).map(() => {
		const cx = Math.random() * innerWidth;
		const cy = Math.random() * innerHeight;
		const r = Math.random() * 50 / Math.random();
		const op = Math.random();

		return {
			cx,
			cy,
			r,
			op
		};
	});
};

const animateCircle = d => {
	const degrees = 180 / Math.PI;

	return `translate(${Math.random() * d.cx} ${Math.random() * d.cx})`;
};

const pulse = canvas => {
	const data = generateCircleData(30);

	(function repeat() {
		const circles = canvas
			.selectAll('.circle')
			.transition()
			.duration(Math.random() * 6000)
			.attr('r', 0)
			.style('stroke-opacity', 0)
			.transition()
			.ease(d3.easeQuadOut)
			.duration(Math.random() * 8000)
			.attr('stroke-width', 1)
			.style('stroke-opacity', d => d.op)
			.style('stroke', (d, i) =>
				d3.hsl((i * 2 + 10 * Math.random()) % 360, 1, 0.5)
			)
			.attr('r', (d, i) => data[i].r * Math.random())
			.on('end', repeat);
	})();
};

export const initCanvas = id => {
	let i = 0;

	const canvas = createSVG(id);

	canvas.on(eventType, function() {
		const offset = d3.mouse(this);
		const color = d3.hsl((i = (i + 1) % 360), 1, 0.5);

		drawCircle(canvas, offset, color);
	});

	return canvas;
};

export const createDots = canvas => {
	const circles = canvas
		.selectAll('circle')
		.data(generateCircleData(30))
		.enter()
		.append('circle')
		.attr('class', 'circle')
		.attr('cx', d => d.cx)
		.attr('cy', d => d.cy)
		.attr('r', d => d.r)
		.style('stroke', 'white')
		.style('stroke-width', '1')
		.style('stroke-opacity', d => d.op)
		.style('stroke-linecap', 'round')
		.style('fill', 'none');

	pulse(canvas);

	return canvas;
};
