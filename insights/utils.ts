export interface Project {
	readonly url: string;
	readonly name: string;
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

export const adjustColor = (color: string, amount: number): string =>
	'#' +
	color
		.replace(/^#/, '')
		.replace(/../g, color =>
			('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2)
		);
