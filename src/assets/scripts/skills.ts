import * as d3 from 'd3';

import { Skill } from './skills-list';
import { Canvas, createSVG } from './canvas';

interface Node extends Skill {
	readonly r: number;
}

export const drawSkills = (words: Skill[]): void => {
	const all = words.length;
	const width = window.innerWidth;
	const height = window.innerHeight;
	const svg = createSVG('skills-graph', width, height);

	const renderSkills = (data: any) => {
		const simulation = createSimulation(width, height);
		const links = createLinks(svg, data.links);
		const nodes = createNodes(svg, data.nodes, width, dragHandler(simulation));

		simulation.nodes(data.nodes).on('tick', () => {
			links
				.attr('x1', (d: any) => d.source.x)
				.attr('y1', (d: any) => d.source.y)
				.attr('x2', (d: any) => d.target.x)
				.attr('y2', (d: any) => d.target.y);

			nodes.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y);

			nodes.each(function () {
				const group: any = this.parentNode;
				const name = d3.select(group.querySelector('.skill-name'));
				const image = d3.select(group.querySelector('image'));
				const duration = d3.select(group.querySelector('.skill-duration'));

				name.attr('x', (d: any) => d.x).attr('y', (d: any) => d.y);
				image.attr('x', (d: any) => d.x).attr('y', (d: any) => d.y);
				duration.attr('x', (d: any) => d.x).attr('y', (d: any) => d.y);
			});
		});

		(simulation as any).force('link').links(data.links);
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
		links: d3.range(0, all).map(() => ({
			source: ~~d3.randomUniform(all)(),
			target: ~~d3.randomUniform(all)()
		}))
	});
};

export const dragHandler = (simulation: d3.Simulation<any, any>): any => {
	return d3
		.drag()
		.on('start', (d: any) => {
			if (!(event as any).active) simulation.alphaTarget(0.3).restart();
			d.fx = d.x;
			d.fy = d.y;
		})
		.on('drag', (d: any) => {
			d.fx = (event as any).x;
			d.fy = (event as any).y;
		})
		.on('end', (d: any) => {
			if (!(event as any).active) simulation.alphaTarget(0);
			d.fx = null;
			d.fy = null;
		});
};

export const createSimulation = (width: number, height: number): d3.Simulation<any, any> => {
	return d3
		.forceSimulation()
		.force(
			'link',
			d3.forceLink().id((d: any) => d.index)
		)
		.force('collide', d3.forceCollide((d: any) => d.r * 1.75).iterations(20))
		.force('charge', d3.forceManyBody())
		.force('center', d3.forceCenter(width / 2, height / 2))
		.force('y', d3.forceY(0))
		.force('x', d3.forceX(0));
};

export const createLinks = (svg: Canvas, data: Node[]): any => {
	return svg.append('g').selectAll('line').data(data).enter().append('line');
};

export const createNodes = (
	svg: Canvas,
	data: Node[],
	winWidth: number,
	callable: () => void
): d3.Selection<SVGCircleElement, Node, SVGElement, unknown> => {
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

	nodes.each(function (d) {
		const group = d3.select(this.parentNode as any);
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
			.attr('xlink:xlink:href', `images/svg/${d.icon}.svg`);

		group
			.append('text')
			.text((d: any) => `${d.text}`)
			.attr('class', 'skill-name')
			.attr('text-anchor', 'middle')
			.attr('dy', '-0.25rem');

		group
			.append('text')
			.attr('class', 'skill-duration')
			.text((d: any) => `${d.duration}`)
			.attr('text-anchor', 'middle')
			.attr('font-weight', 'bold')
			.attr('dy', '1rem');
	});

	return nodes;
};
