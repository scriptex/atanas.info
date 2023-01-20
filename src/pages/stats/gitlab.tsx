import Head from 'next/head';
import Link from 'next/link';
import { FC, useRef, useEffect } from 'react';

import gitlab from '@data/gitlab-insights.json';
import { Routes } from '@data/routes';
import gitlabCalendarData from '@data/gitlab-calendar.json';
import { Ref, formatDate } from '@scripts/shared';
import { GitlabInsights, GitlabRepository } from '@scripts/types';
import { GeneralInsight, sectionStatsProps } from '@scripts/stats';
import { Layout, Section, StatsEntry, StatsError } from '@components';

export const extractGitlabData = ({ general, calendar, repositories }: GitlabInsights): GeneralInsight[] => {
	if (!repositories || !general || !calendar) {
		return [];
	}

	return [
		{
			title: 'Used languages',
			value: repositories
				.reduce(
					(result: string[], repo: GitlabRepository) =>
						Array.from(new Set([...result, ...Object.keys(repo.languages)])),
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
		{
			title: 'Public repositories',
			value: repositories.filter((r: GitlabRepository) => !r.private).length
		},
		{
			title: 'Private repositories',
			value: repositories.filter((r: GitlabRepository) => r.private).length
		},
		{
			title: 'Personal repositories',
			value: repositories.filter((r: GitlabRepository) => r.owner === 'scriptex').length
		},
		{
			title: 'Organizations repositories',
			value: repositories.filter((r: GitlabRepository) => r.owner !== 'scriptex').length
		},
		{
			title: 'Total stars',
			value: repositories.reduce((result: number, repo: GitlabRepository) => result + repo.stargazers, 0)
		},
		{
			title: 'Total issues',
			value: repositories.reduce((result: number, repo: GitlabRepository) => result + (repo.issues || 0), 0)
		}
	];
};

export const GitlabStats: FC = () => {
	const { error, calendar, updated }: GitlabInsights = gitlab;
	const calendarPlaceholder1: Ref<HTMLDivElement> = useRef(null);
	const calendarPlaceholder2: Ref<HTMLDivElement> = useRef(null);
	const blocks = extractGitlabData(gitlab);

	useEffect(() => {
		import('gitlab-calendar').then(({ GitlabCalendar }) => {
			if (calendarPlaceholder1.current && !!calendar) {
				new GitlabCalendar(calendarPlaceholder1.current, calendar, {});
			}

			if (calendarPlaceholder2.current) {
				new GitlabCalendar(calendarPlaceholder2.current, gitlabCalendarData, {});
			}
		});
	}, [calendar]);

	if (error || blocks.length === 0) {
		return <StatsError network="Gitlab" />;
	}

	return (
		<Layout>
			<Head>
				<title>Gitlab Stats | Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
			</Head>

			<Section
				{...sectionStatsProps}
				actions={
					<Link href={Routes.STATS} className="c-btn">
						Go back
					</Link>
				}
				hasShell={false}
			>
				<StatsEntry data={blocks} title="Gitlab profile statistics" />

				<div className="c-section__entry">
					<small className="c-section__stamp">
						Last updated: {formatDate(updated, 'dd MMM yyyy HH:mm:ss')}
					</small>

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
			</Section>
		</Layout>
	);
};

export default GitlabStats;
