import * as React from 'react';

import { titles } from '../../assets/scripts/titles';
import { Section } from '..';
import { useInterval } from '../../utilities';
import { initCanvas, createDots } from '../../assets/scripts/canvas';

export const SectionHello: React.FunctionComponent = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	React.useEffect(() => {
		createDots(initCanvas('canvas'));
	}, []);

	useInterval(() => {
		setActiveIndex(activeIndex === titles.length - 1 ? 0 : activeIndex + 1);
	}, 5000);

	return (
		<Section id="hello" hasButton={false}>
			<div className="c-canvas" id="canvas" />

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
		</Section>
	);
};

export default SectionHello;
