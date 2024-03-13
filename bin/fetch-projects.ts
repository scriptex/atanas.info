#!/usr/bin/env ts-node-script

import { existsSync, unlinkSync, writeFileSync } from 'node:fs';

import { getGithubRepositories } from '@insights/github';
import { log } from '@scripts/shared';

type Project = {
	branch: string;
	full_name: string;
	name: string;
};

const fetchProject = async (repo: string, branch = 'master', file = 'README.md'): Promise<string> => {
	const rootURL = 'https://raw.githubusercontent.com';
	const filepath = `${rootURL}/${repo}/${branch}/${file}`;

	return await fetch(filepath).then((response: Response) => response.text());
};

const saveProject = (data: string, path: string, message: string): void => {
	data = data.replace(/\(http:\/\//gi, '(https://');
	data = data.replace(/```sh/gi, '```bash');
	data = data.replace(/alt="">/g, 'alt="" />');
	data = data.replace(/<br>/g, '<br/>');

	if (existsSync(path)) {
		unlinkSync(path);
	}

	writeFileSync(path, data);

	log(message);
};

const createProjectsIndex = (projects: Project[]) => {
	let result = 'export const openSourceProjectsList = [\n';

	for (const project of projects) {
		result += `{
		url: '/portfolio/open-source/${project.name}',
		title: '${project.full_name}'
	},\n`;
	}

	result += ']';

	return result;
};

(async () => {
	try {
		const projects: Project[] = (await getGithubRepositories())
			.filter(repo => !repo.private)
			.filter(repo => ['scriptex'].includes(repo.owner.login))
			.filter(repo => !['uptime'].includes(repo.name))
			.map(repo => ({
				branch: repo.default_branch,
				full_name: repo.full_name,
				name: repo.name
			}));

		saveProject(
			createProjectsIndex(projects),
			'src/data/open-source.ts',
			'atanas.info: Saved open source projects list.'
		);

		for (const project of projects) {
			await fetchProject(project.full_name, project.branch)
				.then((data: string) => {
					const name = project.name.split('/').pop();
					const path = `src/data/open-source-projects/${name}.md`;

					saveProject(data, path, 'atanas.info: Saved open source project ' + name);
				})
				.catch((err: Error) => {
					log('atanas.info: Failed fetching open source project ' + project + '. Error is: ' + err);
				});
		}
	} catch (e: any) {
		saveProject(
			createProjectsIndex([]),
			`src/data/open-source.ts`,
			'atanas.info: Failed fetching open source projects. Error is ' + e
		);
	}

	process.exit();
})();
