import * as d3 from 'd3';
import { createSVG } from './canvas';

const winWidth = window.innerWidth;
const size = winWidth / 5;
const halfSize = size / 2;
const fontSize = '1.75vw';
const modifier = winWidth < 768 ? 4 : 16;
const innerRadius = halfSize - modifier;
const transitionType = d3.easeQuadIn;
const transitionsDelay = 250;
const transitionsDuration = 1000;
const pie = d3.pie().value(d => d.value);
const svg = createSVG('skill-donut', size, size);
const arc = d3
	.arc()
	.outerRadius(halfSize)
	.innerRadius(innerRadius);

export const dispatch = d3.dispatch('change-skill');

export const drawDonut = data => {
	const group = svg
		.data([[data]])
		.append('g')
		.attr('transform', `translate(${halfSize},${halfSize})`);

	drawChartArcs(group, data);
	drawPercentageText(group, data);
};

export const drawChartArcs = (svg, data) => {
	svg
		.selectAll('g')
		.data(pie)
		.enter()
		.append('path')
		.attr('fill', data.color)
		.each(d => {
			d.endAngle = 0;
		})
		.attr('d', arc)
		.transition()
		.duration(transitionsDuration)
		.delay(transitionsDelay)
		.ease(transitionType)
		.call(arcTween, this);
};

export const arcTween = transition => {
	transition.attrTween('d', d => {
		const min = 0;
		const max = 360 * (d.value / 100) * Math.PI / 180;
		const interpolate = d3.interpolate(min, max);

		return t => {
			d.endAngle = interpolate(t);

			return arc(d);
		};
	});
};

export const drawPercentageText = (svg, data) => {
	svg
		.append('text')
		.data([data])
		.attr('font-family', 'Anton')
		.attr('font-size', '0rem')
		.attr('fill', data.color)
		.attr('text-anchor', 'middle')
		.attr('y', '1rem')
		.html(() => {
			const text = data.text;
			const value = data.showPercent ? `${data.value}%` : '';

			return `${text}: ${value}`;
		})
		.transition()
		.attr('font-size', fontSize)
		.duration(transitionsDuration)
		.delay(transitionsDelay)
		.ease(transitionType);
};

dispatch.on('change-skill', data => {
	svg.select('path').remove();
	svg.select('text').remove();

	drawChartArcs(svg.select('g'), data);
	drawPercentageText(svg.select('g'), data);
});
