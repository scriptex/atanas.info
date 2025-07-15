import { FC, MutableRefObject, Ref, useEffect, useRef, useState } from 'react';

import { Asset } from 'contentful';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { Button, GithubSkyline, Layout, Loader, Section, StatsEntry, StatsError, Title } from '@components';
import { Routes } from '@data/routes';
import { getData, queryGithub } from '@lib/mongodb';
import { getFundingFromCMS, getGithubSkylineFromCMS, getPartnersFromCMS, GithubSkylineData } from '@scripts/cms';
import { formatDate, getHoliday } from '@scripts/shared';
import { addTitles, GeneralInsight, sectionStatsProps } from '@scripts/stats';
import type { GithubInsights, GithubProfileData, GithubRepository, GithubStatsPageData } from '@scripts/types';

const extractGithubData = ({
	general,
	repositories
}: Pick<GithubInsights, 'general' | 'repositories'>): GeneralInsight[] => {
	if (!general || !repositories) {
		return [];
	}

	return [
		{
			title: 'Used languages',
			value: repositories
				.reduce(
					(result: string[], repo: GithubRepository) => Array.from(new Set([...result, repo.language ?? ''])),
					[]
				)
				.filter(Boolean)
				.join(', ')
		},
		{ title: 'Followers', value: general.followers },
		{ title: 'Following', value: general.following },
		{ title: 'Joined date', value: formatDate(general.createdAt) },
		{ title: 'Updated at', value: formatDate(general.updatedAt) },
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

				return result + (contributor.count ?? 0);
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
	].map((item, index) => ({ ...item, index }));
};

const registerMutationObserver = (element: HTMLDivElement | null): MutationObserver =>
	new MutationObserver(mutations => {
		for (const mutation of mutations) {
			if (mutation.type === 'childList' && !element?.classList.contains('js--titles-added')) {
				const items = Array.from(element?.querySelectorAll('.ContributionCalendar-day') ?? []);

				for (const item of items) {
					const id = item.id;
					const tooltip = document.querySelector(`[for="${id}"]`);

					if (tooltip) {
						const title = tooltip.textContent ?? '';

						item.setAttribute('title', title);

						tooltip.parentNode?.removeChild(tooltip);
					}
				}

				element?.classList.add('js--titles-added');
			}
		}
	});

type Props = {
	data: GithubProfileData;
	error: boolean;
	loading: boolean;
};

const GithubCalendar: FC<Props> = ({ data, error, loading }: Props) => {
	const timeout = useRef<NodeJS.Timeout | null>(null);
	const calendarPlaceholder: Ref<HTMLDivElement> = useRef(null);

	useEffect(() => {
		import('gitlab-calendar')
			.then(({ GitlabCalendar }) => {
				if (calendarPlaceholder.current && !!data.days) {
					new GitlabCalendar( //NOSONAR
						calendarPlaceholder.current,
						data.days.reduce(
							(result, item) => ({
								...result,
								[item.date]: item.count
							}),
							{}
						),
						{
							legendValues: [
								{ min: 0, title: 'No contributions' },
								{ min: 1, title: '1-2 contributions' },
								{ min: 3, title: '3-5 contributions' },
								{ min: 6, title: '6-8 contributions' },
								{ min: 9, title: '9+ contributions' }
							]
						}
					);
				}
			})
			.catch(console.error);
	}, [data.days]);

	useEffect(() => {
		timeout.current = setTimeout(() => {
			addTitles('.c-calendar--github', (rect: SVGRectElement) => rect.getAttribute('title') ?? '');
		}, 3000);

		return () => {
			if (timeout.current !== null) {
				clearTimeout(timeout.current);
			}
		};
	}, []);

	return (
		<>
			<h3>Github contributions calendar</h3>

			{loading ? (
				<div className="c-calendar__outer c-calendar__outer--loading">
					<Loader />
				</div>
			) : error || !data.days ? ( //NOSONAR
				<div className="c-calendar__outer c-calendar__outer--error">
					<p>Error fetching Github calendar data.</p>
					<p>Please try again later.</p>
				</div>
			) : (
				<div className="c-calendar__outer c-calendar--github" data-holiday={getHoliday()}>
					<div ref={calendarPlaceholder} />
				</div>
			)}
		</>
	);
};

const GithubSkylineComponent: FC<{ data: GithubSkylineData | null }> = ({ data }) => {
	const [current, setCurrent] = useState(-1);

	if (!data) {
		return null;
	}

	return (
		<div className="c-skyline">
			<nav className="c-skyline__nav">
				<h4>
					Previous years Github contributions <br />
					<small>(requires WebGL)</small>
				</h4>

				<ul>
					{data.years.map((year: Asset, index: number) => (
						<li className={current === index ? 'current' : undefined} key={year.sys.id}>
							<Button className="c-btn--small" onClick={() => setCurrent(index)} type="button">
								{year.fields.file?.fileName?.toString().replace('.stl', '')}
							</Button>
						</li>
					))}
				</ul>
			</nav>

			{data.years.map((year: Asset, index: number) =>
				index === current ? (
					<GithubSkyline
						background={data.background.fields.file?.url?.toString()}
						file={year.fields.file?.url?.toString()}
						index={index}
						key={year.sys.id}
						texture={data.texture.fields.file?.url?.toString()}
					/>
				) : null
			)}
		</div>
	);
};

export const GithubStats: FC<Readonly<InferGetStaticPropsType<typeof getStaticProps>>> = ({
	data,
	funding,
	githubSkyline,
	partners
}) => {
	const { error: statsError, updated, ...rest }: GithubInsights = data;
	const blocks: GeneralInsight[] = statsError ? [] : extractGithubData(rest);

	const calendarRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const [githubProfileData, setGithubProfileData] = useState<GithubProfileData>({});

	useEffect(() => {
		fetch('/api/github-calendar')
			.then(r => r.json())
			.then(r => {
				setError(false);
				setGithubProfileData(r);
			})
			.catch(() => {
				setError(true);
				setGithubProfileData({});
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		const { current } = calendarRef;
		const observer: MutationObserver = registerMutationObserver(current);

		if (current) {
			observer.observe(current, { childList: true, subtree: true });
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<Layout funding={funding} partners={partners}>
			<Title text="Github Stats" />

			<Section
				{...sectionStatsProps}
				actions={
					<Link className="c-btn" href={Routes.STATS}>
						Go back
					</Link>
				}
				hasShell={false}
			>
				{statsError ? (
					<StatsError network="Github" />
				) : (
					<>
						<StatsEntry data={blocks} title="Github profile statistics" />

						<div className="c-section__entry">
							<small className="c-section__stamp">
								Last updated: {formatDate(updated ?? new Date().getTime(), 'dd MMM yyyy HH:mm:ss')}
							</small>

							<div className="o-shell" ref={calendarRef}>
								<GithubCalendar data={githubProfileData} error={error} loading={loading} />

								<GithubSkylineComponent data={githubSkyline} />
							</div>
						</div>
					</>
				)}
			</Section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<GithubStatsPageData> = async () => ({
	props: {
		data: (await getData('Insights', queryGithub)).props.data as GithubInsights,
		funding: await getFundingFromCMS(),
		githubSkyline: await getGithubSkylineFromCMS(),
		partners: await getPartnersFromCMS()
	},
	revalidate: 86400
});

export default GithubStats;
