import * as React from 'react';
import { format } from 'date-fns';

import { Ref } from '@scripts/shared';
import statistics from '@data/lotties/statistics.json';
import { addTitles } from './utils';
import { statsItems } from '@data/projects';
import { Section, Animation, SectionGrid } from '@components';

export const sectionStatsProps = {
	id: 'stats',
	title: 'Stats',
	hasButton: true,
	additionalElements: <Animation data={statistics} width={150} height={150} className="c-section__animation" />
};

export const Stats: React.FC = () => {
	const timeout: Ref<NodeJS.Timeout> = React.useRef(null);

	React.useEffect(() => {
		timeout.current = setTimeout(() => {
			addTitles('.c-calendar--gitlab', (rect: SVGRectElement) => rect.getAttribute('title') || '');

			addTitles('.c-calendar--github', (rect: SVGRectElement) => {
				const { date, count } = rect.dataset;

				if (typeof date === 'undefined' || typeof count === 'undefined') {
					return '';
				}

				const formattedDate = format(new Date(date as string), 'EEEE MMM d, yyyy');

				return `${count} contribution${count === '1' ? '' : 's'} on ${formattedDate}`;
			});
		}, 3000);

		return () => {
			if (timeout.current !== null) {
				clearTimeout(timeout.current);
			}
		};
	}, []);

	return (
		<Section {...sectionStatsProps} hasShell={true}>
			<SectionGrid data={statsItems} />
		</Section>
	);
};

export default Stats;
