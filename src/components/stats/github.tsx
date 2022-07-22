import * as React from 'react';
import ReactGitHubCalendar from 'react-ts-github-calendar';

import github from '../../data/github-insights.json';

import { StatsEntry, GithubSkyline } from '..';
import { GeneralInsight, YEARS } from './utils';
import { formatDate, isPrerendering } from '../../scripts/shared';

export const GithubStats: React.FC = () => {
	const [current, setCurrent] = React.useState(-1);
	const { error, general, calendar, updated, repositories } = github;

	if (error) {
		return (
			<div className="c-section__entry c-section__entry--no-background">
				<div className="o-shell">
					<h3>Github profile statistics</h3>

					<p>Failed fetching data from Github. Please check again in 4 hours.</p>
				</div>
			</div>
		);
	}

	const calendarDates = Object.keys(calendar).reduce((result: string[], key: string) => {
		if (Object.keys((calendar as any)[key]).length === 0) {
			return result;
		}

		return [...result, key];
	}, []);

	const blocks: GeneralInsight[] = [
		{
			title: 'Used languages',
			value: repositories
				.reduce((result: any[], repo: any) => Array.from(new Set([...result, repo.language])), [])
				.filter(Boolean)
				.join(', ')
		},
		{ title: 'Followers', value: general.followers },
		{ title: 'Following', value: general.following },
		{ title: 'Joined date', value: formatDate(general.createdAt) },
		{ title: 'Updated at', value: formatDate(general.updatedAt) },
		{ title: 'Last active', value: formatDate(calendarDates.reverse()[0]) },
		{ title: 'Total repositories', value: repositories.length },
		{ title: 'Private repositories', value: general.privateRepos },
		{ title: 'Public repositories', value: general.publicRepos },
		{
			title: 'Organizations repositories',
			value: repositories.length - general.publicRepos - general.privateRepos
		},
		{ title: 'Total gists', value: general.privateGists + general.publicGists },
		{ title: 'Private gists', value: general.privateGists },
		{ title: 'Public gists', value: general.publicGists },
		{
			title: 'Total contributions',
			value: repositories.reduce((result: number, repo: any) => {
				const contributor = repo.contributions.find(({ user }: { user: string }) => {
					user = user.toLowerCase();

					return user === 'scriptex' || user.includes('bot');
				});

				if (!contributor) {
					return result;
				}

				return result + contributor.count;
			}, 0)
		},
		{
			title: 'Total stars',
			value: repositories.reduce((result: number, repo: any) => result + repo.stargazers, 0)
		},
		{
			title: 'Total issues',
			value: repositories.reduce((result: number, repo: any) => result + repo.issues, 0)
		}
	];

	return (
		<>
			<StatsEntry data={blocks} title="Github profile statistics" />

			<div className="c-section__entry">
				<small className="c-section__stamp">Last updated: {formatDate(updated, 'dd MMM yyyy HH:mm:ss')}</small>

				<div className="o-shell">
					<h3>Github contributions calendar</h3>

					<div className="c-calendar__outer">
						<div className="c-calendar c-calendar--github">
							{isPrerendering ? null : <ReactGitHubCalendar tooltips userName="scriptex" />}
						</div>
					</div>

					<div className="c-skyline">
						<nav className="c-skyline__nav">
							<h4>
								Previous years Github contributions <br />
								<small>(requires WebGL)</small>
							</h4>

							<ul>
								{YEARS.map((year: string, index: number) => (
									<li key={index} className={current === index ? 'current' : undefined}>
										<button onClick={() => setCurrent(index)} className="c-btn c-btn--small">
											{year}
										</button>
									</li>
								))}
							</ul>
						</nav>

						{YEARS.map((year: string, index: number) =>
							index === current ? <GithubSkyline key={index} file={`${year}.stl`} index={index} /> : null
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default GithubStats;
