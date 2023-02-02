import Head from 'next/head';
import Link from 'next/link';
import { FC, useRef, useEffect } from 'react';

import { Routes } from '@data/routes';
import gitlabCalendarData from '@data/gitlab-calendar.json';
import { Ref, formatDate } from '@scripts/shared';
import { getData, queryGitlab } from '@lib/mongodb';
import { GitlabInsights, GitlabRepository } from '@scripts/types';
import { Layout, Section, StatsEntry, StatsError } from '@components';
import { addTitles, GeneralInsight, sectionStatsProps } from '@scripts/stats';

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

type Props = {
	data: GitlabInsights;
};

export const GitlabStats: FC<Readonly<Props>> = ({ data }: Props) => {
	const { error, calendar, updated }: GitlabInsights = data;
	const blocks = extractGitlabData(data);
	const timeout: Ref<NodeJS.Timeout> = useRef(null);
	const calendarPlaceholder1: Ref<HTMLDivElement> = useRef(null);
	const calendarPlaceholder2: Ref<HTMLDivElement> = useRef(null);

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

	useEffect(() => {
		timeout.current = setTimeout(() => {
			addTitles('.c-calendar--gitlab', (rect: SVGRectElement) => rect.getAttribute('title') || '');
		}, 3000);

		return () => {
			if (timeout.current !== null) {
				clearTimeout(timeout.current);
			}
		};
	}, []);

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
				{error || blocks.length === 0 ? (
					<StatsError network="Gitlab" />
				) : (
					<>
						<StatsEntry data={blocks} title="Gitlab profile statistics" />

						<div className="c-section__entry">
							<small className="c-section__stamp">
								Last updated: {formatDate(updated || new Date().getTime(), 'dd MMM yyyy HH:mm:ss')}
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
					</>
				)}
			</Section>
		</Layout>
	);
};

export const getStaticProps = async () => getData('Insights', queryGitlab);

export default GitlabStats;
