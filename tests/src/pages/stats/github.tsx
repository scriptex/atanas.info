import { act } from '@testing-library/react';

import { GithubStats, getStaticProps } from '@pages/stats/github';
import { test, mockFetch, snapshotTest } from '@test-config/helpers';
import type { GithubCount, GithubInsights, GithubContribution } from '@scripts/types';

jest.mock('@lib/mongodb', () => ({
	getData: jest.fn(() => Promise.resolve({ props: { data: [] } }))
}));

mockFetch({
	markup: '<div><table><tr><td><span className="sr-only">Github calendar</span></td></tr></table></div>',
	stylesheet: 'https://google.com/style.css'
});

const dataFull: GithubInsights = {
	error: false,
	general: {
		publicRepos: 82,
		privateRepos: 17,
		publicGists: 10,
		privateGists: 4,
		followers: 103,
		following: 1,
		createdAt: '2013-06-03T18:11:48Z',
		updatedAt: '2023-01-30T20:53:21Z'
	},
	calendar: {
		'2022-01-30': { count: 1 }
	},
	updated: 1675318748477,
	repositories: [
		{
			name: '2048',
			private: false,
			fork: false,
			createdAt: '2019-03-10T13:26:48Z',
			updated_at: '2023-01-09T16:17:55Z',
			size: 6581,
			stargazers: 10,
			watchers: 10,
			language: 'TypeScript',
			issues: 0,
			contributions: [
				{ user: 'renovate-bot', count: 850 },
				{ user: 'scriptex', count: 694 },
				{ user: 'renovate[bot]', count: 161 },
				{ user: 'dependabot[bot]', count: 16 },
				{ user: 'ImgBotApp' } as unknown as GithubContribution
			],
			has_pages: true
		}
	]
};

const dataEmpty: GithubInsights = {
	error: false,
	general: null,
	updated: 1675318748477,
	calendar: null,
	repositories: null
};

snapshotTest(() => <GithubStats data={dataFull} />, '.c-skyline__nav li:first-child .c-btn--small');

snapshotTest(() => <GithubStats data={dataEmpty} />);

snapshotTest(() => <GithubStats data={{ ...dataEmpty, error: true }} />);

snapshotTest(() => (
	<GithubStats
		data={{
			...dataFull,
			updated: null,
			repositories: dataFull.repositories!.map(r => ({
				...r,
				contributions: r.contributions.map(c => ({
					...c,
					user: 'test'
				}))
			}))
		}}
	/>
));

snapshotTest(() => (
	<GithubStats
		data={{
			...dataFull,
			calendar: {
				'2022-01-30': {} as unknown as GithubCount
			}
		}}
	/>
));

snapshotTest(() => (
	<GithubStats
		data={{
			...dataFull,
			repositories: dataFull.repositories!.map(r => ({
				...r,
				language: null
			}))
		}}
	/>
));

it('Test the GithubStats page with fake timers', async () => {
	jest.useFakeTimers();

	const { asFragment } = await test(() => <GithubStats data={dataFull} />);

	act(() => {
		jest.runOnlyPendingTimers();
	});

	expect(asFragment()).toMatchSnapshot();
});

it('Test the `getStaticProps` function', async () => {
	const result = await getStaticProps();

	expect(result).toBeDefined();
	expect(result.props).toBeDefined();
	expect(result.props.data).toBeDefined();
	expect(Array.isArray(result.props.data)).toEqual(true);
	expect((result.props.data as []).length).toEqual(0);
});
