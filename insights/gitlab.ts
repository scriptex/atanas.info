import { log } from '@scripts/shared';
import { gitlab } from './client';
import type { GitlabInsights } from '@scripts/types';
import { asyncForEach, saveInsights } from './utils';

const setOwner = (repo: any, owner: string): any => ({ ...repo, owner });

export const getCalendar = async () => {
	const calendar1 = await fetch('https://gitlab.com/users/scriptex/calendar.json').then(r => r.json());
	const calendar2 = await fetch('https://gitlab.com/users/scriptex_dmarcian/calendar.json').then(r => r.json());

	const keys = [...Object.keys(calendar1), ...Object.keys(calendar2)];

	return keys.reduce((acc, key) => {
		const value1 = calendar1[key];
		const value2 = calendar2[key];

		let result = undefined;

		if (typeof value1 === 'undefined') {
			result = value2;
		} else if (typeof value2 === 'undefined') {
			result = value1;
		} else {
			result = value1 + value2;
		}

		return {
			...acc,
			[key]: result
		};
	}, {});
};

export const getGitlabInsights = async (): Promise<GitlabInsights> => {
	log('atanas.info: Getting insights data from Gitlab...');

	try {
		log('atanas.info: Getting data for user "scriptex" from Gitlab...');
		const user = await gitlab('users/1896847');
		const args = 'projects?per_page=100&statistics=true';

		log('atanas.info: Getting projects for user "scriptex" from Gitlab...');
		const userProjects1 = await gitlab(`users/${user.id}/${args}`);
		const userProjects2 = await gitlab(`users/${user.id}/${args}&page=2`);
		const userProjects3 = await gitlab(`users/${user.id}/${args}&page=3`);

		const calendar = await getCalendar();

		const projects = [
			...userProjects1.map((project: any) => setOwner(project, 'scriptex')),
			...userProjects2.map((project: any) => setOwner(project, 'scriptex')),
			...userProjects3.map((project: any) => setOwner(project, 'scriptex'))
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
