import * as React from 'react';

import gitlab from '../../data/gitlab-insights.json';
import gitlabCalendarData from '../../data/gitlab-calendar.json';
import GitlabActivityCalendar from '../../scripts/gitlab-calendar';

import { StatsEntry } from '..';
import { GeneralInsight } from './utils';
import { formatDate, isPrerendering } from '../../scripts/shared';

export const GitlabStats: React.FC = () => {
	const { error, general, calendar, updated, repositories } = gitlab;
	const calendarPlaceholder1: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
	const calendarPlaceholder2: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);

	const blocks: GeneralInsight[] = [
		{
			title: 'Used languages',
			value: repositories
				.reduce(
					(result: any[], repo: any) => Array.from(new Set([...result, ...Object.keys(repo.languages)])),
					[]
				)
				.filter(Boolean)
				.join(', ')
		},

		{ title: 'Joined date', value: formatDate(general.createdAt) },
		{ title: 'Last active', value: formatDate(general.updatedAt) },
		{
			title: 'Last year contributions',
			value: Object.values<number>(calendar).reduce((total: number, value: number) => total + value, 0)
		},
		{ title: 'Total repositories', value: repositories.length },
		{ title: 'Public repositories', value: repositories.filter((r: any) => !r.private).length },
		{ title: 'Private repositories', value: repositories.filter((r: any) => r.private).length },
		{ title: 'Personal repositories', value: repositories.filter((r: any) => r.owner === 'scriptex').length },
		{ title: 'Organizations repositories', value: repositories.filter((r: any) => r.owner !== 'scriptex').length },
		{
			title: 'Total stars',
			value: repositories.reduce((result: number, repo: any) => result + repo.stargazers, 0)
		},
		{
			title: 'Total issues',
			value: repositories.reduce((result: number, repo: any) => result + repo.issues || 0, 0)
		}
	];

	React.useEffect(() => {
		if (calendarPlaceholder1.current && !isPrerendering) {
			new GitlabActivityCalendar(calendarPlaceholder1.current, calendar);
		}

		if (calendarPlaceholder2.current && !isPrerendering) {
			new GitlabActivityCalendar(calendarPlaceholder2.current, gitlabCalendarData);
		}
	}, []);

	if (error) {
		return (
			<div className="c-section__entry c-section__entry--no-background">
				<div className="o-shell">
					<h3>Gitlab profile statistics</h3>

					<p>Failed fetching data from Gitlab. Please check again in 4 hours.</p>
				</div>
			</div>
		);
	}

	return (
		<>
			<StatsEntry data={blocks} title="Gitlab profile statistics" />

			<div className="c-section__entry">
				<small className="c-section__stamp">Last updated: {formatDate(updated, 'dd MMM yyyy HH:mm:ss')}</small>

				<div className="o-shell">
					<h3>Gitlab contributions calendars</h3>

					<div className="c-calendar__outer">
						<div className="c-calendar c-calendar--gitlab">
							<div className="c-calendar__entry">
								<h4>Public Gitlab profile</h4>

								<div ref={calendarPlaceholder1} />
							</div>

							<div className="c-calendar__entry">
								<h4>Private Gitlab profile</h4>

								<div ref={calendarPlaceholder2} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default GitlabStats;
