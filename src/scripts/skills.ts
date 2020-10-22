import { drag } from 'd3-drag';
import { range } from 'd3-array';
import { randomUniform } from 'd3-random';
import { select, Selection } from 'd3-selection';
import {
	forceX,
	forceY,
	forceLink,
	Simulation,
	forceCenter,
	forceCollide,
	forceManyBody,
	forceSimulation
} from 'd3-force';

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

	const renderSkills = (data: any): void => {
		const simulation: any = createSimulation(width, height);
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
				const name = select(group.querySelector('.skill-name'));
				const image = select(group.querySelector('use'));
				const duration = select(group.querySelector('.skill-duration'));

				name.attr('x', (d: any) => d.x).attr('y', (d: any) => d.y);
				image.attr('x', (d: any) => d.x).attr('y', (d: any) => d.y);
				duration.attr('x', (d: any) => d.x).attr('y', (d: any) => d.y);
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

export const dragHandler = (simulation: Simulation<any, any>): any => {
	return drag()
		.on('start', (event: any, d: any) => {
			if (!event.active) {
				simulation.alphaTarget(0.3).restart();
			}

			d.fx = event.x;
			d.fy = event.y;
		})
		.on('drag', (event: any, d: any) => {
			d.fx = event.x;
			d.fy = event.y;
		})
		.on('end', (event: any, d: any) => {
			if (!event.active) {
				simulation.alphaTarget(0);
			}

			d.fx = null;
			d.fy = null;
		});
};

export const createSimulation = (width: number, height: number): Simulation<any, any> => {
	return forceSimulation()
		.force(
			'link',
			forceLink().id((d: any) => d.index)
		)
		.force('collide', forceCollide((d: any) => d.r * 1.75).iterations(10))
		.force('charge', forceManyBody())
		.force('center', forceCenter(width / 2, height / 2))
		.force('y', forceY(0))
		.force('x', forceX(0));
};

export const createLinks = (svg: Canvas, data: Node[]): any => {
	return svg.append('g').selectAll('line').data(data).enter().append('line');
};

export const createNodes = (
	svg: Canvas,
	data: Node[],
	winWidth: number,
	callable: () => void
): Selection<SVGCircleElement, Node, SVGElement, unknown> => {
	const nodes = svg
		.append('g')
		.selectAll('circle')
		.data(data)
		.enter()
		.append('g')
		.append('circle')
		.attr('r', (d: any) => d.r)
		.attr('fill', (d: any) => d.fill)
		.attr('stroke', (d: any) => d.fill)
		.call(callable);

	nodes.each(function (d: any) {
		const group = select((this as any).parentNode);
		const { width, height } = d;

		let mod = 1.5;

		if (winWidth < 1024) {
			mod = 1.25;
		}

		if (winWidth < 768) {
			mod = 1;
		}

		const imgWidth = width * mod;
		const imgHeight = height * mod;

		group
			.append('use')
			.attr('width', imgWidth)
			.attr('height', imgHeight)
			.attr('transform', `translate(-${imgWidth / 2},-${imgHeight / 2})`)
			.attr('xlink:xlink:href', `#svg-${d.icon}`);

		group
			.append('text')
			.text((d: any) => `${d.text}`)
			.attr('class', 'skill-name')
			.attr('text-anchor', 'middle')
			.attr('dy', '-0.25rem');

		group
			.append('text')
			.attr('class', 'skill-duration')
			.text((d: any) => `Since ${d.since}`)
			.attr('text-anchor', 'middle')
			.attr('font-weight', 'bold')
			.attr('dy', '1rem');
	});

	return nodes;
};
