import fetch from 'node-fetch';
import { load } from 'cheerio';

export interface Project {
	readonly url: string;
	readonly name: string;
}

export interface Contribution {
	[x: string]: {
		count: number;
		color: string;
	};
}

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

export const getContributions = async (url = 'https://github.com/scriptex'): Promise<Contribution[]> =>
	await fetch(url)
		.then(res => res.text())
		.then((markup: string) => {
			const $ = load(markup);

			return $('rect')
				.get()
				.reduce(
					(data, rect) => ({
						...data,
						[$(rect).data('date')]: {
							count: $(rect).data('count'),
							color: $(rect).attr('fill')
						}
					}),
					{}
				);
		});
