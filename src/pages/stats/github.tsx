import Link from 'next/link';
import { FC, useRef, useState, useEffect, MutableRefObject } from 'react';

import { Routes } from '@data/routes';
import { formatDate } from '@scripts/shared';
import { GithubInsights, GithubProfileData, GithubRepository } from '@scripts/types';
import { getData, queryGithub, MongoDBProps } from '@lib/mongodb';
import { YEARS, GeneralInsight, sectionStatsProps } from '@scripts/stats';
import { Button, Layout, Section, StatsEntry, StatsError, GithubSkyline, Title } from '@components';

export const extractGithubData = ({
	general,
	calendar,
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

type Props = {
	data: GithubInsights;
};

export const GithubStats: FC<Readonly<Props>> = ({ data }: Props) => {
	const { error, updated, ...rest }: GithubInsights = data;
	const blocks: GeneralInsight[] = error ? [] : extractGithubData(rest);

	const calendarRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

	const [current, setCurrent] = useState(-1);
	const [githubProfileData, setGithubProfileData] = useState<GithubProfileData>({});

	useEffect(() => {
		fetch('/api/github-calendar')
			.then(r => r.json())
			.then(setGithubProfileData);
	}, []);

	useEffect(() => {
		const { current } = calendarRef;

		const observer = new MutationObserver(mutations => {
			for (const mutation of mutations) {
				if (mutation.type === 'childList' && !current?.classList.contains('js--titles-added')) {
					const element = current as HTMLDivElement;
					const items = Array.from(element?.querySelectorAll('td .sr-only') ?? []);

					for (const item of items) {
						const parent = item.parentNode as HTMLTableCellElement;

						parent.setAttribute('title', item.textContent ?? '');
					}

					current?.classList.add('js--titles-added');
				}
			}
		});

		if (current) {
			observer.observe(current, { childList: true, subtree: true });
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<Layout>
			<Title text="Github Stats | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

			<Section
				{...sectionStatsProps}
				actions={
					<Link href={Routes.STATS} className="c-btn">
						Go back
					</Link>
				}
				hasShell={false}
			>
				{error ? (
					<StatsError network="Github" />
				) : (
					<>
						<StatsEntry data={blocks} title="Github profile statistics" />

						<div className="c-section__entry">
							<small className="c-section__stamp">
								Last updated: {formatDate(updated ?? new Date().getTime(), 'dd MMM yyyy HH:mm:ss')}
							</small>

							<div className="o-shell" ref={calendarRef}>
								{githubProfileData.markup && githubProfileData.stylesheet && (
									<>
										<h3>Github contributions calendar</h3>

										<div className="c-calendar__outer">
											<link rel="stylesheet" href={githubProfileData.stylesheet} />

											<div
												className="c-calendar c-calendar--github"
												dangerouslySetInnerHTML={{ __html: githubProfileData.markup || '' }}
											/>
										</div>
									</>
								)}

								<div className="c-skyline">
									<nav className="c-skyline__nav">
										<h4>
											Previous years Github contributions <br />
											<small>(requires WebGL)</small>
										</h4>

										<ul>
											{YEARS.map((year: string, index: number) => (
												<li key={year} className={current === index ? 'current' : undefined}>
													<Button onClick={() => setCurrent(index)} className="c-btn--small">
														{year}
													</Button>
												</li>
											))}
										</ul>
									</nav>

									{YEARS.map((year: string, index: number) =>
										index === current ? (
											<GithubSkyline key={year} file={`${year}.stl`} index={index} />
										) : null
									)}
								</div>
							</div>
						</div>
					</>
				)}
			</Section>
		</Layout>
	);
};

export const getStaticProps = async (): Promise<MongoDBProps<unknown>> => getData('Insights', queryGithub);

export default GithubStats;
