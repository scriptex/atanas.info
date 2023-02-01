import Head from 'next/head';
import useInterval from 'use-interval';
import { FC, useRef, useState, useEffect } from 'react';

import hello from '@data/lotties/hello.json';
import { titles } from '@data/titles';
import { Layout, Section, Animation } from '@components';

export const Home: FC = () => {
	const canvasRef = useRef<HTMLDivElement>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	useInterval(() => {
		setActiveIndex(activeIndex === titles.length - 1 ? 0 : activeIndex + 1);
	}, 5000);

	useEffect(() => {
		const canvas = canvasRef.current;

		import('@scripts/canvas').then(({ initCanvas, createDots }) => {
			createDots(initCanvas('canvas'));
		});

		return () => {
			if (canvas) {
				canvas.innerHTML = '';
			}
		};
	}, []);

	return (
		<Layout main="o-main--high">
			<Head>
				<title>Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
			</Head>

			<Section id="hello" hasShell={false} hasButton={false}>
				<div className="c-canvas" id="canvas" ref={canvasRef} />

				<div className="c-slider">
					<h1>
						<Animation data={hello} width={100} height={100} className="c-slider__animation" />I am Atanas
						Atanasov
					</h1>

					<h2>
						{titles.map((title: string, index: number) => (
							<span key={index} className={index === activeIndex ? 'current' : undefined}>
								{title}
							</span>
						))}
					</h2>
				</div>
			</Section>
		</Layout>
	);
};

export default Home;
