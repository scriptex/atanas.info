import fetch from 'node-fetch';

import { writeFileSync } from 'fs';

import { gitlab } from './client';
import { asyncForEach, getCalendarWithBrowser } from './utils';

const setOwner = (repo: any, owner: string): any => ({ ...repo, owner });

export const getGitlabInsights = async (): Promise<void> => {
	console.log('Getting insights data from Gitlab...');

	const file = 'src/scripts/gitlab-insights.json';

	try {
		writeFileSync(
			'static/gitlab-calendar.svg',
			(await getCalendarWithBrowser('https://gitlab.com/scriptex', '.js-contrib-calendar', 5000)) || ''
		);

		console.log('Getting data for user Scriptex from Gitlab...');
		const user = await gitlab('users/1896847');

		console.log('Getting data for organization Three11 from Gitlab...');
		const group = await gitlab('groups/2344434');

		console.log('Getting projects for user Scriptex from Gitlab...');
		const userProjects = await gitlab(`users/${user.id}/projects?per_page=100&statistics=true`);

		console.log('Getting projects for organization Three11 from Gitlab...');
		const groupProjects = await gitlab(`groups/${group.id}/projects?per_page=100&statistics=true`);

		const calendar = await fetch('https://gitlab.com/users/scriptex/calendar.json').then((res: any) => res.json());
		const projects = [
			...userProjects.map((project: any) => setOwner(project, 'scriptex')),
			...groupProjects.map((project: any) => setOwner(project, 'three11'))
		];
		const repositories: any[] = [];
		const reposSSHUrls = userProjects.map((repo: any) => `git@gitlab.com:scriptex/${repo.name}`).join('\n');

		writeFileSync('bin/gitlab.list', reposSSHUrls);

		console.log('Getting projects data from Gitlab...');
		await asyncForEach(projects, async (project: any) => {
			console.log('-----');
			console.log(`Getting data for project ${project.name}`);
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

		console.log(`Successfully wrote insights data from Gitlab in ${file}`);
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

		console.log('Error getting data from Gitlab.', e);
	}
};
