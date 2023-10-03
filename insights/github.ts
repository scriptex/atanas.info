import { log } from '@scripts/shared';
import { github } from './client';
import type { GithubInsights } from '@scripts/types';
import { asyncForEach, saveInsights, getContributions } from './utils';

export const getGithubRepositories = async (): Promise<any[]> => {
	const repos1 = await github.get({ path: '/user/repos?per_page=100' });
	const repos2 = await github.get({ path: '/user/repos?page=2&per_page=100' });
	const repos3 = await github.get({ path: '/user/repos?page=3&per_page=100' });

	return [...repos1, ...repos2, ...repos3].filter(repo => repo.size > 0);
};

export const getGithubInsights = async (): Promise<GithubInsights> => {
	log('atanas.info: Getting insights data from Github...');

	try {
		const user = await github.get({ path: '/users/scriptex' });
		const calendar = await getContributions();
		const repositories: any[] = [];
		const repos = await getGithubRepositories();

		await asyncForEach(repos, async ({ full_name }: { full_name: string }): Promise<void> => {
			log('-----');
			log(`atanas.info: Getting insights data for ${full_name}...`);
			const repo = await github.get({ path: `/repos/${full_name}` });

			log(`atanas.info: Getting contributions data for ${full_name}...`);
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

		const result = {
			error: false,
			general,
			calendar,
			repositories,
			updated: new Date().getTime()
		};

		await saveInsights(result, 'Github');

		return result;
	} catch (e) {
		const result = {
			error: true,
			general: null,
			calendar: null,
			repositories: null,
			updated: new Date().getTime()
		};

		await saveInsights(result, 'Github');

		return result;
	}
};
