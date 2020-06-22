import * as React from 'react';
import format from 'date-fns/format';

import insights from '../../assets/scripts/insights.json';
import { Section } from '..';

interface GeneralInsight {
	readonly title: string;
	readonly value: any;
}

export const formatDate = (date: string): string => format(new Date(date), 'dd MMM yyyy');

export const SectionStats: React.FunctionComponent = () => {
	const { general, calendar, repositories }: any = insights;

	const blocks: GeneralInsight[] = [
		{
			title: 'Top languages',
			value: repositories
				.reduce((result: any[], repo: any) => Array.from(new Set([...result, repo.language as any])), [])
				.filter(Boolean)
				.join(', ')
		},
		{ title: 'Followers', value: general.followers },
		{ title: 'Following', value: general.following },
		{ title: 'Joined date', value: formatDate(general.createdAt) },
		{ title: 'Last active', value: formatDate(general.updatedAt) },
		{ title: 'Total repositories', value: general.privateRepos + general.publicRepos },
		{ title: 'Private repositories', value: general.privateRepos },
		{ title: 'Public repositories', value: general.publicRepos },
		{ title: 'Total gists', value: general.privateGists + general.publicGists },
		{ title: 'Private gists', value: general.privateGists },
		{ title: 'Public gists', value: general.publicGists },
		{
			title: 'Total contributions',
			value: repositories.reduce((result: number, repo: any) => {
				const contributor = repo.contributions.find((contributor: any) => contributor.user === 'scriptex');

				return result + contributor?.count || 0;
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
		<Section id="stats" hasShell={false} hasButton={true}>
			<header className="c-section__head">
				<div className="o-shell">
					<h1>Stats</h1>
				</div>
			</header>

			<div className="c-section__entry">
				<div className="o-shell">
					<h2>
						<a
							href="https://profile.codersrank.io/user/scriptex"
							target="_blank"
							rel="noopener noreferrer nofollow"
						>
							Codersrank
						</a>{' '}
						Profile
					</h2>

					<codersrank-widget username="scriptex"></codersrank-widget>
				</div>
			</div>

			<div className="c-section__entry c-section__entry--no-background">
				<div className="o-shell">
					<h2>Github profile statistics</h2>

					<ul className="c-section__list">
						{blocks.map((item: GeneralInsight, i: number) => (
							<li key={i}>
								<span>{item.title}:</span>
								<strong>{item.value}</strong>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="c-section__entry">
				<div className="o-shell">
					<h2>Github contributions calendar</h2>

					<div className="c-calendar">
						{Object.keys(calendar).map((key: string, i: number) => (
							<div
								className="c-calendar__item"
								key={i}
								style={{ backgroundColor: calendar[key].color }}
								title={`${formatDate(key)} : ${calendar[key].count} contributions`}
							/>
						))}
					</div>
				</div>
			</div>
		</Section>
	);
};

export default SectionStats;
