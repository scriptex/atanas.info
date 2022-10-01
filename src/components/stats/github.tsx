import * as React from 'react';
import { Link } from 'react-router-dom';
import ReactGitHubCalendar from 'react-ts-github-calendar';

import github from '../../data/github-insights.json';

import { Routes } from '../../data/routes';
import { formatDate } from '../../scripts/shared';
import { GithubInsights, GithubRepository } from '../../scripts/types';
import { sectionStatsProps } from '.';
import { GeneralInsight, YEARS } from './utils';
import { Button, Section, StatsEntry, StatsError, GithubSkyline } from '..';

export const GithubStats: React.FC = () => {
	const [current, setCurrent] = React.useState(-1);
	const { error, general, calendar, updated, repositories }: GithubInsights = github;

	if (error) {
		return <StatsError network="Github" />;
	}

	const calendarDates = Object.keys(calendar).reduce((result: string[], key: string) => {
		if (Object.keys(calendar[key]).length === 0) {
			return result;
		}

		return [...result, key];
	}, []);

	const blocks: GeneralInsight[] = [
		{
			title: 'Used languages',
			value: repositories
				.reduce(
					(result: string[], repo: GithubRepository) => Array.from(new Set([...result, repo.language || ''])),
					[]
				)
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
			value: repositories.reduce((result: number, repo: GithubRepository) => {
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
			value: repositories.reduce((result: number, repo: GithubRepository) => result + repo.stargazers, 0)
		},
		{
			title: 'Total issues',
			value: repositories.reduce((result: number, repo: GithubRepository) => result + repo.issues, 0)
		}
	];

	return (
		<Section
			{...sectionStatsProps}
			actions={
				<Link to={Routes.STATS} className="c-btn">
					Go back
				</Link>
			}
			hasShell={false}
		>
			<StatsEntry data={blocks} title="Github profile statistics" />

			<div className="c-section__entry">
				<small className="c-section__stamp">Last updated: {formatDate(updated, 'dd MMM yyyy HH:mm:ss')}</small>

				<div className="o-shell">
					<h3>Github contributions calendar</h3>

					<div className="c-calendar__outer">
						<div className="c-calendar c-calendar--github">
							<ReactGitHubCalendar tooltips userName="scriptex" />
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
										<Button onClick={() => setCurrent(index)} className="c-btn--small">
											{year}
										</Button>
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
		</Section>
	);
};

export default GithubStats;
