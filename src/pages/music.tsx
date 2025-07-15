import { FC, useEffect, useRef, useState } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Button, Layout, Section, Title } from '@components';
import { getData, queryMusic } from '@lib/mongodb';
import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import { music, MusicFunctions } from '@scripts/music';
import { composeClassName, Ref } from '@scripts/shared';
import type { MusicPageProps, Track } from '@scripts/types';

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

export const Music: FC<Readonly<InferGetStaticPropsType<typeof getStaticProps>>> = ({ data, funding, partners }) => {
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
		<Layout funding={funding} main="o-main--high" partners={partners}>
			<Title text="Music" />

			<Section hasButton id="music">
				<div
					className={composeClassName('c-music', [visible ? 'list-visible' : '', playing ? 'playing' : ''])}
					ref={container}
				>
					<audio controls crossOrigin="anonymous" hidden ref={audio} src={source.url}>
						<track kind="captions" />
					</audio>

					<canvas ref={canvas} />

					<Button className="c-music__menu" onClick={() => setVisible(!visible)} type="button" unstyled>
						{visible ? 'Close track list' : 'Pick a track'}
					</Button>

					<Button
						className="c-music__btn c-music__btn--pause"
						onClick={() => {
							setPlaying(false);
							setVisible(false);
							audio.current?.pause();
							functions?.onPause();
						}}
						type="button"
						unstyled
					>
						<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
						</svg>
						Pause
					</Button>

					<Button
						className="c-music__btn c-music__btn--play"
						onClick={() => {
							setPlaying(true);
							setVisible(false);
							functions?.onPlay();
							audio.current?.play();
						}}
						type="button"
						unstyled
					>
						<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M8 5v14l11-7z" />
						</svg>
						Play
					</Button>

					<div className="c-music__tracks">
						{data.map(track => (
							<Button
								className={track.url === source.url ? 'active' : undefined}
								key={track.url}
								onClick={async () => {
									await Promise.resolve(setSource(track));
									setPlaying(true);
									setVisible(false);
									functions?.onPlay();
									audio.current?.play();
								}}
								type="button"
								unstyled
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
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	},
	revalidate: 86400
});

export default Music;
