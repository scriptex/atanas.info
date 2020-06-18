#!/usr/bin/env ts-node-script

interface Project {
	readonly url: string;
	readonly name: string;
}

import fetch, { Response } from 'node-fetch';

import { writeFileSync, unlinkSync, existsSync } from 'fs';

import { asyncForEach } from '../../insights/utils';
const { projects }: { projects: Project[] } = require('../../src/assets/scripts/open-source');

const fetchProject = async (repo: string, branch: string = 'master', file: string = 'README.md'): Promise<string> => {
	const rootURL = 'https://raw.githubusercontent.com';
	const filepath = `${rootURL}/${repo}/${branch}/${file}`;

	return await fetch(filepath).then((response: Response) => response.text());
};

if (!projects.length) {
	console.log('atanas.info: No projects specified.');
} else {
	asyncForEach(projects, (project: Project) => {
		fetchProject(project.url)
			.then((data: string) => {
				const name = `projects/${project.name}.md`;

				data = data.replace(/\(http:\/\//gi, '(https://');
				data = data.replace(/```sh/gi, '```bash');

				if (existsSync(name)) {
					unlinkSync(name);
				}

				writeFileSync(name, data);

				console.log('atanas.info: Saved project ' + name);
			})
			.catch((err: Error) => {
				console.log('atanas.info: Failed to fetch project ' + project.url + '. Error is: ' + err);
			});
	});
}
