import * as React from 'react';

import { Slide, slides } from '../../assets/scripts/slides';
import { Section, SectionNav } from '..';

export const SectionSlides: React.FunctionComponent = () => {
	const [activeIndex, setActiveIndex] = React.useState(-1);

	return (
		<Section id="slides" hasButton={true}>
			<h2>Slides</h2>

			<SectionNav name="title" data={slides} active={activeIndex} onClick={setActiveIndex} />

			<div className="c-section__body">
				{activeIndex === -1 ? (
					<div className="text-center">
						<em>Select a slide to view</em>
					</div>
				) : (
					slides.map((slide: Slide, index: number) => (
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
					))
				)}
			</div>
		</Section>
	);
};

export default SectionSlides;
