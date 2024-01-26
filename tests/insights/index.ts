import * as insightsUtils from '@insights/utils';

import { run } from '@insights/index';
import { getGitlabInsights } from '@insights/gitlab';
import { getLastFMInsights } from '@insights/last-fm';
import { getGithubInsights, getGithubRepositories } from '@insights/github';
import { queryNPM, queryGithub, queryGitlab, queryLastFM } from '@lib/mongodb';

jest.mock('@lib/mongodb', () => ({
	__esModule: true,
	getData: jest.fn(() => Promise.resolve({ props: { data: [] } })),
	default: Promise.resolve({
		db: () => ({
			collection: () => ({
				findOne: jest.fn(() => Promise.resolve({ name: 'Mocked result' })),
				updateOne: jest.fn(() => Promise.resolve({ success: true }))
			})
		})
	})
}));

jest.mock('@insights/client', () => ({
	github: {
		get({ path }: { path: string }) {
			if (path.startsWith('/user/repos')) {
				return [
					{
						size: 100,
						owner: {
							login: 'test'
						},
						full_name: 'test/test-repo'
					}
				];
			}

			if (path.startsWith('/users/scriptex')) {
				return {
					size: 100,
					followers: 20,
					following: 0,
					created_at: '2008-01-14T04:33:35Z',
					updated_at: '2008-01-14T04:33:35Z',
					public_repos: 2,
					public_gists: 1
				};
			}

			if (path.startsWith('repos') && !path.endsWith('/contributors')) {
				return {
					name: 'Test Repo',
					fork: false,
					size: 108,
					private: false,
					language: null,
					has_pages: false,
					created_at: '2011-01-26T19:01:12Z',
					updated_at: '2011-01-26T19:14:43Z',
					watchers_count: 80,
					stargazers_count: 80,
					open_issues_count: 0
				};
			}

			if (path.endsWith('/contributors')) {
				return [
					{
						size: 100,
						login: 'test',
						contributions: 32
					}
				];
			}

			return {};
		}
	},
	gitlab: (path: string) => {
		if (path === 'users/1896847') {
			return {
				id: 'scriptex',
				created_at: '2011-01-26T19:01:12Z'
			};
		}

		if (path === 'groups/2344434') {
			return {
				id: 'Three11'
			};
		}

		if (path.includes('projects?per_page=100&statistics=true')) {
			return [
				{
					name: 'Test Repo',
					created_at: '2011-01-26T19:01:12Z',
					star_count: 30,
					visibility: 'public',
					statistics: {
						repository_size: 200
					},
					forks_count: 0,
					commit_count: 200,
					last_activity_at: '2011-01-26T19:14:43Z',
					open_issues_count: 1
				},
				{
					name: 'Test Repo',
					created_at: '2011-01-26T19:01:12Z',
					star_count: 30,
					visibility: 'public',
					forks_count: 0,
					commit_count: 200,
					last_activity_at: '2011-01-26T19:14:43Z',
					open_issues_count: 1
				}
			];
		}

		if (path.endsWith('/languages')) {
			return ['JavaScript', 'TypeScript', 'SCSS'];
		}

		return {};
	},
	lastFm: {
		userGetInfo: () =>
			Promise.resolve({
				user: {
					name: 'scriptex',
					age: '39',
					subscriber: '',
					realname: 'Atanas',
					bootstrap: '',
					playcount: '12345',
					artist_count: '1234',
					playlists: '10',
					track_count: '100',
					album_count: '1000',
					image: [],
					registered: {
						unixtime: '123456789',
						'#text': 123456789
					},
					country: 'Bulgaria',
					gender: 'male',
					url: 'https://atanas.info',
					type: 'user'
				}
			}),
		userGetWeeklyAlbumChart: () =>
			Promise.resolve({
				weeklyalbumchart: {
					album: [
						{
							name: 'Test weekly album',
							image: '/images/test.jpg',
							artist: {
								name: 'Test artist',
								'#text': 'Test artist'
							}
						}
					]
				}
			}),
		albumGetInfo: () =>
			Promise.resolve({
				album: {
					image: '/images/test.jpg'
				}
			}),
		userGetTopAlbums: () =>
			Promise.resolve({
				topalbums: {
					album: [
						{
							name: 'Test weekly album',
							image: '/images/test.jpg',
							artist: {
								name: 'Test artist',
								'#text': 'Test artist'
							}
						}
					]
				}
			})
	}
}));

const mockedError = Promise.reject(new Error('Mocked error!'));
const originalFetch = global.fetch;

afterEach(() => {
	global.fetch = originalFetch;
});

it('Test the `getContributions` function', async () => {
	global.fetch = jest.fn().mockImplementation(() =>
		Promise.resolve({
			async text() {
				return '<g><rect class="ContributionCalendar-day" fill="red" data-date="2022-01-30">1 contribution on January 30, 2022</rect><rect fill="red">1 contribution on January 31, 2022</rect></g>';
			}
		})
	);

	const result = await insightsUtils.getContributions();

	expect(result).toBeDefined();
	expect(Object.keys(result).length).toEqual(1);
});

it('Test the `getGithubRepositories` function', async () => {
	const result = await getGithubRepositories();

	expect(result.length).toEqual(3);
	expect(result[0].full_name).toBeDefined();
	expect(typeof result[0].full_name).toEqual('string');
});

it('Test the `getGithubInsights` function', async () => {
	jest.spyOn(insightsUtils, 'getContributions').mockReturnValue(
		Promise.resolve({
			'2022-01-30': {
				count: 1,
				color: 'red'
			}
		})
	);

	const result1 = await getGithubInsights();

	expect(result1.error).toEqual(false);

	expect(result1.general).toBeDefined();
	expect(result1.general?.publicRepos).toEqual(2);
	expect(result1.general?.privateRepos).toBeUndefined();
	expect(result1.general?.publicGists).toEqual(1);
	expect(result1.general?.privateRepos).toBeUndefined();
	expect(result1.general?.followers).toEqual(20);
	expect(result1.general?.following).toEqual(0);

	expect(result1.calendar).toBeDefined();
	expect(Object.keys(result1.calendar!).length).toEqual(1);

	expect(result1.repositories).toBeDefined();
	expect(result1.repositories!.length).toEqual(3);

	expect(result1.updated).toBeDefined();
	expect(typeof result1.updated).toEqual('number');

	jest.spyOn(insightsUtils, 'getContributions').mockReturnValue(mockedError);

	const result2 = await getGithubInsights();

	expect(result2.error).toEqual(true);
	expect(result2.general).toEqual(null);
	expect(result2.calendar).toEqual(null);
	expect(result2.repositories).toEqual(null);

	expect(result1.updated).toBeDefined();
	expect(typeof result1.updated).toEqual('number');
});

it('Test the `getGitlabInsights` function', async () => {
	global.fetch = jest.fn().mockImplementation(() =>
		Promise.resolve({
			async json() {
				return {
					'2022-01-30': {
						count: 1,
						color: 'red'
					}
				};
			}
		})
	);

	const result1 = await getGitlabInsights();

	expect(result1.error).toEqual(false);

	expect(result1.general).toBeDefined();
	expect(result1.general?.repos).toBeDefined();
	expect(result1.general?.repos).toEqual(6);
	expect(result1.general?.createdAt).toBeDefined();
	expect(result1.general?.updatedAt).toBeDefined();
	expect(typeof result1.general?.updatedAt).toEqual('string');

	expect(result1.calendar).toBeDefined();
	expect(Object.keys(result1.calendar!).length).toEqual(1);

	expect(result1.repositories).toBeDefined();
	expect(result1.repositories!.length).toEqual(6);

	expect(result1.updated).toBeDefined();
	expect(typeof result1.updated).toEqual('number');

	global.fetch = jest.fn().mockImplementation(() => mockedError);

	const result2 = await getGitlabInsights();

	expect(result2.error).toEqual(true);
	expect(result2.general).toEqual(null);
	expect(result2.calendar).toEqual(null);
	expect(result2.repositories).toEqual(null);

	expect(result1.updated).toBeDefined();
	expect(typeof result1.updated).toEqual('number');
});

it('Test the `getLastFMInsights` function', async () => {
	const result1 = await getLastFMInsights();

	expect(result1.error).toEqual(false);

	expect(result1.updated).toBeDefined();
	expect(typeof result1.updated).toEqual('number');

	expect(result1.topAlbums.length).toBeGreaterThan(0);
	expect(result1.topAlbums[0].name).toBeDefined();
	expect(result1.topAlbums[0].images).toBeDefined();
	expect(result1.topAlbums[0].artist).toBeDefined();

	expect(result1.weeklyAlbumChart.length).toBeGreaterThan(0);
	expect(result1.weeklyAlbumChart[0].name).toBeDefined();
	expect(result1.weeklyAlbumChart[0].images).toBeDefined();
	expect(result1.weeklyAlbumChart[0].artist).toBeDefined();

	jest.spyOn(insightsUtils, 'asyncForEach').mockImplementation(() => mockedError);

	const result2 = await getLastFMInsights();

	expect(result2.error).toEqual(true);
	expect(result2.topAlbums.length).toEqual(0);
	expect(result2.weeklyAlbumChart.length).toEqual(0);

	expect(result2.updated).toBeDefined();
	expect(typeof result2.updated).toEqual('number');
});

it('Test the `sortProjects` function', () => {
	expect(
		insightsUtils.sortProjects([
			{
				url: '/test/url',
				name: 'First'
			},
			{
				url: '/test/url',
				name: 'Second'
			}
		])[0].name
	).toEqual('First');

	expect(
		insightsUtils.sortProjects([
			{
				url: '/test/url',
				name: 'Second'
			},
			{
				url: '/test/url',
				name: 'First'
			}
		])[0].name
	).toEqual('First');

	expect(
		insightsUtils.sortProjects([
			{
				url: '/test/url',
				name: 'Third'
			},
			{
				url: '/test/url',
				name: 'Third'
			}
		])[0].name
	).toEqual('Third');
});

it('Test the `getQuery` function', () => {
	expect(insightsUtils.getQuery('Github')).toEqual(queryGithub);
	expect(insightsUtils.getQuery('Gitlab')).toEqual(queryGitlab);
	expect(insightsUtils.getQuery('NPM')).toEqual(queryNPM);
	expect(insightsUtils.getQuery('LastFM')).toEqual(queryLastFM);
	expect(insightsUtils.getQuery('Unknown' as insightsUtils.InsightsType)).toEqual({});
});

it('Should run the insights from the command line', async () => {
	const result = await run();

	expect(result).toBeUndefined();
});
