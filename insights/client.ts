import fetch from 'node-fetch';
import { GitHubClient } from 'universal-github-client';

export const client = new GitHubClient({
	base: 'https://api.github.com',
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	token: process.env.TOKEN!,
	fetch
});
