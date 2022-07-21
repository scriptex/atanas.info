import * as React from 'react';
import useInterval from 'use-interval';

import { titles } from '../../data/titles';

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

export default Slider;
