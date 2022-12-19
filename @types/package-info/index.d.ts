declare module 'package-info' {
	export interface Package {
		name: string;
		version: string;
		description: string;
		license: string;
		homepage: string;
		author: string;
	}

	export default function info(name: string): Promise<Package>;

	export {};
}
