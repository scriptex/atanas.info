import * as React from 'react';
import { format } from 'date-fns';

import { Section, ExternalLink } from '..';
import { getColor, renderContributions } from '../../scripts/gitlab-contributions';

interface GeneralInsight {
	readonly title: string;
	readonly value: any;
}

interface Props {
	data: any;
}

export const formatDate = (date: string): string => format(new Date(date), 'dd MMM yyyy');

export const GithubStats: React.FunctionComponent<Readonly<Props>> = (props: Readonly<Props>) => {
	const { general, calendar, repositories } = props.data;
	const blocks: GeneralInsight[] = [
		{
			title: 'Used languages',
			value: repositories
				.reduce((result: any[], repo: any) => Array.from(new Set([...result, repo.language as any])), [])
				.filter(Boolean)
				.join(', ')
		},
		{ title: 'Followers', value: general.followers },
		{ title: 'Following', value: general.following },
		{ title: 'Joined date', value: formatDate(general.createdAt) },
		{ title: 'Last active', value: formatDate(general.updatedAt) },
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

	const maxContributions = Math.max(...Object.values(calendar).map((value: any) => value.count));

	return (
		<>
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

					<div className="c-calendar__outer">
						<div className="c-calendar">
							{Object.keys(calendar).map((key: string, i: number) => (
								<div
									className="c-calendar__item"
									key={i}
									style={{
										backgroundColor: getColor(calendar[key].count, maxContributions)
									}}
									title={`${formatDate(key)}: ${calendar[key].count} contributions`}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export const GitlabStats: React.FunctionComponent<Readonly<Props>> = (props: Readonly<Props>) => {
	const { general, calendar, repositories } = props.data;
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
		renderContributions('#gitlab-calendar', calendar);
	});

	return (
		<>
			<div className="c-section__entry c-section__entry--no-background">
				<div className="o-shell">
					<h2>Gitlab profile statistics</h2>

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
					<h2>Gitlab contributions calendar</h2>

					<div className="c-calendar__outer">
						<div className="c-calendar" id="gitlab-calendar" />
					</div>
				</div>
			</div>
		</>
	);
};

export const SectionStats: React.FunctionComponent<Readonly<Props>> = (props: Readonly<Props>) => (
	<Section id="stats" hasShell={false} hasButton={true}>
		<header className="c-section__head">
			<div className="o-shell">
				<h1>Stats</h1>
			</div>
		</header>

		<div className="c-section__entry">
			<div className="o-shell">
				<div className="o-grid">
					<div className="o-grid__item o-grid__item--1of2">
						<h2>Codersrank Profile</h2>

						<codersrank-widget username="scriptex"></codersrank-widget>
					</div>

					<div className="o-grid__item o-grid__item--1of2">
						<h2>LinkedIn Profile</h2>

						<div
							className="LI-profile-badge"
							data-size="large"
							data-type="horizontal"
							data-theme="light"
							data-locale="en_US"
							data-vanity="scriptex"
							data-version="v1"
						>
							<ExternalLink
								href="https://bg.linkedin.com/in/scriptex?trk=profile-badge"
								className="LI-simple-link"
							>
								Atanas Atanasov
							</ExternalLink>
						</div>
					</div>
				</div>
			</div>
		</div>

		<GithubStats data={props.data.github} />

		<GitlabStats data={props.data.gitlab} />
	</Section>
);

export default SectionStats;
