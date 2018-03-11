import * as d3 from 'd3';
import { createSVG } from './canvas';

const shuffle = arr => {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));

		[arr[i], arr[j]] = [arr[j], arr[i]];
	}

	return arr;
};

export const drawSkills = words => {
	words = shuffle(words);

	const range = words.length;
	const width = window.innerWidth;
	const height = window.innerHeight;
	const svg = createSVG('skills', width, height);

	const renderSkills = data => {
		const simulation = createSimulation(width, height);
		const links = createLinks(svg, data.links);
		const nodes = createNodes(svg, data.nodes, dragHandler(simulation));

		simulation.nodes(data.nodes).on('tick', () => {
			links
				.attr('x1', d => d.source.x)
				.attr('y1', d => d.source.y)
				.attr('x2', d => d.target.x)
				.attr('y2', d => d.target.y);

			nodes.attr('cx', d => d.x).attr('cy', d => d.y);

			nodes.each(function(d, i) {
				const group = this.parentNode;
				const text = d3.select(group.querySelector('text'));
				const image = d3.select(group.querySelector('image'));

				image.attr('x', d => d.x).attr('y', d => d.y);
				text.attr('x', d => d.x).attr('y', d => d.y);
			});
		});

		simulation.force('link').links(data.links);
	};

	renderSkills({
		nodes: words.map(word => {
			const adjustment = width < 768 ? 1.5 : 1;

			return {
				r: word.size * adjustment,
				...word
			};
		}),
		links: d3.range(0, range).map(() => ({
			source: ~~d3.randomUniform(range)(),
			target: ~~d3.randomUniform(range)()
		}))
	});
};

export const dragHandler = simulation => {
	return d3
		.drag()
		.on('start', d => {
			if (!d3.event.active) simulation.alphaTarget(0.3).restart();
			d.fx = d.x;
			d.fy = d.y;
		})
		.on('drag', d => {
			d.fx = d3.event.x;
			d.fy = d3.event.y;
		})
		.on('end', d => {
			if (!d3.event.active) simulation.alphaTarget(0);
			d.fx = null;
			d.fy = null;
		});
};

export const createSimulation = (width, height) => {
	const space = width / 64;

	return d3
		.forceSimulation()
		.force('link', d3.forceLink().id(d => d.index))
		.force('collide', d3.forceCollide(d => d.r * space).iterations(20))
		.force('charge', d3.forceManyBody())
		.force('center', d3.forceCenter(width / 2, height / 2))
		.force('y', d3.forceY(0))
		.force('x', d3.forceX(0));
};

export const createLinks = (svg, data) => {
	const links = svg
		.append('g')
		.selectAll('line')
		.data(data)
		.enter()
		.append('line');

	return links;
};

export const createNodes = (svg, data, callable) => {
	const nodes = svg
		.append('g')
		.selectAll('circle')
		.data(data)
		.enter()
		.append('g')
		.append('circle')
		.attr('r', d => `${d.r}vw`)
		.attr('fill', d => d.fill)
		.attr('stroke', d => d.fill)
		.call(callable);

	nodes.each(function(d, i) {
		const group = d3.select(this.parentNode);
		const { width, height } = d;
		const mod = window.innerWidth >= 768 ? 2 : 1;
		const imgWidth = width * mod;
		const imgHeight = height * mod;

		group
			.append('image')
			.attr('width', imgWidth)
			.attr('height', imgHeight)
			.attr('transform', `translate(-${imgWidth / 2},-${imgHeight / 2})`)
			.attr('xlink:xlink:href', `assets/images/svg/${d.icon}.svg`);

		group
			.append('text')
			.text(d => `${d.text}`)
			.attr('text-anchor', 'middle')
			.attr('dy', '0.35rem');
	});

	return nodes;
};
