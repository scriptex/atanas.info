import * as React from 'react';
import Player from 'react-jinke-music-player';

import { tracks } from '../../assets/scripts/tracks';

export const SectionMusic: React.FunctionComponent = () => (
	<Player
		remove={false}
		preload={false}
		autoPlay={false}
		audioLists={tracks.map(track => ({
			name: track.metaData.title,
			cover: './images/temp/atanas.jpg',
			singer: track.metaData.artist,
			musicSrc: track.url
		}))}
		defaultPosition={{ bottom: 'calc(50% - 30px)', left: 0 }}
		defaultPlayMode="shufflePlay"
		showMiniModeCover={false}
	/>
);

export default SectionMusic;
