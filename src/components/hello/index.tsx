import * as React from 'react';

import { Slider, Section } from '..';
import { isPrerendering } from '../../scripts/shared';
import { initCanvas, createDots, destroyDots } from '../../scripts/canvas';

export const Hello: React.FC = () => {
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
		<Section id="hello" hasShell={false} hasButton={false} wrapperClassName="o-main--high">
			<div className="c-canvas" id="canvas" />

			<Slider />
		</Section>
	);
};

export default Hello;
