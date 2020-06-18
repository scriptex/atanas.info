#!/usr/bin/env ts-node-script

import { writeFileSync } from 'fs';

import fetch from 'node-fetch';
import { load } from 'cheerio';

import { client } from './client';
import { asyncForEach } from './utils';

interface Contribution {
	[x: string]: number;
}

const getContributions = async (url = 'https://github.com/scriptex'): Promise<Contribution[]> =>
	await fetch(url)
		.then(res => res.text())
		.then((markup: string) => {
			const $ = load(markup);

			return $('rect')
				.get()
				.reduce(
					(data, rect) => ({
						...data,
						[$(rect).data('date')]: $(rect).data('count')
					}),
					{}
				);
		});

(async function (): Promise<void> {
	console.log('Getting insights data from Github...');

	try {
		const file = 'src/assets/scripts/insights.json';
		const user = await client.get({ path: '/users/scriptex' });
		const calendar = await getContributions();
		const orgRepos = await client.get({ path: '/orgs/three11/repos?per_page=100' });
		const userRepos = await client.get({ path: '/users/scriptex/repos?per_page=100' });
		const repositories: any[] = [];

		await asyncForEach(
			[...orgRepos, ...userRepos],
			async ({ full_name }: { full_name: string }): Promise<void> => {
				console.log('-----');
				console.log(`Getting insights data for ${full_name}...`);
				const repo = await client.get({ path: `/repos/${full_name}` });

				console.log(`Getting contributions data for ${full_name}...`);
				const contributions = await client.get({ path: `/repos/${full_name}/contributors` });

				repositories.push({
					name: repo.name,
					private: repo.private,
					fork: repo.fork,
					createdAt: repo.created_at,
					updated_at: repo.updated_at,
					size: repo.size,
					stargazers: repo.stargazers_count,
					watchers: repo.watchers_count,
					language: repo.language,
					issues: repo.open_issues_count,
					contributions: contributions.map((item: any) => ({
						user: item.login,
						count: item.contributions
					}))
				});
			}
		);

		const general = {
			publicRepos: user.public_repos,
			privateRepos: user.total_private_repos,
			publicGists: user.public_gists,
			privateGists: user.private_gists,
			followers: user.followers,
			following: user.following,
			createdAt: user.created_at,
			updatedAt: user.updated_at
		};

		writeFileSync(file, JSON.stringify({ general, calendar, repositories }, null, 2));

		console.log(`Successfully wrote insights data from Github in ${file}`);
	} catch (e) {
		console.log('Error getting data from Github.', e);
	}

	process.exit();
})();
