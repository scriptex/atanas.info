import * as React from 'react';

import { Section } from '..';
import insights from '../../assets/scripts/insights.json';

interface GeneralInsight {
	readonly title: string;
	readonly value: any;
}

export const SectionStats: React.FunctionComponent = () => {
	const { general, repositories } = insights;

	const blocks: GeneralInsight[][] = [
		[
			{ title: 'Total repositories', value: general.privateRepos + general.publicRepos },
			{ title: 'Private repositories', value: general.privateRepos },
			{ title: 'Public repositories', value: general.publicRepos }
		],
		[
			{ title: 'Total gists', value: general.privateGists + general.publicGists },
			{ title: 'Private gists', value: general.privateGists },
			{ title: 'Public gists', value: general.publicGists }
		],
		[
			{ title: 'Followers', value: general.followers },
			{ title: 'Following', value: general.following },
			{ title: 'Joined date', value: general.createdAt },
			{ title: 'Last active', value: general.updatedAt }
		],
		[
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
		],
		[
			{
				title: 'Languages',
				value: repositories
					.reduce((result: any[], repo: any) => Array.from(new Set([...result, repo.language as any])), [])
					.filter(Boolean)
					.join(', ')
			}
		]
	];

	return (
		<Section id="stats" hasButton={true}>
			<h1>Stats</h1>

			<div className="c-section__entry">
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

			<div className="c-section__entry">
				<h2>Github profile statistics</h2>

				{blocks.map((block: GeneralInsight[], i: number) => (
					<ul key={i}>
						{block.map((item: GeneralInsight, j: number) => (
							<li key={j}>
								<span>{item.title}:</span>
								<strong>{item.value}</strong>
							</li>
						))}
					</ul>
				))}
			</div>
		</Section>
	);
};

export default SectionStats;
