import { FC, useEffect, useRef, useState } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import useInterval from 'use-interval';

import { Animation, Layout, Section, Title } from '@components';
import { getFundingFromCMS, getPartnersFromCMS, getTitlesFromCMS } from '@scripts/cms';
import type { HomePageProps } from '@scripts/types';

import hello from '@data/lotties/hello.json';

export const Home: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ funding, partners, titles }) => {
	const canvasRef = useRef<HTMLDivElement>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	useInterval(() => {
		setActiveIndex(activeIndex === titles.length - 1 ? 0 : activeIndex + 1);
	}, 5000);

	useEffect(() => {
		const canvas = canvasRef.current;

		import('@scripts/canvas')
			.then(({ createDots, initCanvas }) => {
				createDots(initCanvas('canvas'));
			})
			.catch(console.error);

		return () => {
			if (canvas) {
				canvas.innerHTML = '';
			}
		};
	}, []);

	return (
		<Layout funding={funding} main="o-main--high" partners={partners}>
			<Title text="" />

			<Section hasButton={false} hasShell={false} id="hello">
				<div className="c-canvas" id="canvas" ref={canvasRef} />

				<div className="c-slider">
					<h1>
						<Animation className="c-slider__animation" data={hello} height={100} width={100} />I am Atanas
						Atanasov
					</h1>

					<h2>
						{titles.map((title: string, index: number) => (
							<span className={index === activeIndex ? 'current' : undefined} key={title}>
								{title}
							</span>
						))}
					</h2>
				</div>

				<h4>I paint the pixels on your screen</h4>
			</Section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => ({
	props: {
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS(),
		titles: await getTitlesFromCMS()
	},
	revalidate: 86400
});

export default Home;
