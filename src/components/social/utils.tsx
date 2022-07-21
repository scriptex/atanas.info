import * as React from 'react';

import lastFm from '../../data/last.fm-insights.json';

export type TopAlbum = typeof lastFm['topAlbums'][0];
export type WeeklyAlbumChart = typeof lastFm['weeklyAlbumChart'][0];

export const filteredData = (data: TopAlbum[] | WeeklyAlbumChart[]) =>
	data
		.filter((album: TopAlbum | WeeklyAlbumChart) => !!album?.images[2]['#text'])
		.map(album => ({
			alt: album?.name,
			image: album?.images[2]['#text'],
			content: (
				<>
					<strong>{album?.name}</strong>

					<span>{album?.artist}</span>
				</>
			)
		}));
