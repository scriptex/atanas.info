import * as React from 'react';

import { music } from '../../scripts/music';
import { Section } from '..';

export const SectionMusic: React.FunctionComponent = () => {
	const container: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);

	React.useEffect(() => {
		music(container.current);
	}, []);

	return (
		<Section id="music" hasButton={true} wrapperClassName="o-main--high">
			<div ref={container} className="c-music">
				<canvas id="canvas" />

				<button id="menu" className="c-music__menu">
					Pick a track
				</button>

				<button id="pause" className="c-music__btn c-music__btn--pause" hidden>
					Pause
				</button>

				<button id="play" className="c-music__btn c-music__btn--play">
					Play
				</button>

				<audio id="audio" hidden controls crossOrigin="anonymous" />

				<div id="tracks" className="c-music__tracks" hidden />
			</div>
		</Section>
	);
};

export default SectionMusic;
