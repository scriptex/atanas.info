import * as d3 from 'd3';
import { createSVG } from './canvas';
import { dispatch } from './donut';

const cloud = require('d3-cloud');

const width = window.innerWidth / 3 * 2;
const height = 768;
const fill = [...d3.schemeCategory20, ...d3.schemeCategory20];

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
		.attr('fill', (d, i) => fill[i])
		.attr('text-anchor', 'middle')
		.attr('transform', d => `translate(${[d.x, d.y]})rotate(${d.rotate})`)
		.attr('data-score', d => d.score)
		.text(d => d.text)
		.on('click', function(d) {
			dispatch.call('change-skill', null, {
				color: this.getAttribute('fill') || 'black',
				text: d.text,
				value: d.value
			});
		});
};

export const drawSkills = skills => {
	cloud()
		.size([width, height])
		.words(skills)
		.rotate(() => ~~(Math.random() * 2) * 90)
		.font('Anton')
		.fontSize(d => d.size)
		.on('end', drawCloud)
		.start();
};
