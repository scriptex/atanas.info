import * as d3 from 'd3';
import { IndexedList } from 'universal-github-client';

import { sub, startOfDay } from 'date-fns';

import { formatDate } from '../../components/section-stats';

export const getColor = (count: number, max: number, colors: string[]): string => {
	if (count > 0 && count <= max * 0.1) {
		return colors[1];
	} else if (count > max * 0.1 && count <= max * 0.3) {
		return colors[2];
	} else if (count > max * 0.3 && count <= max * 0.6) {
		return colors[3];
	} else if (count > max * 0.6 && count <= max * 1) {
		return colors[4];
	} else {
		return colors[0];
	}
};

export const getKey = (data: IndexedList<number>, d: Date): string | undefined => {
	return Object.keys(data).find((key: string) => startOfDay(d).getTime() === startOfDay(new Date(key)).getTime());
};

export const renderContributions = (selector: string, data: IndexedList<number>): void => {
	let rectX = 0;
	let rectY = 0;
	let x = 0;

	const yearAgo = startOfDay(
		sub(new Date(), {
			years: 1
		})
	);

	const max = Math.max(...(Object.values(data) as number[]));

	const svg = d3.select(selector).append('svg').attr('width', 795).attr('height', 105);
	const range = d3.timeDay.range(yearAgo, new Date());
	const days = svg.selectAll('rect').data(range);
	const colors = ['#eee', '#c6e48b', '#7bc96f', '#239a3b', '#196127'];

	days.enter()
		.append('rect')
		.attr('width', 14)
		.attr('height', 14)
		.attr('fill', d => {
			const key = getKey(data, d);

			if (key) {
				return getColor(data[key], max, colors);
			}

			return colors[0];
		})
		.attr('x', (_, i: number): number => {
			if (i === 0) {
				return 0;
			}

			rectX++;

			if (rectX > 0 && rectX % 7 === 0) {
				x++;
			}

			return x * 15;
		})
		.attr('y', (_, i: number): number => {
			if (i === 0) {
				return 0;
			}

			rectY++;

			return (rectY % 7) * 15;
		})
		.attr('data-date', d => d.toString())
		.attr('title', d => {
			const key = getKey(data, d);

			if (key) {
				return `${data[key]} contributions on ${formatDate(d.toISOString())}`;
			}

			return null;
		});
};
