import * as React from 'react';

import { music } from '../../scripts/music';
import { Section } from '..';

export const Music: React.FC = () => {
	const container: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);

	React.useEffect(() => {
		music(container.current);
	}, []);

	return (
		<Section id="music" hasButton wrapperClassName="o-main--high">
			<div ref={container} className="c-music">
				<canvas id="canvas" />

				<button id="menu" className="c-music__menu">
					Pick a track
				</button>

				<button id="pause" className="c-music__btn c-music__btn--pause" hidden>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
					</svg>
					Pause
				</button>

				<button id="play" className="c-music__btn c-music__btn--play">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M8 5v14l11-7z" />
					</svg>
					Play
				</button>

				<audio id="audio" hidden controls crossOrigin="anonymous" />

				<div id="tracks" className="c-music__tracks" hidden />

				<h2>
					Pick a track and <br /> press the play button.
				</h2>
			</div>
		</Section>
	);
};

export default Music;
