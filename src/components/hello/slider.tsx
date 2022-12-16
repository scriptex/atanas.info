import * as React from 'react';
import useInterval from 'use-interval';

import hello from '@data/lotties/hello.json';
import { titles } from '@data/titles';
import { Animation } from '@components';

export const Slider: React.FC = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	useInterval(() => {
		setActiveIndex(activeIndex === titles.length - 1 ? 0 : activeIndex + 1);
	}, 5000);

	return (
		<div className="c-slider">
			<h1>
				<Animation data={hello} width={100} height={100} className="c-slider__animation" />I am Atanas Atanasov
			</h1>

			<h2>
				{titles.map((title: string, index: number) => (
					<span key={index} className={index === activeIndex ? 'current' : undefined}>
						{title}
					</span>
				))}
			</h2>
		</div>
	);
};

export default Slider;
