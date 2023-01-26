import { load } from 'cheerio';
import * as puppeteer from 'puppeteer';
import clientPromise, { queryGithub, queryGitlab, queryLastFM, queryNPM } from '@lib/mongodb';

export interface Project {
	readonly url: string;
	readonly name: string;
}

export interface Contribution {
	[x: string]: {
		count: number | null;
		color: string;
	};
}

export type InsightsType = 'Github' | 'Gitlab' | 'NPM' | 'LastFM';

export const asyncForEach = async <T>(
	array: T[],
	callback: (item: T, index: number, arr: T[]) => any
): Promise<void> => {
	for (let index = 0; index < array.length; index++) {
		await callback(array[index], index, array);
	}
};

export const sortProjects = (projects: Project[]): Project[] => {
	return projects.sort((a: Project, b: Project) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
};

export const getContributions = async (url = 'https://github.com/scriptex'): Promise<Record<string, Contribution>> =>
	await fetch(url)
		.then(res => res.text())
		.then((markup: string) => {
			const $ = load(markup);

			return $('rect')
				.get()
				.reduce((data, rect) => {
					const date = $(rect).data('date') as string | void;

					if (!date) {
						return data;
					}

					return {
						...data,
						[date]: {
							count: parseInt($(rect).text()[0], 10),
							color: $(rect).attr('fill')
						}
					};
				}, {});
		});

export const getCalendar = async (
	url = 'https://github.com/scriptex',
	selector = '.js-calendar-graph'
): Promise<string | null> =>
	await fetch(url)
		.then(res => res.text())
		.then((markup: string) => load(markup)(selector).html());

export const getCalendarWithBrowser = async (url: string, selector: string, timeout: number): Promise<string> => {
	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox']
	});

	const page = await browser.newPage();

	await page.setViewport({
		width: 1440,
		height: 1000
	});

	await page.goto(url, { waitUntil: 'networkidle2' });
	await page.waitForTimeout(timeout);

	return await page.$eval(selector, (element: Element) => element.innerHTML);
};

export const getQuery = (type: InsightsType) => {
	switch (type) {
		case 'Github':
			return queryGithub;
		case 'Gitlab':
			return queryGitlab;
		case 'NPM':
			return queryNPM;
		case 'LastFM':
			return queryLastFM;
		default:
			return {};
	}
};

export const saveInsights = async <T>(data: T, type: InsightsType): Promise<void> => {
	const client = await clientPromise;
	const db = client.db('All');
	const query = getQuery(type);
	const options = { upsert: true };
	const collection = db.collection('Insights');

	await collection.updateOne(query, { $set: { ...query, data } }, options).catch(e => e);

	console.log(`Successfully saved insights data from ${type}.`);
};
