import { load } from 'cheerio';
import clientPromise, { Query, queryNPM, queryGithub, queryGitlab, queryLastFM } from '@lib/mongodb';

import { log } from '@scripts/shared';

export type Project = {
	readonly url: string;
	readonly name: string;
};

export type Contribution = {
	count: number | null;
	color: string;
};

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

export const getQuery = (type: InsightsType): Query => {
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

	await collection.updateOne(query, { $set: { ...query, data } }, options);

	log(`atanas.info: Successfully saved insights data from ${type}.`);
};
