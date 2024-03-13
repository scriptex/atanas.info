declare module 'package-info' {
	export type Package = {
		author: string;
		description: string;
		homepage: string;
		license: string;
		name: string;
		version: string;
	};

	export default function info(name: string): Promise<Package>;

	export {};
}
