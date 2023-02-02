import { CarouselItem } from 'react-round-carousel';

type LastFMAlbum = {
	name: string;
	artist: string;
	images: Array<{
		size: string;
		'#text': string;
	}>;
};

export const filteredData = (data: LastFMAlbum[]): CarouselItem[] =>
	data
		.filter((album: LastFMAlbum) => !!album?.images?.[2]?.['#text'])
		.map(album => ({
			alt: album?.name,
			image: album?.images?.[2]?.['#text'],
			content: (
				<>
					<strong>{album?.name}</strong>

					<span>{album?.artist}</span>
				</>
			)
		}));
