#!/usr/bin/env ts-node-script

import { existsSync, unlinkSync, readdirSync, writeFileSync } from 'node:fs';

import { getGithubRepositories } from '@insights/github';

type Project = {
	name: string;
	branch: string;
	full_name: string;
};

const folder = 'src/data/open-source';

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

	console.log(message);
};

const createProjectsIndex = (projects: Project[]) => {
	let i = 0;
	let j = 0;
	let result = '';

	for (const project of projects) {
		result += `import { html as project${i} } from './${project.name}.md';\n`;
		i++;
	}

	result += '\nexport const openSourceProjectsList = [\n';

	for (const project of projects) {
		result += `{
	url: '/portfolio/open-source/${project.name}',
	title: '${project.full_name}',
	image: 'https://source.unsplash.com/random/${1280 + j}x${840 + j}/?code',
	content: project${j}
},\n`;
		j++;
	}

	result += ']';

	return result;
};

(async () => {
	try {
		const projects: Project[] = (await getGithubRepositories())
			.filter(repo => !repo.private)
			.filter(repo => ['scriptex', 'three11'].includes(repo.owner.login))
			.filter(repo => !['uptime'].includes(repo.name))
			.map(repo => ({
				name: repo.name,
				branch: repo.default_branch,
				full_name: repo.full_name
			}));

		const blogPosts = readdirSync('src/data/posts').map(file => `/blog/${file.split('.')[0]}`);
		const openSourceProjectsRoutes = projects.map(project => `/portfolio/open-source/${project.name}`);

		writeFileSync(
			'src/data/dynamic-routes.json',
			JSON.stringify([...blogPosts, ...openSourceProjectsRoutes], null, 2)
		);

		saveProject(
			createProjectsIndex(projects),
			`${folder}/index.ts`,
			'atanas.info: Saved open source projects list.'
		);

		for (const project of projects) {
			await fetchProject(project.full_name, project.branch)
				.then((data: string) => {
					const name = project.name.split('/').pop();
					const path = `${folder}/${name}.md`;

					saveProject(data, path, 'atanas.info: Saved open source project ' + name);
				})
				.catch((err: Error) => {
					console.log('atanas.info: Failed fetching open source project ' + project + '. Error is: ' + err);
				});
		}
	} catch (e: any) {
		saveProject(
			JSON.stringify([], null, 2),
			`${folder}/list.json`,
			'atanas.info: Failed fetching open source projects. Error is ' + e
		);
	}

	process.exit();
})();
