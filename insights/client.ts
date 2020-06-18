import fetch from 'node-fetch';
import { GitHubClient } from 'universal-github-client';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

export const client = new GitHubClient({
	base: 'https://api.github.com',
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	token: process.env.GITHUB_TOKEN!,
	fetch
});
