import { writeFileSync } from 'fs';

import { github } from './client';
import { getCalendar, asyncForEach, getContributions, saveInsights } from './utils';

export const getGithubRepositories = async (): Promise<any[]> => {
	const reposToSkip = ['three11/code-of-conduct'];
	const repos1 = await github.get({ path: '/user/repos?per_page=100' });
	const repos2 = await github.get({ path: '/user/repos?page=2&per_page=100' });

	return [...repos1, ...repos2].filter(repo => !reposToSkip.includes(repo.full_name));
};

export const getGithubInsights = async (): Promise<void> => {
	console.log('Getting insights data from Github...');

	const file = 'src/data/github-insights.json';

	try {
		writeFileSync('static/github-calendar.svg', (await getCalendar()) || '');

		const user = await github.get({ path: '/users/scriptex' });

		const calendar = await getContributions();
		const repositories: any[] = [];
		const repos = await getGithubRepositories();

		await asyncForEach(repos, async ({ full_name }: { full_name: string }): Promise<void> => {
			console.log('-----');
			console.log(`Getting insights data for ${full_name}...`);
			const repo = await github.get({ path: `/repos/${full_name}` });

			console.log(`Getting contributions data for ${full_name}...`);
			const contributions = await github.get({ path: `/repos/${full_name}/contributors` });

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
				})),
				has_pages: repo.has_pages
			});
		});

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

		saveInsights(
			file,
			{
				error: false,
				general,
				calendar,
				repositories,
				updated: new Date()
			},
			'Github'
		);
	} catch (e) {
		saveInsights(
			file,
			{
				error: true,
				general: null,
				calendar: null,
				repositories: null,
				updated: new Date()
			},
			'Github'
		);
	}
};
