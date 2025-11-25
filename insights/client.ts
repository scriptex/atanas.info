import { config as dotenvConfig } from 'dotenv';
import LastFm from 'lastfm-node-client';
import { GitHubClient } from 'universal-github-client';

dotenvConfig({
	path: '.env.local'
});

export const github = new GitHubClient({
	base: 'https://api.github.com',
	fetch,
	token: process.env.GITHUB_TOKEN!
});

export const gitlab = <T>(path: string, method: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT' = 'GET'): Promise<T> =>
	fetch(`https://gitlab.com/api/v4/${path}`, {
		headers: {
			Authorization: `Bearer ${process.env.GITLAB_TOKEN}`,
			'Content-Type': 'application/json'
		},
		method
	})
		.then(res => res.json())
		.catch((e: Error) => {
			throw e;
		});

export const lastFm = new LastFm(process.env.LAST_FM_API_KEY);
