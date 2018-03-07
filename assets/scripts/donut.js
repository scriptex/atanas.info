import * as d3 from 'd3';
import { createSVG } from './canvas';

const size = window.innerWidth / 5;
const halfSize = size / 2;
const fontSize = '2vw';
const innerRadius = halfSize - 16;
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

export const getTspan = (text, y) => `<tspan x="0" dy="${y}">${text}</tspan>`;

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
			const hasPercent = data.showPercent;
			const textDY = hasPercent ? -20 : 5;
			const text = getTspan(data.text, textDY);
			const value = data.showPercent
				? getTspan(data.value + '%', 50)
				: '';

			return text + value;
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
