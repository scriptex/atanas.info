#!/usr/bin/env ts-node-script

import { writeFileSync } from 'fs';

import githubInsights from '../src/scripts/github-insights.json';

if ((githubInsights as any).error) {
	process.exit();
} else {
	const pages = githubInsights.repositories
		.filter(({ has_pages }) => has_pages)
		.map(({ name }) => ({
			name,
			href: `https://scriptex.github.io/${name}`
		}));

	writeFileSync('src/scripts/pages.json', JSON.stringify(pages, null, '\t'));
}
