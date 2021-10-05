import * as React from 'react';
import { format } from 'date-fns';

import npmStats from '../../scripts/npm-stats.json';
import { Svg, Section, GithubSkyline, ExternalLink } from '..';

interface GeneralInsight {
	readonly title: string;
	readonly value: any;
}

interface Props {
	data: any;
}

const YEARS: string[] = ['2018', '2019', '2020'];

// prettier-ignore
export const formatDate = (date: string | number, formatter = 'dd MMM yyyy'): string => format(new Date(date), formatter);

export const addTitles = (selector: string, getTitle: (rect: SVGRectElement) => string): void => {
	const rects: SVGRectElement[] = Array.from(document.querySelectorAll(`${selector} rect`));

	rects.forEach((rect: SVGRectElement) => {
		const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		const titleElement = document.createElementNS('http://www.w3.org/2000/svg', 'title');
		const titleString = getTitle(rect);

		rect?.parentNode?.insertBefore(group, rect);

		titleElement.innerHTML = titleString.replace('<br />', ' on ');

		group.appendChild(titleElement);
		group.appendChild(rect);
	});
};

export const GithubStats: React.FunctionComponent<Readonly<Props>> = (props: Readonly<Props>) => {
	const [current, setCurrent] = React.useState(-1);

	const { error, general, calendar, updated, repositories } = props.data;

	if (error) {
		return (
			<div className="c-section__entry c-section__entry--no-background">
				<div className="o-shell">
					<h2>Github profile statistics</h2>

					<p>Failed fetching data from Github. Please check again in 4 hours.</p>
				</div>
			</div>
		);
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
				.reduce((result: any[], repo: any) => Array.from(new Set([...result, repo.language])), [])
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
				<small className="c-section__stamp">Last updated: {formatDate(updated, 'dd MMM yyyy HH:mm:ss')}</small>

				<div className="o-shell">
					<h2>Github contributions calendar</h2>

					<div className="c-calendar__outer">
						<div className="c-calendar c-calendar--github">
							<Svg src="/github-calendar.svg" />

							<div
								className="c-calendar__legend"
								title="A summary of pull requests, issues opened, and commits to the default and gh-pages branches."
							>
								Less
								<ul>
									<li style={{ backgroundColor: 'var(--color-calendar-graph-day-bg)' }}></li>
									<li style={{ backgroundColor: 'var(--color-calendar-graph-day-L1-bg)' }}></li>
									<li style={{ backgroundColor: 'var(--color-calendar-graph-day-L2-bg)' }}></li>
									<li style={{ backgroundColor: 'var(--color-calendar-graph-day-L3-bg)' }}></li>
									<li style={{ backgroundColor: 'var(--color-calendar-graph-day-L4-bg)' }}></li>
								</ul>
								More
							</div>
						</div>
					</div>

					<div className="c-skyline">
						<nav className="c-skyline__nav">
							<h3>
								Previous years Github contributions <br />
								<small>(requires WebGL)</small>
							</h3>

							<ul>
								{YEARS.map((year: string, index: number) => (
									<li key={index} className={current === index ? 'current' : undefined}>
										<button onClick={() => setCurrent(index)} className="c-btn c-btn--small">
											{year}
										</button>
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
		</>
	);
};

export const GitlabStats: React.FunctionComponent<Readonly<Props>> = (props: Readonly<Props>) => {
	const { error, general, calendar, updated, repositories } = props.data;

	if (error) {
		return (
			<div className="c-section__entry c-section__entry--no-background">
				<div className="o-shell">
					<h2>Gitlab profile statistics</h2>

					<p>Failed fetching data from Gitlab. Please check again in 4 hours.</p>
				</div>
			</div>
		);
	}

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
				<small className="c-section__stamp">Last updated: {formatDate(updated, 'dd MMM yyyy HH:mm:ss')}</small>

				<div className="o-shell">
					<h2>Gitlab contributions calendar</h2>

					<div className="c-calendar__outer">
						<div className="c-calendar c-calendar--gitlab">
							<Svg src="/gitlab-calendar.svg" />

							<div className="c-calendar__hint">Issues, merge requests, pushes, and comments.</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export const NPMStats: React.FunctionComponent = () => {
	if (Object.keys(npmStats).length === 0) {
		return null;
	}

	const { sum, ...packages } = npmStats;

	return (
		<div className="c-section__entry c-section__entry--no-background">
			<div className="o-shell">
				<h2>Statistics for NPM packages</h2>

				<h6>
					Total downloads: <strong>{sum}</strong>
				</h6>

				<div className="o-grid c-packages">
					{Object.keys(packages).map((key: string, index: number) => {
						const item = (packages as any)[key];
						const authors = item.author.split(',');

						return (
							<div className="o-grid__item xs-12 sm-6 md-4 lg-4" key={index}>
								<ExternalLink href={item.homepage} className="c-package">
									<h3>{item.name}</h3>

									<p>{item.description}</p>

									<ul>
										<li>
											Version <strong>{item.version}</strong>
										</li>

										<li>
											Downloads: <strong>{item.downloads}</strong>
										</li>

										<li>
											{authors.length > 1 ? 'Authors: ' : 'Author: '}

											<strong>{item.author}</strong>
										</li>
									</ul>
								</ExternalLink>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export const SectionStats: React.FunctionComponent<Readonly<Props>> = (props: Readonly<Props>) => {
	const timeout: React.MutableRefObject<NodeJS.Timeout | null> = React.useRef(null);

	React.useEffect(() => {
		const onLoad = () => {
			timeout.current = setTimeout(() => {
				addTitles('.c-calendar--gitlab', (rect: SVGRectElement) => rect.getAttribute('title') || '');

				addTitles('.c-calendar--github', (rect: SVGRectElement) => {
					const { date, count } = rect.dataset;
					const formattedDate = format(new Date(date as string), 'EEEE MMM d, yyyy');

					return `${count} contribution${count === '1' ? '' : 's'} on ${formattedDate}`;
				});
			}, 2000);
		};

		window.addEventListener('load', onLoad);

		return () => {
			window.removeEventListener('load', onLoad);

			if (timeout.current !== null) {
				clearTimeout(timeout.current);
			}
		};
	}, []);

	return (
		<Section id="stats" hasShell={false} hasButton={true} className=" circles">
			<header className="c-section__head">
				<div className="o-shell">
					<h1>Stats</h1>
				</div>
			</header>

			<GithubStats data={props.data.github} />

			<GitlabStats data={props.data.gitlab} />

			<NPMStats />
		</Section>
	);
};

export default SectionStats;
