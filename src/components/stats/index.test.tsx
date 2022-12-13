import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Stats } from '.';
import { NPMStats } from './npm';
import { GitlabStats } from './gitlab';
import { GithubStats } from './github';
import { snapshotTest } from '../test-helpers';

jest.mock('../../data/github-insights.json', () => ({
	__esModule: true,
	default: {
		error: false,
		general: {
			publicRepos: 47,
			privateRepos: 5,
			publicGists: 20,
			privateGists: 8,
			followers: 50,
			following: 154,
			createdAt: '2013-06-03T18:11:48Z',
			updatedAt: '2020-06-23T10:52:09Z'
		},
		calendar: {
			'2019-06-23': {
				count: 10,
				color: '#c6e48b'
			},
			'2019-06-24': {
				count: 9,
				color: '#c6e48b'
			}
		},
		repositories: [
			{
				name: 'atanas.info',
				private: false,
				fork: false,
				createdAt: '2017-01-24T10:26:06Z',
				updated_at: '2020-06-23T14:42:49Z',
				size: 2042,
				stargazers: 4,
				watchers: 4,
				language: 'Javascript',
				issues: 1,
				contributions: [
					{
						user: 'scriptex',
						count: 301
					}
				]
			},
			{
				name: 'test',
				private: true,
				fork: false,
				createdAt: '2017-01-24T10:26:06Z',
				updated_at: '2020-06-23T14:42:49Z',
				size: 1024,
				stargazers: 0,
				watchers: 0,
				language: 'Typescript',
				issues: 2,
				contributions: [
					{
						user: 'test',
						count: 200
					}
				]
			}
		],
		updated: '2020-11-26T14:14:22.858Z'
	}
}));

jest.mock('../../data/gitlab-insights.json', () => ({
	__esModule: true,
	default: {
		error: false,
		general: {
			repos: 101,
			createdAt: '2018-01-03T11:47:34.435Z',
			updatedAt: '2020-06-24T13:19:32.897Z'
		},
		calendar: {
			'2020-03-06': 21,
			'2019-11-07': 34,
			'2019-10-26': 50
		},
		repositories: [
			{
				name: 'atanas.info',
				private: true,
				fork: 0,
				createdAt: '2019-08-14T06:13:34.958Z',
				updated_at: '2019-08-14T06:13:34.958Z',
				size: 18926796,
				stargazers: 0,
				languages: {
					Javascript: 47.72,
					HTML: 26.07,
					CSS: 25.79,
					PHP: 0.41,
					Shell: 0.01
				},
				issues: 0
			}
		],
		updated: '2020-11-26T14:14:22.858Z'
	}
}));

jest.mock('../../data/npm-stats.json', () => ({
	__esModule: true,
	default: {
		sum: 591668,
		package1: {
			name: 'package1',
			version: '1.0.0',
			description: 'Description 1',
			license: 'MIT',
			homepage: 'https://example.com',
			author: 'author',
			downloads: 0
		},
		package2: {
			name: 'package2',
			version: '1.0.0',
			description: 'Description 2',
			license: 'MIT',
			homepage: 'https://example.com',
			author: 'author',
			downloads: 0
		}
	}
}));

jest.mock('react-ts-github-calendar', () => ({
	__esModule: true,
	default: () => <div>Mocked Github Calendar</div>
}));

afterAll(() => {
	jest.resetAllMocks();
});

const StatsComponent: React.FC = () => (
	<Router>
		<Stats />
	</Router>
);

const GithubStatsComponent: React.FC = () => (
	<Router>
		<GithubStats />
	</Router>
);

const GitlabStatsComponent: React.FC = () => (
	<Router>
		<GitlabStats />
	</Router>
);

const NPMStatsComponent: React.FC = () => (
	<Router>
		<NPMStats />
	</Router>
);

[StatsComponent, GithubStatsComponent, GitlabStatsComponent, NPMStatsComponent].forEach(Component =>
	snapshotTest(Component)
);
