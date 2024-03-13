import { intervalToDuration } from 'date-fns/intervalToDuration';

import { Animation } from '@components';

import statistics from '@data/lotties/statistics.json';

export type GeneralInsight = {
	readonly index: number;
	readonly title: string;
	readonly value: string | number;
};

export const START_YEAR = 2013;

export const { years } = intervalToDuration({
	end: new Date(new Date().getFullYear(), 0, 0, 0, 0, 0),
	start: new Date(START_YEAR, 0, 0, 0, 0, 0)
});

export const YEARS: string[] = Array(years)
	.fill(0)
	.map((_: string, i: number) => `${START_YEAR + i}`);

export const addTitles = (selector: string, getTitle: (rect: SVGRectElement) => string): void => {
	const rects: SVGRectElement[] = Array.from(document.querySelectorAll(`${selector} rect`));

	rects.forEach((rect: SVGRectElement) => {
		const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		const titleElement = document.createElementNS('http://www.w3.org/2000/svg', 'title');
		const titleString = getTitle(rect);

		rect?.parentNode?.insertBefore(group, rect);

		titleElement.innerHTML = titleString.replace('<br />', ' on ');

		group.appendChild(titleElement);
		group.appendChild(rect);
	});
};

export const sectionStatsProps = {
	additionalElements: <Animation className="c-section__animation" data={statistics} height={150} width={150} />,
	hasButton: true,
	id: 'stats',
	title: 'Stats'
};
