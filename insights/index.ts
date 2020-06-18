#!/usr/bin/env ts-node-script

import { writeFileSync } from 'fs';

import { client } from './client';
import { asyncForEach } from './utils';

(async function (): Promise<void> {
	console.log('Getting insights data from Github...');

	try {
		const file = 'src/assets/scripts/insights.json';
		const user = await client.get({ path: '/users/scriptex' });
		const repos = await client.get({ path: '/users/scriptex/repos?per_page=100' });
		const insights: any[] = [];
		const contributions: any[] = [];

		await asyncForEach(
			repos,
			async ({ name }: { name: string }): Promise<void> => {
				insights.push(await client.get({ path: `/repos/scriptex/${name}` }));
				contributions.push(await client.get({ path: `/repos/scriptex/${name}/contributors` }));
			}
		);

		writeFileSync(file, JSON.stringify({ user, repos, insights, contributions }, null, 2));

		console.log(`Successfully wrote insights data from Github in ${file}`);
	} catch (e) {
		console.log('Error getting data from Github.', e);
	}

	process.exit();
})();
