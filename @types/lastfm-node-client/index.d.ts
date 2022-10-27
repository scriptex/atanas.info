declare module 'lastfm-node-client' {
	type LastFMDefaultOptions = {
		lang: string;
		username: string;
		autocorrect: 1 | 0;
	};

	type LastFMUser = {
		user: string;
	};

	class LastFm {
		constructor(key?: string);

		public userGetWeeklyAlbumChart: (options: LastFMUser) => Promise<any>;
		public albumGetInfo: (options: { album: string; artist: string } & LastFMDefaultOptions) => Promise<any>;
		public userGetTopAlbums: (options: LastFMUser & { period: string }) => Promise<any>;
	}

	export = LastFm;
}
