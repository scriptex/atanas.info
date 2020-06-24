import * as React from 'react';

import { Slide, slides } from '../../assets/scripts/slides';
import { Section, Button } from '..';

export const SectionSlides: React.FunctionComponent = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	return (
		<Section id="slides" hasButton={true}>
			<h2>Slides</h2>

			<nav className="c-section__nav">
				<ul>
					{slides.map((slide: Slide, index: number) => (
						<li key={index} className={activeIndex === index ? 'current' : ''}>
							<Button type="button" onClick={() => setActiveIndex(index)}>
								{slide.title}
							</Button>
						</li>
					))}
				</ul>
			</nav>

			<div className="c-section__body">
				{slides.map((slide: Slide, index: number) => (
					<div key={index} className={`c-section__frame${activeIndex === index ? ' current' : ''}`}>
						<iframe
							src={`${slide.url}/embed?start=false&loop=false&delayms=3000`}
							title={slide.description}
							/* eslint-disable-next-line @typescript-eslint/ban-ts-comment*/
							// @ts-ignore
							loading="lazy"
							allowFullScreen={true}
						/>
					</div>
				))}
			</div>
		</Section>
	);
};

export default SectionSlides;
