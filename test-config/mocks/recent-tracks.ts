import { LastFMRecentTracksResponse } from 'lastfm-node-client';

export const recentTracks: LastFMRecentTracksResponse = {
	recenttracks: {
		track: [
			{
				'@attr': {
					nowplaying: 'true'
				},
				album: {
					'#text': 'Album',
					mbid: ''
				},
				artist: {
					'#text': 'Artist',
					mbid: ''
				},
				image: [
					{
						'#text': 'https://image.com/test.png',
						size: 'small'
					}
				],
				mbid: '',
				name: 'Name',
				streamable: '0',
				url: 'https://track.com'
			}
		]
	}
};
