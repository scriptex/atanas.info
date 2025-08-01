import { FC, useEffect, useRef } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { Layout, Section, StatsEntry, StatsError, Title } from '@components';
import { Routes } from '@data/routes';
import { getData, queryGitlab } from '@lib/mongodb';
import { getFundingFromCMS, getOwnerDetailsFromCMS, getPartnersFromCMS } from '@scripts/cms';
import { formatDate, Ref } from '@scripts/shared';
import { addTitles, GeneralInsight, sectionStatsProps } from '@scripts/stats';
import type { GitlabInsights, GitlabRepository, GitlabStatsPageData } from '@scripts/types';

const extractGitlabData = ({ calendar, general, repositories }: GitlabInsights): GeneralInsight[] => {
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
			value: repositories.reduce((result: number, repo: GitlabRepository) => result + (repo.issues ?? 0), 0)
		}
	].map((item, index) => ({ ...item, index }));
};

export const GitlabStats: FC<Readonly<InferGetStaticPropsType<typeof getStaticProps>>> = ({
	calendarData,
	data,
	funding,
	partners
}) => {
	const { calendar, error, updated }: GitlabInsights = data;
	const blocks = extractGitlabData(data);
	const timeout = useRef<NodeJS.Timeout | null>(null);
	const calendarPlaceholder: Ref<HTMLDivElement> = useRef(null);

	useEffect(() => {
		import('gitlab-calendar')
			.then(({ GitlabCalendar }) => {
				if (calendarPlaceholder.current && !!calendar) {
					new GitlabCalendar(calendarPlaceholder.current, calendar, {}); //NOSONAR
				}
			})
			.catch(console.error);
	}, [calendar, calendarData]);

	useEffect(() => {
		timeout.current = setTimeout(() => {
			addTitles('.c-calendar--gitlab', (rect: SVGRectElement) => rect.getAttribute('title') ?? '');
		}, 3000);

		return () => {
			if (timeout.current !== null) {
				clearTimeout(timeout.current);
			}
		};
	}, []);

	return (
		<Layout funding={funding} partners={partners}>
			<Title text="Gitlab Stats" />

			<Section
				{...sectionStatsProps}
				actions={
					<Link className="c-btn" href={Routes.STATS}>
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
								Last updated: {formatDate(updated ?? new Date().getTime(), 'dd MMM yyyy HH:mm:ss')}
							</small>

							<div className="o-shell">
								<h3>Gitlab contributions calendar</h3>

								<div className="c-calendar__outer">
									<div className="c-calendar c-calendar--gitlab">
										<div className="c-calendar__entry">
											<div ref={calendarPlaceholder} />
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

export const getStaticProps: GetStaticProps<GitlabStatsPageData> = async () => ({
	props: {
		calendarData: (await getOwnerDetailsFromCMS()).privateGitlabCalendar,
		data: (await getData<GitlabInsights>('Insights', queryGitlab)).props.data,
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	},
	revalidate: 86400
});

export default GitlabStats;
