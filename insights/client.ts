import fetch from 'node-fetch';
import { GitHubClient } from 'universal-github-client';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

export const github = new GitHubClient({
	base: 'https://api.github.com',
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	token: process.env.GITHUB_TOKEN!,
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
