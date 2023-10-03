import { log } from '@scripts/shared';
import { gitlab } from './client';
import type { GitlabInsights } from '@scripts/types';
import { asyncForEach, saveInsights } from './utils';

const setOwner = (repo: any, owner: string): any => ({ ...repo, owner });

export const getGitlabInsights = async (): Promise<GitlabInsights> => {
	log('atanas.info: Getting insights data from Gitlab...');

	try {
		log('atanas.info: Getting data for user Scriptex from Gitlab...');
		const user = await gitlab('users/1896847');

		log('atanas.info: Getting data for organization Three11 from Gitlab...');
		const group = await gitlab('groups/2344434');

		log('atanas.info: Getting projects for user Scriptex from Gitlab...');
		const userProjects1 = await gitlab(`users/${user.id}/projects?per_page=100&statistics=true`);
		const userProjects2 = await gitlab(`users/${user.id}/projects?per_page=100&statistics=true&page=2`);

		log('atanas.info: Getting projects for organization Three11 from Gitlab...');
		const groupProjects1 = await gitlab(`groups/${group.id}/projects?per_page=100&statistics=true`);
		const groupProjects2 = await gitlab(`groups/${group.id}/projects?per_page=100&statistics=true&page=2`);

		const calendar = await fetch('https://gitlab.com/users/scriptex/calendar.json').then((res: any) => res.json());

		const projects = [
			...userProjects1.map((project: any) => setOwner(project, 'scriptex')),
			...userProjects2.map((project: any) => setOwner(project, 'scriptex')),
			...groupProjects1.map((project: any) => setOwner(project, 'three11')),
			...groupProjects2.map((project: any) => setOwner(project, 'three11'))
		];
		const repositories: any[] = [];

		log('atanas.info: Getting projects data from Gitlab...');
		await asyncForEach(projects, async (project: any) => {
			log('-----');
			log(`atanas.info: Getting data for project ${project.name}`);
			repositories.push({
				name: project.name,
				private: project.visibility === 'private',
				fork: project.forks_count,
				createdAt: project.created_at,
				updated_at: project.last_activity_at,
				size: project.statistics?.repository_size,
				stargazers: project.star_count,
				languages: await gitlab(`projects/${project.id}/languages`),
				issues: project.open_issues_count,
				contributions: project.commit_count,
				owner: project.owner
			});
		});

		const result = {
			error: false,
			general: {
				repos: projects.length,
				createdAt: user.created_at,
				updatedAt: new Date().toISOString()
			},
			updated: new Date().getTime(),
			calendar,
			repositories
		};

		await saveInsights(result, 'Gitlab');

		return result;
	} catch (e) {
		const result = {
			error: true,
			general: null,
			updated: new Date().getTime(),
			calendar: null,
			repositories: null
		};

		await saveInsights(result, 'Gitlab');

		return result;
	}
};
