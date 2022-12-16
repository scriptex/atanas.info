import * as React from 'react';

import { tracks } from '@data/tracks';
import { Section } from '@components';
import { music, MusicFunctions } from '@scripts/music';
import { Ref, composeClassName } from '@scripts/shared';

export const Music: React.FC = () => {
	const [source, setSource] = React.useState(tracks[0]);
	const [playing, setPlaying] = React.useState(false);
	const [visible, setVisible] = React.useState(false);
	const [functions, setFunctions] = React.useState<MusicFunctions>();

	const audio: Ref<HTMLAudioElement> = React.useRef(null);
	const canvas: Ref<HTMLCanvasElement> = React.useRef(null);
	const container: Ref<HTMLDivElement> = React.useRef(null);

	React.useEffect(() => {
		if (container.current) {
			setFunctions(music(container.current));
		}
	}, [container.current]);

	return (
		<Section id="music" hasButton wrapperClassName="o-main--high">
			<div
				ref={container}
				className={composeClassName('c-music', [visible ? 'list-visible' : '', playing ? 'playing' : ''])}
			>
				<audio ref={audio} src={source.url} hidden controls crossOrigin="anonymous" />

				<canvas ref={canvas} />

				<button className="c-music__menu" onClick={() => setVisible(!visible)}>
					{visible ? 'Close track list' : 'Pick a track'}
				</button>

				<button
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

				<div className="c-music__tracks">
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

				<h2>
					Pick a track and <br /> press the play button.
				</h2>
			</div>
		</Section>
	);
};

export default Music;
