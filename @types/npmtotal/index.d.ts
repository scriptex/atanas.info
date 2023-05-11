declare module 'npmtotal' {
	type NPMTotalOptions = {
		exclude: string[];
		startDate: string;
		endDate: string;
	};

	type NPMTotalResult = {
		sum: number;
		stats: Array<[string, number]>;
	};

	let npmtotal: (name: string, options: Partial<NPMTotalOptions>) => Promise<NPMTotalResult>;

	export = npmtotal;
}
