import * as d3 from 'd3';
import { createSVG } from './canvas';

const cloud = require('d3-cloud');

const width = 768;
const height = 768;
const fill = d3.schemeCategory20;

export const drawCloud = words => {
	const svg = createSVG('skills-cloud', width, height);

	svg
		.append('g')
		.attr('transform', `translate(${width / 2},${height / 2})`)
		.selectAll('text')
		.data(words)
		.enter()
		.append('text')
		.style('font-family', 'Anton')
		.style('font-size', d => `${d.size}px`)
		.style('fill', (d, i) => fill[i])
		.attr('text-anchor', 'middle')
		.attr('transform', d => `translate(${[d.x, d.y]})rotate(${d.rotate})`)
		.attr('data-score', d => d.score)
		.text(d => d.text);
};

export const drawSkills = skills => {
	cloud()
		.size([width, height])
		.words(skills)
		.rotate(function() {
			return ~~(Math.random() * 2) * 90;
		})
		.font('Impact')
		.fontSize(function(d) {
			return d.size;
		})
		.on('end', drawCloud)
		.start();
};
