import { writeFileSync } from 'fs';

import { github } from './client';
import { getCalendar, asyncForEach, getContributions } from './utils';

export const getGithubInsights = async (): Promise<void> => {
	console.log('Getting insights data from Github...');

	const file = 'src/scripts/github-insights.json';

	try {
		writeFileSync('static/github-calendar.svg', (await getCalendar()) || '');

		const user = await github.get({ path: '/users/scriptex' });
		const repos1 = await github.get({ path: '/user/repos?per_page=100' });
		const repos2 = await github.get({ path: '/user/repos?page=2&per_page=100' });
		const repos = [...repos1, ...repos2];
		const calendar = await getContributions();
		const repositories: any[] = [];

		const reposSSHUrls = repos
			.filter(({ full_name }: { full_name: string }) => full_name.includes('scriptex/'))
			.map(({ ssh_url }: { ssh_url: string }) => ssh_url)
			.join('\n');

		writeFileSync('bin/github.list', reposSSHUrls);

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

		writeFileSync(
			file,
			JSON.stringify(
				{
					general,
					calendar,
					repositories,
					updated: new Date()
				},
				null,
				2
			)
		);

		console.log(`Successfully wrote insights data from Github in ${file}`);
	} catch (e) {
		writeFileSync(
			file,
			JSON.stringify(
				{
					error: true
				},
				null,
				2
			)
		);

		console.log('Error getting data from Github.', e);
	}
};
