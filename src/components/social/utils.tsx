import type { CarouselItem } from 'react-round-carousel';

import type { LastFMAlbum } from '@insights/utils';

export const filteredData = (data: LastFMAlbum[]): CarouselItem[] =>
	data
		.filter((album: LastFMAlbum) => !!album?.images?.[2]?.['#text'])
		.map(album => ({
			alt: album?.name,
			content: (
				<>
					<strong>{album?.name}</strong>

					<span>{album?.artist}</span>
				</>
			),
			image: album?.images?.[2]?.['#text']
		}));
