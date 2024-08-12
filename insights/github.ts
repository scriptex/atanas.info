import { log } from '@scripts/shared';
import type { GithubInsights, GithubRepository } from '@scripts/types';

import { github } from './client';
import { asyncForEach, getContributions, saveInsights } from './utils';

type SlimRepo = {
	default_branch: string;
	full_name: string;
	name: string;
	owner: {
		login: string;
	};
	private: boolean;
};

type Contribution = {
	contributions: number;
	login: string;
};

export const getGithubRepositories = async (): Promise<SlimRepo[]> => {
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
		const repositories: GithubRepository[] = [];
		const repos = await getGithubRepositories();

		await asyncForEach(repos, async ({ full_name }: SlimRepo): Promise<void> => {
			log('-----');
			log(`atanas.info: Getting insights data for ${full_name}...`);
			const repo = await github.get({ path: `/repos/${full_name}` });

			log(`atanas.info: Getting contributions data for ${full_name}...`);
			const contributions = await github.get({ path: `/repos/${full_name}/contributors` });

			repositories.push({
				contributions: contributions.map((item: Contribution) => ({
					count: item.contributions,
					user: item.login
				})),
				createdAt: repo.created_at,
				fork: repo.fork,
				has_pages: repo.has_pages,
				issues: repo.open_issues_count,
				language: repo.language,
				name: repo.name,
				private: repo.private,
				size: repo.size,
				stargazers: repo.stargazers_count,
				updated_at: repo.updated_at,
				watchers: repo.watchers_count
			});
		});

		const general = {
			createdAt: user.created_at,
			followers: user.followers,
			following: user.following,
			privateGists: user.private_gists,
			privateRepos: user.total_private_repos,
			publicGists: user.public_gists,
			publicRepos: user.public_repos,
			updatedAt: user.updated_at
		};

		const result = {
			calendar,
			error: false,
			general,
			repositories,
			updated: new Date().getTime()
		};

		await saveInsights(result, 'Github');

		return result;
	} catch (e: unknown) {
		console.error(e);

		const result = {
			calendar: null,
			error: true,
			general: null,
			repositories: null,
			updated: new Date().getTime()
		};

		await saveInsights(result, 'Github');

		return result;
	}
};
