import * as React from 'react';
import Webamp from 'webamp';

import { tracks } from '../../assets/scripts/tracks';

export const SectionMusic: React.FunctionComponent = () => {
	React.useEffect(() => {
		const root = document.getElementById('root');
		const music = document.getElementById('music');
		const musicLink = document.querySelector('[href="#music"]');

		if (Webamp.browserIsSupported() && music && root) {
			const webamp = new Webamp({ initialTracks: tracks });

			webamp.onClose(() => {
				root.classList.remove('music--active');

				if (musicLink) {
					musicLink.addEventListener('click', () => webamp.reopen());
				}
			});

			webamp.renderWhenReady(music);
		}
	});

	return <div id="music"></div>;
};

export default SectionMusic;
