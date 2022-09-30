import * as React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import { Ref } from '../../scripts/shared';
import statistics from '../../data/lotties/statistics.json';
import { addTitles } from './utils';
import { SubPage, statsItems } from '../../data/projects';
import { Loader, Section, Animation } from '..';

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
			<div className="c-section__grid o-grid">
				{statsItems.map((item: SubPage, index: number) => (
					<div key={index} className="o-grid__item xs-12 sm-6 md-4 lg-4 xl-4">
						<Link
							to={item.url}
							style={{ backgroundImage: `url(${item.image})` }}
							className="c-article-link fullsize-background"
						>
							<strong>{item.text}</strong>
						</Link>

						<Loader />
					</div>
				))}
			</div>
		</Section>
	);
};

export default Stats;
