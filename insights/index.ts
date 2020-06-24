#!/usr/bin/env ts-node-script

import { getGithubInsights } from './github';
import { getGitlabInsights } from './gitlab';

(async (): Promise<void> => {
	await getGithubInsights();

	console.log('-----');

	await getGitlabInsights();

	process.exit();
})();
