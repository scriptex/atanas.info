declare module 'npmtotal' {
	type NPMTotalOptions = {
		endDate: string;
		exclude: string[];
		startDate: string;
	};

	type NPMTotalResult = {
		stats: Array<[string, number]>;
		sum: number;
	};

	let npmtotal: (name: string, options: Partial<NPMTotalOptions>) => Promise<NPMTotalResult>;

	export = npmtotal;
}
