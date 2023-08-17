import { range } from 'd3-array';
import { randomUniform } from 'd3-random';
import { drag, D3DragEvent } from 'd3-drag';
import { select, Selection } from 'd3-selection';
import {
	forceX,
	forceY,
	forceLink,
	Simulation,
	forceCenter,
	forceCollide,
	forceManyBody,
	forceSimulation,
	SimulationLinkDatum,
	SimulationNodeDatum
} from 'd3-force';

import type { ForceNode } from '@data/skills-list';
import { Canvas, createSVG } from './canvas';

type Node = ForceNode & Readonly<{ r: number }>;

type LinkedNode = SimulationNodeDatum & Node;

type Link<T> = {
	index?: number;
	target: T;
	source: T;
};

type Data = {
	nodes: Node[];
	links: Link<LinkedNode>[];
};

type ForceGraphType = 'skills' | 'occupation';
type ForceSimulation = Simulation<LinkedNode, SimulationLinkDatum<LinkedNode>>;
type DragEvent = D3DragEvent<Element, LinkedNode, LinkedNode>;

export const renderForceDirectedGraph = (id: string, items: ForceNode[], type: ForceGraphType): void => {
	const all = items.length;
	const size = window.innerHeight;
	const svg = createSVG(id, size, size);

	const renderSkills = (data: Data): void => {
		const sizeAdjustment = window.innerWidth > window.innerHeight ? 1.2 : 1;
		const simulation: ForceSimulation = createSimulation(size * sizeAdjustment, size, type);
		const links = createLinks(svg, data.links);
		const nodes = createNodes(svg, data.nodes, type, dragHandler(simulation));

		simulation.nodes(data.nodes).on('tick', () => {
			links
				.attr('x1', d => d.source.x!)
				.attr('y1', d => d.source.y!)
				.attr('x2', d => d.target.x!)
				.attr('y2', d => d.target.y!);

			nodes.attr('cx', d => d.x!).attr('cy', d => d.y!);

			nodes.each(function () {
				const group = this.parentNode;

				if (!group) {
					return;
				}

				const name = select<Element | null, LinkedNode>(group.querySelector('.skill-name'));
				const image = select<Element | null, LinkedNode>(group.querySelector('use'));
				const duration = select<Element | null, LinkedNode>(group.querySelector('.skill-duration'));

				name.attr('x', d => d.x!).attr('y', d => d.y!);
				image.attr('x', d => d.x!).attr('y', d => d.y!);
				duration.attr('x', d => d.x!).attr('y', d => d.y!);
			});
		});

		simulation.force('link', forceLink(data.links));
	};

	renderSkills({
		nodes: items.map(item => ({
			r: type === 'skills' ? 30 : 100,
			...item
		})),
		links: range(0, all).map(() => ({
			source: ~~randomUniform(all)(),
			target: ~~randomUniform(all)()
		})) as unknown as Link<LinkedNode>[]
	});
};

export const dragHandler = (simulation: ForceSimulation): any =>
	drag<Element, LinkedNode>()
		.on('start', (event: DragEvent, d) => {
			if (!event.active) {
				simulation.alphaTarget(0.3).restart();
			}

			d.fx = event.x;
			d.fy = event.y;
		})
		.on('drag', (event: DragEvent, d) => {
			d.fx = event.x;
			d.fy = event.y;
		})
		.on('end', (event: DragEvent, d) => {
			if (!event.active) {
				simulation.alphaTarget(0);
			}

			d.fx = null;
			d.fy = null;
		});

export const createSimulation = (width: number, height: number, type: ForceGraphType): ForceSimulation => {
	const collision = type === 'skills' ? 1.75 : 1.25;

	return forceSimulation<LinkedNode>()
		.force(
			'link',
			forceLink().id(d => d.index!)
		)
		.force('collide', forceCollide<LinkedNode>(d => d.r! * collision).iterations(10))
		.force('charge', forceManyBody())
		.force('center', forceCenter(width / 2, height / 2))
		.force('y', forceY(0))
		.force('x', forceX(0));
};

export const createLinks = (
	svg: Canvas,
	data: Data['links']
): Selection<SVGLineElement, Link<LinkedNode>, SVGGElement, unknown> =>
	svg.append('g').selectAll('line').data(data).enter().append('line');

export const createNodes = (
	svg: Canvas,
	data: Node[],
	type: ForceGraphType,
	callable: () => void
): Selection<SVGCircleElement, LinkedNode, SVGElement, unknown> => {
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
		const group = select(this.parentNode as Element);
		const { width, height } = d;

		let link: Selection<HTMLAnchorElement, unknown, null, undefined> | null = null;

		if (d.url) {
			link = group.append('a').attr('href', d.url).attr('target', '_blank').attr('rel', 'noopener noreferrer');
		}

		const parent = link ?? group;

		parent
			.append('use')
			.attr('width', width)
			.attr('height', height)
			.attr('transform', `translate(-${width / 2},-${height / 2})`)
			.attr('xlink:xlink:href', `#svg-${d.icon}`)
			.attr('fill', d.iconFill!);

		parent
			.append('text')
			.text(d.text)
			.attr('class', 'skill-name')
			.attr('text-anchor', 'middle')
			.attr('dy', '-0.25em');

		if (d.since) {
			parent
				.append('text')
				.attr('class', 'skill-duration')
				.text(`Since ${d.since}`)
				.attr('text-anchor', 'middle')
				.attr('font-weight', 'bold')
				.attr('dy', '1em');
		}
	});

	return nodes;
};
