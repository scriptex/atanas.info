import { intervalToDuration } from 'date-fns';

import statistics from '@data/lotties/statistics.json';
import { Animation } from '@components';

export interface GeneralInsight {
	readonly title: string;
	readonly value: any;
}

export const START_YEAR = 2013;

export const { years } = intervalToDuration({
	start: new Date(START_YEAR, 0, 0, 0, 0, 0),
	end: new Date(new Date().getFullYear(), 0, 0, 0, 0, 0)
});

export const YEARS: string[] = Array(years)
	.fill(0)
	.map((_, i) => `${START_YEAR + i}`);

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
	id: 'stats',
	title: 'Stats',
	hasButton: true,
	additionalElements: <Animation data={statistics} width={150} height={150} className="c-section__animation" />
};
