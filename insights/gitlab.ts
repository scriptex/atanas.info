import { writeFileSync } from 'node:fs';

import { gitlab } from './client';
import { asyncForEach, saveInsights, getCalendarWithBrowser } from './utils';

const setOwner = (repo: any, owner: string): any => ({ ...repo, owner });

export const getGitlabInsights = async (): Promise<void> => {
	console.log('atanas.info: Getting insights data from Gitlab...');

	try {
		writeFileSync(
			'public/gitlab-calendar.svg',
			(await getCalendarWithBrowser('https://gitlab.com/scriptex', '.js-contrib-calendar', 5000)) || ''
		);

		console.log('atanas.info: Getting data for user Scriptex from Gitlab...');
		const user = await gitlab('users/1896847');

		console.log('atanas.info: Getting data for organization Three11 from Gitlab...');
		const group = await gitlab('groups/2344434');

		console.log('atanas.info: Getting projects for user Scriptex from Gitlab...');
		const userProjects = await gitlab(`users/${user.id}/projects?per_page=100&statistics=true`);

		console.log('atanas.info: Getting projects for organization Three11 from Gitlab...');
		const groupProjects = await gitlab(`groups/${group.id}/projects?per_page=100&statistics=true`);

		const calendar = await fetch('https://gitlab.com/users/scriptex/calendar.json').then((res: any) => res.json());
		const projects = [
			...userProjects.map((project: any) => setOwner(project, 'scriptex')),
			...groupProjects.map((project: any) => setOwner(project, 'three11'))
		];
		const repositories: any[] = [];

		console.log('atanas.info: Getting projects data from Gitlab...');
		await asyncForEach(projects, async (project: any) => {
			console.log('-----');
			console.log(`atanas.info: Getting data for project ${project.name}`);
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

		const general = {
			repos: projects.length,
			createdAt: user.created_at,
			updatedAt: new Date().toISOString()
		};

		await saveInsights(
			{
				error: false,
				general,
				updated: new Date().getTime(),
				calendar,
				repositories
			},
			'Gitlab'
		);
	} catch (e) {
		await saveInsights(
			{
				error: true,
				general: null,
				updated: new Date().getTime(),
				calendar: null,
				repositories: null
			},
			'Gitlab'
		);
	}
};
