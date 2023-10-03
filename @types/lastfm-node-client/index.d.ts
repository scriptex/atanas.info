declare module 'lastfm-node-client' {
	export type BooleanNumber = 1 | 0;

	export type LastFMDefaultOptions = {
		lang: string;
		username: string;
		autocorrect: BooleanNumber;
	};

	export type LastFMUser = {
		user: string;
	};

	export type LastFMPeriod = {
		period: '7day' | '1month' | '3month' | '6month' | '12month' | 'overall';
	};

	export type LastFMImage = {
		size: 'small' | 'medium' | 'large' | 'extralarge';
		'#text': string;
	};

	export type LastFMUserResponse = {
		user: {
			name: string;
			age: string;
			subscriber: string;
			realname: string;
			bootstrap: string;
			playcount: string;
			artist_count: string;
			playlists: string;
			track_count: string;
			album_count: string;
			image: LastFMImage[];
			registered: {
				unixtime: string;
				'#text': number;
			};
			country: string;
			gender: string;
			url: string;
			type: 'user';
		};
	};

	export type LastFMTopAlbumResponse = {
		artist: {
			url: string;
			name: string;
			mbid: string;
		};
		image: LastFMImage[];
		mbid: string;
		url: string;
		playcount: string;
		'@attr': {
			rank: string;
		};
		name: string;
	};

	export type LastFMTopAlbumsResponse = {
		topalbums: {
			album: LastFMTopAlbumResponse[];
		};
	};

	export type LastFMAlbumResponse = {
		album: {
			artist: string;
			mbid: string;
			tags: {
				tag: Array<{ url: string; name: string }>;
			};
			name: string;
			image: LastFMImage[];
			tracks: {
				track: Array<{
					streamable: {
						fulltrack: string;
						'#text': string;
					};
					duration: number;
					url: string;
					name: string;
					'@attr': { rank: number };
					artist: {
						url: string;
						name: string;
						mbid: string;
					};
				}>;
			};
			url: string;
			listeners: string;
			playcount: string;
			userplaycount: number;
		};
	};

	export type LastFMWeeklyAlbumResponse = {
		artist: {
			mbid: string;
			'#text': string;
		};
		mbid: string;
		url: string;
		name: string;
		'@attr': {
			rank: string;
		};
		playcount: string;
		apiDetails: LastFMAlbumResponse;
	};

	export type LastFMWeeklyAlbumChartResponse = {
		weeklyalbumchart: {
			album: LastFMWeeklyAlbumResponse[];
		};
	};

	class LastFm {
		constructor(key?: string);

		public userGetInfo: (options: LastFMUser) => Promise<LastFMUserResponse>;
		public userGetTopAlbums: (options: LastFMUser & LastFMPeriod) => Promise<LastFMTopAlbumsResponse>;
		public userGetWeeklyAlbumChart: (options: LastFMUser) => Promise<LastFMWeeklyAlbumChartResponse>;
		public albumGetInfo: (
			options: { album: string; artist: string } & LastFMDefaultOptions
		) => Promise<LastFMAlbumResponse>;
	}

	export = LastFm;
}
