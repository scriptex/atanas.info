import * as React from 'react';
import useInterval from 'use-interval';

import { titles } from '../../data/titles';
import { Section } from '..';
import { isPrerendering } from '../../scripts/shared';
import { initCanvas, createDots, destroyDots } from '../../scripts/canvas';

export const Slider: React.FC = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	useInterval(() => {
		setActiveIndex(activeIndex === titles.length - 1 ? 0 : activeIndex + 1);
	}, 5000);

	return (
		<div className="c-slider">
			<h1>
				👋 Hello! <br />I am Atanas Atanasov
			</h1>

			<h2>
				{titles.map((title: string, index: number) => (
					<span key={index} className={`${index === activeIndex ? 'current' : ''}`}>
						{title}
					</span>
				))}
			</h2>
		</div>
	);
};

export const SectionHello: React.FC = () => {
	React.useEffect(() => {
		let el: d3.Selection<SVGCircleElement, any, SVGSVGElement, any> | null = null;

		if (!isPrerendering) {
			el = createDots(initCanvas('canvas'));
		}

		return () => {
			destroyDots(el);
		};
	}, []);

	return (
		<Section id="hello" hasButton={false} wrapperClassName="o-main--high">
			<div className="c-canvas" id="canvas" />

			<Slider />
		</Section>
	);
};

export default SectionHello;
