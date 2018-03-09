import * as d3 from 'd3';
import { dispatch } from './donut';

const width = window.innerWidth / 3 * 2;
const height = 768;
const fill = [...d3.schemeCategory20, ...d3.schemeCategory20];

const shuffle = arr => {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));

		[arr[i], arr[j]] = [arr[j], arr[i]];
	}

	return arr;
};

export const drawSkills = words => {
	d3
		.select('#skills-cloud')
		.selectAll('text')
		.data(shuffle(words))
		.enter()
		.append('span')
		.attr('class', d => `c-skill--${d.size}`)
		.attr('data-score', d => d.score)
		.style('color', (d, i) => fill[i])
		.text(d => d.text)
		.on('click', function(d) {
			dispatch.call('change-skill', null, {
				color: this.style.color || 'black',
				text: d.text,
				value: d.value,
				showPercent: true
			});
		});
};
