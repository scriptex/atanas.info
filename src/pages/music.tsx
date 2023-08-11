import { FC, useRef, useState, useEffect } from 'react';

import { music, MusicFunctions } from '@scripts/music';
import { Ref, composeClassName } from '@scripts/shared';
import { Layout, Section, Title } from '@components';
import { getData, queryMusic, MongoDBProps } from '@lib/mongodb';

type Track = {
	url: string;
	metaData: {
		title: string;
		artist: string;
	};
};

type Props = {
	data: Track[];
};

export const getTrackArtist = (data: string): string => {
	const result = data.replace('Scriptex', '').trim();

	if (result === '') {
		return '';
	}

	if (result.includes('&')) {
		return ` (${result.replace('&', 'with')})`;
	}

	return ` (${result})`;
};

export const Music: FC<Readonly<Props>> = ({ data }: Props) => {
	const [source, setSource] = useState(data[0]);
	const [playing, setPlaying] = useState(false);
	const [visible, setVisible] = useState(false);
	const [functions, setFunctions] = useState<MusicFunctions>();

	const audio: Ref<HTMLAudioElement> = useRef(null);
	const canvas: Ref<HTMLCanvasElement> = useRef(null);
	const container: Ref<HTMLDivElement> = useRef(null);

	useEffect(() => {
		if (container.current) {
			setFunctions(music(container.current));
		}
	}, []);

	return (
		<Layout main="o-main--high">
			<Title text="Music | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

			<Section id="music" hasButton>
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
						{data.map(track => (
							<button
								key={track.url}
								onClick={async () => {
									await setSource(track);

									setPlaying(true);
									setVisible(false);
									functions?.onPlay();
									audio.current?.play();
								}}
								className={track.url === source.url ? 'active' : undefined}
							>
								<span>
									{track.metaData.title}
									{getTrackArtist(track.metaData.artist)}
								</span>
							</button>
						))}
					</div>

					<h2>
						Pick a track and <br /> press the play button.
					</h2>
				</div>
			</Section>
		</Layout>
	);
};

export const getStaticProps = async (): Promise<MongoDBProps<unknown>> => getData('Music', queryMusic);

export default Music;
