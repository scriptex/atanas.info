#!/usr/bin/env ts-node-script

import fetch, { Response } from 'node-fetch';

import { writeFileSync, unlinkSync, existsSync } from 'fs';

import { asyncForEach } from '../../insights/utils';

type OpenSource = {
	main: string[];
	projects: string[];
};

const fetchProject = async (repo: string, branch: string = 'master', file: string = 'README.md'): Promise<string> => {
	const rootURL = 'https://raw.githubusercontent.com';
	const filepath = `${rootURL}/${repo}/${branch}/${file}`;

	return await fetch(filepath).then((response: Response) => response.text());
};

(async () => {
	const { main, projects }: OpenSource = await import('../../src/scripts/open-source' as any);

	if (!projects.length) {
		console.log('atanas.info: No projects specified.');
	} else {
		asyncForEach(projects, (project: string) => {
			fetchProject(project, main.includes(project) ? 'main' : 'master')
				.then((data: string) => {
					const name = project.split('/').pop();
					const path = `projects/${name}.md`;

					data = data.replace(/\(http:\/\//gi, '(https://');
					data = data.replace(/```sh/gi, '```bash');

					if (existsSync(path)) {
						unlinkSync(path);
					}

					writeFileSync(path, data);

					console.log('atanas.info: Saved project ' + name);
				})
				.catch((err: Error) => {
					console.log('atanas.info: Failed to fetch project ' + project + '. Error is: ' + err);
				});
		});
	}
})();
