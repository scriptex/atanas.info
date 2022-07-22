import * as React from 'react';

import { format } from 'date-fns';

import { addTitles } from './utils';

import { isPrerendering } from '../../scripts/shared';
import { Section, NPMStats, GithubStats, GitlabStats } from '..';

export const Stats: React.FC = () => {
	const timeout: React.MutableRefObject<NodeJS.Timeout | null> = React.useRef(null);

	React.useEffect(() => {
		timeout.current = setTimeout(() => {
			if (isPrerendering) {
				return;
			}

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
		<Section id="stats" title="Stats" hasShell={false} hasButton={true} className=" circles">
			<GithubStats />

			<GitlabStats />

			<NPMStats />
		</Section>
	);
};

export default Stats;
