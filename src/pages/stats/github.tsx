import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { Button, GithubSkyline, Layout, Loader, Section, StatsEntry, StatsError, Title } from '@components';
import { Routes } from '@data/routes';
import { getData, queryGithub } from '@lib/mongodb';
import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import { formatDate } from '@scripts/shared';
import { GeneralInsight, sectionStatsProps, YEARS } from '@scripts/stats';
import type { GithubInsights, GithubProfileData, GithubRepository, GithubStatsPageData } from '@scripts/types';

const extractGithubData = ({
	calendar,
	general,
	repositories
}: Pick<GithubInsights, 'general' | 'calendar' | 'repositories'>): GeneralInsight[] => {
	if (!general || !calendar || !repositories) {
		return [];
	}

	const calendarDates = Object.keys(calendar)
		.reduce((result: string[], key: string) => {
			if (Object.keys(calendar[key]).length === 0) {
				return result;
			}

			return [...result, key];
		}, [])
		.reverse();

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
		{ title: 'Last active', value: formatDate(calendarDates[0]) },
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

const GithubCalendar: FC<Props> = ({ data: { markup, stylesheet }, error, loading }: Props) => (
	<>
		<h3>Github contributions calendar</h3>

		{loading ? (
			<div className="c-calendar__outer c-calendar__outer--loading">
				<Loader />
			</div>
		) : error || !markup || !stylesheet ? (
			<div className="c-calendar__outer c-calendar__outer--error">
				<p>Error fetching Github calendar data.</p>
				<p>Please try again later.</p>
			</div>
		) : (
			<div className="c-calendar__outer">
				<link href={stylesheet} rel="stylesheet" />

				<div className="c-calendar c-calendar--github" dangerouslySetInnerHTML={{ __html: markup }} />
			</div>
		)}
	</>
);

const GithubSkylineComponent: FC = () => {
	const [current, setCurrent] = useState(-1);

	return (
		<div className="c-skyline">
			<nav className="c-skyline__nav">
				<h4>
					Previous years Github contributions <br />
					<small>(requires WebGL)</small>
				</h4>

				<ul>
					{YEARS.map((year: string, index: number) => (
						<li className={current === index ? 'current' : undefined} key={year}>
							<Button className="c-btn--small" onClick={() => setCurrent(index)} type="button">
								{year}
							</Button>
						</li>
					))}
				</ul>
			</nav>

			{YEARS.map((year: string, index: number) =>
				index === current ? <GithubSkyline file={`${year}.stl`} index={index} key={year} /> : null
			)}
		</div>
	);
};

export const GithubStats: FC<Readonly<InferGetStaticPropsType<typeof getStaticProps>>> = ({
	data,
	funding,
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

								<GithubSkylineComponent />
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
		partners: await getPartnersFromCMS()
	}
});

export default GithubStats;
