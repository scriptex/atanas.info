#!/usr/bin/env ts-node-script

import { writeFileSync } from 'fs';

import { repositories } from '../src/scripts/github-insights.json';

const pages = repositories
	.filter(({ has_pages }) => has_pages)
	.map(({ name }) => ({
		name,
		href: `https://scriptex.github.io/${name}`
	}));

writeFileSync('src/scripts/pages.json', JSON.stringify(pages, null, '\t'));
