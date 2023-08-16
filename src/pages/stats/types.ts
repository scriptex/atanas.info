export type Package = {
	name: string;
	version: string;
	description: string;
	license: string;
	homepage: string;
	author: string;
	downloads: number;
};

export type Packages<T = Record<string, Package>> = {
	data: Record<string, Package> & T;
};

export type WithSum = {
	sum: number;
};

export type WithError = {
	error?: boolean;
};

export type Props = Packages<WithSum & WithError>;
