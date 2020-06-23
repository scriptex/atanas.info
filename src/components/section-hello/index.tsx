import * as React from 'react';
import { useInterval } from 'react-use';

import { titles } from '../../assets/scripts/titles';
import { Section } from '..';
import { initCanvas, createDots } from '../../assets/scripts/canvas';

export const Slider: React.FunctionComponent = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	useInterval(() => {
		setActiveIndex(activeIndex === titles.length - 1 ? 0 : activeIndex + 1);
	}, 5000);

	return (
		<div className="c-slider">
			<h1>
				Hello! <br />I am Atanas Atanasov
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

export const SectionHello: React.FunctionComponent = () => {
	React.useEffect(() => {
		createDots(initCanvas('canvas'));
	}, []);

	return (
		<Section id="hello" hasButton={false}>
			<div className="c-canvas" id="canvas" />

			<Slider />
		</Section>
	);
};

export default SectionHello;
