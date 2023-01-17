import LastFm from 'lastfm-node-client';
import { GitHubClient } from 'universal-github-client';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

export const github = new GitHubClient({
	base: 'https://api.github.com',
	token: process.env.GITHUB_TOKEN as string,
	fetch
});

export const gitlab = (path: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' = 'GET'): Promise<any> =>
	fetch(`https://gitlab.com/api/v4/${path}`, {
		method,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.GITLAB_TOKEN}`
		}
	})
		.then(res => res.json())
		.catch((e: Error) => {
			throw e;
		});

export const lastFm = new LastFm(process.env.LAST_FM_API_KEY);
