declare module 'lastfm-node-client' {
	export type BooleanNumber = 1 | 0;

	export type LastFMDefaultOptions = {
		autocorrect: BooleanNumber;
		lang: string;
		username: string;
	};

	export type LastFMUser = {
		user: string;
	};

	export type LastFMPeriod = {
		period: '7day' | '1month' | '3month' | '6month' | '12month' | 'overall';
	};

	export type LastFMImage = {
		'#text': string;
		size: 'small' | 'medium' | 'large' | 'extralarge';
	};

	export type LastFMUserResponse = {
		user: {
			age: string;
			album_count: string;
			artist_count: string;
			bootstrap: string;
			country: string;
			gender: string;
			image: LastFMImage[];
			name: string;
			playcount: string;
			playlists: string;
			realname: string;
			registered: {
				'#text': number;
				unixtime: string;
			};
			subscriber: string;
			track_count: string;
			type: 'user';
			url: string;
		};
	};

	export type LastFMTopAlbumResponse = {
		'@attr': {
			rank: string;
		};
		artist: {
			mbid: string;
			name: string;
			url: string;
		};
		image: LastFMImage[];
		mbid: string;
		name: string;
		playcount: string;
		url: string;
	};

	export type LastFMTopAlbumsResponse = {
		topalbums: {
			album: LastFMTopAlbumResponse[];
		};
	};

	export type LastFMAlbumResponse = {
		album: {
			artist: string;
			image: LastFMImage[];
			listeners: string;
			mbid: string;
			name: string;
			playcount: string;
			tags: {
				tag: Array<{ name: string; url: string }>;
			};
			tracks: {
				track: Array<{
					'@attr': { rank: number };
					artist: {
						mbid: string;
						name: string;
						url: string;
					};
					duration: number;
					name: string;
					streamable: {
						'#text': string;
						fulltrack: string;
					};
					url: string;
				}>;
			};
			url: string;
			userplaycount: number;
		};
	};

	export type LastFMWeeklyAlbumResponse = {
		'@attr': {
			rank: string;
		};
		apiDetails: LastFMAlbumResponse;
		artist: {
			'#text': string;
			mbid: string;
		};
		mbid: string;
		name: string;
		playcount: string;
		url: string;
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
