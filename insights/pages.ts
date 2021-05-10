#!/usr/bin/env ts-node-script

import { writeFileSync } from 'fs';

import githubInsights from '../src/scripts/github-insights.json';

interface Insights {
	error?: boolean;
	repositories?: {
		name: string;
		has_pages: boolean;
	}[];
}

const insights: Insights = githubInsights;

if (insights.error) {
	process.exit();
} else {
	const pages = insights.repositories
		?.filter(({ has_pages }: any) => has_pages)
		.map(({ name }: any) => ({
			name,
			href: `https://scriptex.github.io/${name}`
		}));

	writeFileSync('src/scripts/pages.json', JSON.stringify(pages, null, '\t'));
}
