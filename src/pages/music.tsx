import { FC, useRef, useState, useEffect } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { getPartnersFromCMS } from '@scripts/cms';
import { getData, queryMusic } from '@lib/mongodb';
import { music, MusicFunctions } from '@scripts/music';
import { Ref, composeClassName } from '@scripts/shared';
import type { MusicPageProps, Track } from '@scripts/types';
import { Button, Layout, Section, Title } from '@components';

const getTrackArtist = (data: string): string => {
	const result = data.replace('Scriptex', '').trim();

	if (result === '') {
		return '';
	}

	if (result.includes('&')) {
		return ` (${result.replace('&', 'with')})`;
	}

	return ` (${result})`;
};

export const Music: FC<Readonly<InferGetStaticPropsType<typeof getStaticProps>>> = ({ data, partners }) => {
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
		<Layout main="o-main--high" partners={partners}>
			<Title text="Music | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

			<Section id="music" hasButton>
				<div
					ref={container}
					className={composeClassName('c-music', [visible ? 'list-visible' : '', playing ? 'playing' : ''])}
				>
					<audio ref={audio} src={source.url} hidden controls crossOrigin="anonymous" />

					<canvas ref={canvas} />

					<Button type="button" onClick={() => setVisible(!visible)} unstyled className="c-music__menu">
						{visible ? 'Close track list' : 'Pick a track'}
					</Button>

					<Button
						type="button"
						onClick={() => {
							setPlaying(false);
							setVisible(false);
							audio.current?.pause();
							functions?.onPause();
						}}
						unstyled
						className="c-music__btn c-music__btn--pause"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
						</svg>
						Pause
					</Button>

					<Button
						type="button"
						onClick={() => {
							setPlaying(true);
							setVisible(false);
							functions?.onPlay();
							audio.current?.play();
						}}
						unstyled
						className="c-music__btn c-music__btn--play"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path d="M8 5v14l11-7z" />
						</svg>
						Play
					</Button>

					<div className="c-music__tracks">
						{data.map(track => (
							<Button
								type="button"
								key={track.url}
								onClick={async () => {
									await setSource(track);

									setPlaying(true);
									setVisible(false);
									functions?.onPlay();
									audio.current?.play();
								}}
								unstyled
								className={track.url === source.url ? 'active' : undefined}
							>
								<span>
									{track.metaData.title}
									{getTrackArtist(track.metaData.artist)}
								</span>
							</Button>
						))}
					</div>

					<h2>
						Pick a track and <br /> press the play button.
					</h2>

					{playing && (
						<h3>
							Now playing: <br />
							{source.metaData.title}
						</h3>
					)}
				</div>
			</Section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<MusicPageProps> = async () => ({
	props: {
		data: (await getData('Music', queryMusic)).props.data as Track[],
		partners: await getPartnersFromCMS()
	}
});

export default Music;
