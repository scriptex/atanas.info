export const asyncForEach = async <T>(
	array: T[],
	callback: (item: T, index: number, arr: T[]) => any
): Promise<void> => {
	for (let index = 0; index < array.length; index++) {
		await callback(array[index], index, array);
	}
};
