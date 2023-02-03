#!/usr/bin/env ts-node-script

import { log } from '@scripts/shared';
import { getGithubInsights } from './github';
import { getGitlabInsights } from './gitlab';
import { getLastFMInsights } from './last-fm';

export const run = async (): Promise<void> => {
	await getGithubInsights();

	log('-----');

	await getGitlabInsights();

	log('-----');

	await getLastFMInsights();
};

if (!process.env.JEST_WORKER_ID) {
	(async () => {
		await run();
		process.exit();
	})();
}
