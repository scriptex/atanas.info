import useInterval from 'use-interval';
import { FC, useRef, useState, useEffect } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import hello from '@data/lotties/hello.json';
import { getTitlesFromCMS } from '@scripts/cms';
import { Title, Layout, Section, Animation } from '@components';

export const Home: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ titles }) => {
	const canvasRef = useRef<HTMLDivElement>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	useInterval(() => {
		setActiveIndex(activeIndex === titles.length - 1 ? 0 : activeIndex + 1);
	}, 5000);

	useEffect(() => {
		const canvas = canvasRef.current;

		import('@scripts/canvas')
			.then(({ initCanvas, createDots }) => {
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
		<Layout main="o-main--high">
			<Title text="Atanas Atanasov | Senior Javascript/Typescript Engineer" />

			<Section id="hello" hasShell={false} hasButton={false}>
				<div className="c-canvas" id="canvas" ref={canvasRef} />

				<div className="c-slider">
					<h1>
						<Animation data={hello} width={100} height={100} className="c-slider__animation" />I am Atanas
						Atanasov
					</h1>

					<h2>
						{titles.map((title: string, index: number) => (
							<span key={title} className={index === activeIndex ? 'current' : undefined}>
								{title}
							</span>
						))}
					</h2>
				</div>
			</Section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<{ titles: string[] }> = async () => ({
	props: {
		titles: await getTitlesFromCMS()
	}
});

export default Home;
