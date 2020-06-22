import * as React from 'react';
import Player from 'react-jinke-music-player';

import { tracks } from '../../assets/scripts/tracks';

export const SectionMusic: React.FunctionComponent = () => (
	<Player
		autoPlay={false}
		audioLists={tracks.map(track => ({
			name: track.metaData.title,
			musicSrc: track.url,
			singer: track.metaData.artist
		}))}
		defaultPosition={{ bottom: 'calc(50% - 30px)', left: 0 }}
	/>
);

export default SectionMusic;
