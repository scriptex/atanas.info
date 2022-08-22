import * as React from 'react';

import { music } from '../../scripts/music';
import { tracks } from '../../data/tracks';
import { Section } from '..';

export const Music: React.FC = () => {
	const [source, setSource] = React.useState(tracks[0]);
	const [playing, setPlaying] = React.useState(false);
	const [visible, setVisible] = React.useState(false);
	const [functions, setFunctions] = React.useState<any>({});

	const audio: React.MutableRefObject<HTMLAudioElement | null> = React.useRef(null);
	const canvas: React.MutableRefObject<HTMLCanvasElement | null> = React.useRef(null);
	const container: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);

	React.useEffect(() => {
		setFunctions(music(container.current));
	}, []);

	return (
		<Section id="music" hasButton wrapperClassName="o-main--high">
			<div ref={container} className="c-music">
				<audio ref={audio} src={source.url} hidden controls crossOrigin="anonymous" />

				<canvas ref={canvas} style={{ opacity: playing ? 1 : 0 }} />

				<button className="c-music__menu" onClick={() => setVisible(true)}>
					Pick a track
				</button>

				<button
					hidden={!playing}
					onClick={() => {
						setPlaying(false);
						setVisible(false);
						audio.current?.pause();
						functions?.onPause();
					}}
					className="c-music__btn c-music__btn--pause"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
					</svg>
					Pause
				</button>

				<button
					hidden={playing}
					onClick={() => {
						setPlaying(true);
						setVisible(false);
						functions?.onPlay();
						audio.current?.play();
					}}
					className="c-music__btn c-music__btn--play"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M8 5v14l11-7z" />
					</svg>
					Play
				</button>

				<div className="c-music__tracks" hidden={!visible}>
					{tracks.map((track, index) => (
						<button
							key={index}
							onClick={async () => {
								await setSource(track);

								setPlaying(true);
								setVisible(false);
								functions?.onPlay();
								audio.current?.play();
							}}
							className={track.url === source.url ? 'active' : undefined}
						>
							{track.metaData.artist} - {track.metaData.title}
						</button>
					))}
				</div>

				<h2 style={{ opacity: playing ? 0 : 1 }}>
					Pick a track and <br /> press the play button.
				</h2>
			</div>
		</Section>
	);
};

export default Music;
