import * as React from 'react';

import { music } from '../../scripts/music';
import { Section } from '..';

// codebeat:disable[ABC,LOC,BLOCK_NESTING]
export const SectionMusic: React.FC = () => {
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

				<h2>
					Pick a track and
					<br />
					press the play button.
				</h2>
			</div>
		</Section>
	);
};
// codebeat:enable[ABC,LOC,BLOCK_NESTING]

export default SectionMusic;
