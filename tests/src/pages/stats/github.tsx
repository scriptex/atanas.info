import { act } from 'react';

import { GithubStats } from '@pages/stats/github';

import type { GithubContribution, GithubCount, GithubInsights, GithubProfileData } from '@scripts/types';
import { mockFetch, snapshotTest, test } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';

jest.mock('@lib/mongodb', () => ({
	getData: jest.fn(() => Promise.resolve({ props: { data: [] } }))
}));

mockFetch<GithubProfileData>({
	days: [
		{
			count: 1,
			date: '2023-03-26'
		}
	],
	totalContributions: 854
});

const dataFull: GithubInsights = {
	calendar: {
		'2022-01-30': { count: 1 }
	},
	error: false,
	general: {
		createdAt: '2013-06-03T18:11:48Z',
		followers: 103,
		following: 1,
		privateGists: 4,
		privateRepos: 17,
		publicGists: 10,
		publicRepos: 82,
		updatedAt: '2023-01-30T20:53:21Z'
	},
	repositories: [
		{
			contributions: [
				{ count: 850, user: 'renovate-bot' },
				{ count: 694, user: 'scriptex' },
				{ count: 161, user: 'renovate[bot]' },
				{ count: 16, user: 'dependabot[bot]' },
				{ user: 'ImgBotApp' } as unknown as GithubContribution
			],
			createdAt: '2019-03-10T13:26:48Z',
			fork: false,
			has_pages: true,
			issues: 0,
			language: 'TypeScript',
			name: '2048',
			private: false,
			size: 6581,
			stargazers: 10,
			updated_at: '2023-01-09T16:17:55Z',
			watchers: 10
		}
	],
	updated: 1675318748477
};

const dataEmpty: GithubInsights = {
	calendar: null,
	error: false,
	general: null,
	repositories: null,
	updated: 1675318748477
};

snapshotTest(
	() => <GithubStats data={dataFull} funding={funding} githubSkyline={null} partners={partners} />,
	'.c-skyline__nav li:first-child .c-btn--small',
	'GithubStats'
);

snapshotTest(
	() => <GithubStats data={dataEmpty} funding={funding} githubSkyline={null} partners={partners} />,
	undefined,
	'GithubStats'
);

snapshotTest(
	() => (
		<GithubStats data={{ ...dataEmpty, error: true }} funding={funding} githubSkyline={null} partners={partners} />
	),
	undefined,
	'GithubStats'
);

snapshotTest(
	() => (
		<GithubStats
			data={{
				...dataFull,
				repositories: dataFull.repositories!.map(r => ({
					...r,
					contributions: r.contributions.map(c => ({
						...c,
						user: 'test'
					}))
				})),
				updated: null
			}}
			funding={funding}
			githubSkyline={null}
			partners={partners}
		/>
	),
	undefined,
	'GithubStats'
);

snapshotTest(
	() => (
		<GithubStats
			data={{
				...dataFull,
				calendar: {
					'2022-01-30': {} as unknown as GithubCount
				}
			}}
			funding={funding}
			githubSkyline={null}
			partners={partners}
		/>
	),
	undefined,
	'GithubStats'
);

snapshotTest(
	() => (
		<GithubStats
			data={{
				...dataFull,
				repositories: dataFull.repositories!.map(r => ({
					...r,
					language: null
				}))
			}}
			funding={funding}
			githubSkyline={null}
			partners={partners}
		/>
	),
	undefined,
	'GithubStats'
);

it('Test the GithubStats page with fake timers', async () => {
	jest.useFakeTimers();

	const GithubStatsComponent = () => (
		<GithubStats data={dataFull} funding={funding} githubSkyline={null} partners={partners} />
	);

	const { asFragment } = await test(GithubStatsComponent);

	act(() => jest.runOnlyPendingTimers());

	expect(asFragment()).toMatchSnapshot();
});
