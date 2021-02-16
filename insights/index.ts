#!/usr/bin/env ts-node-script

import { getGithubInsights } from './github';
import { getGitlabInsights } from './gitlab';
import { getLastFMInsights } from './last-fm';

(async (): Promise<void> => {
	await getGithubInsights();

	console.log('-----');

	await getGitlabInsights();

	console.log('-----');

	await getLastFMInsights();

	process.exit();
})();
