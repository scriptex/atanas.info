// @ts-nocheck
import { drag } from 'd3-drag';
import { range } from 'd3-array';
import { randomUniform } from 'd3-random';
/* eslint-disable */
import { select, selectAll, style, text, on, attr, event, data } from 'd3-selection';
import {
	nodes,
	links,
	force,
	forceX,
	forceY,
	restart,
	forceLink,
	alphaTarget,
	forceCenter,
	forceCollide,
	forceManyBody,
	forceSimulation
} from 'd3-force';
/* eslint-enable */

import { createSVG } from './canvas';

export const drawSkills = words => {
	const all = words.length;
	const width = window.innerWidth;
	const height = window.innerHeight;
	const svg = createSVG('skills-graph', width, height);

	const renderSkills = data => {
		const simulation = createSimulation(width, height);
		const links = createLinks(svg, data.links);
		const nodes = createNodes(svg, data.nodes, width, dragHandler(simulation));

		simulation.nodes(data.nodes).on('tick', () => {
			links
				.attr('x1', d => d.source.x)
				.attr('y1', d => d.source.y)
				.attr('x2', d => d.target.x)
				.attr('y2', d => d.target.y);

			nodes.attr('cx', d => d.x).attr('cy', d => d.y);

			nodes.each(function(d, i) {
				const group = this.parentNode;
				const name = select(group.querySelector('.skill-name'));
				const image = select(group.querySelector('image'));
				const duration = select(group.querySelector('.skill-duration'));

				name.attr('x', d => d.x).attr('y', d => d.y);
				image.attr('x', d => d.x).attr('y', d => d.y);
				duration.attr('x', d => d.x).attr('y', d => d.y);
			});
		});

		simulation.force('link').links(data.links);
	};

	renderSkills({
		nodes: words.map(word => {
			let r = 40;

			if (width < 1024) {
				r = 30;
			}

			if (width < 768) {
				r = 20;
			}

			return {
				r,
				...word
			};
		}),
		links: range(0, all).map(() => ({
			source: ~~randomUniform(all)(),
			target: ~~randomUniform(all)()
		}))
	});
};

export const dragHandler = simulation => {
	return drag()
		.on('start', d => {
			if (!event.active) simulation.alphaTarget(0.3).restart();
			d.fx = d.x;
			d.fy = d.y;
		})
		.on('drag', d => {
			d.fx = event.x;
			d.fy = event.y;
		})
		.on('end', d => {
			if (!event.active) simulation.alphaTarget(0);
			d.fx = null;
			d.fy = null;
		});
};

export const createSimulation = (width, height) => {
	return forceSimulation()
		.force(
			'link',
			forceLink().id(d => d.index)
		)
		.force('collide', forceCollide(d => d.r * 1.75).iterations(20))
		.force('charge', forceManyBody())
		.force('center', forceCenter(width / 2, height / 2))
		.force('y', forceY(0))
		.force('x', forceX(0));
};

export const createLinks = (svg, data) => {
	return svg
		.append('g')
		.selectAll('line')
		.data(data)
		.enter()
		.append('line');
};

export const createNodes = (svg, data, winWidth, callable) => {
	const nodes = svg
		.append('g')
		.selectAll('circle')
		.data(data)
		.enter()
		.append('g')
		.append('circle')
		.attr('r', d => d.r)
		.attr('fill', d => d.fill)
		.attr('stroke', d => d.fill)
		.call(callable);

	nodes.each(function(d, i) {
		const group = select(this.parentNode);
		const { width } = d;

		let mod = 1.75;

		if (winWidth < 1024) {
			mod = 1.35;
		}

		if (winWidth < 768) {
			mod = 1;
		}

		const imgWidth = width * mod;
		const imgHeight = width * mod;

		group
			.append('image')
			.attr('width', imgWidth)
			.attr('height', imgHeight)
			.attr('transform', `translate(-${imgWidth / 2},-${imgHeight / 2})`)
			.attr('xlink:xlink:href', `assets/images/svg/${d.icon}.svg`);

		group
			.append('text')
			.text(d => `${d.text}`)
			.attr('class', 'skill-name')
			.attr('text-anchor', 'middle')
			.attr('dy', '-0.25rem');

		group
			.append('text')
			.attr('class', 'skill-duration')
			.text(d => `${d.duration}`)
			.attr('text-anchor', 'middle')
			.attr('font-weight', 'bold')
			.attr('dy', '1rem');
	});

	return nodes;
};
