import * as React from 'react';

import { Slide, slides } from '../../data/slides';
import { isPrerendering } from '../../scripts/shared';
import { Loader, Section, SectionNav } from '..';

export const Slides: React.FC = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	return (
		<Section
			id="slides"
			style={{ backgroundImage: 'url(images/temp/presentation.jpg)' }}
			title="Slides"
			className=" fullsize-background"
			hasButton={true}
		>
			<SectionNav name="title" data={slides} active={activeIndex} onClick={setActiveIndex} />

			<div className="c-section__body">
				{slides.map((slide: Slide, index: number) => (
					<div key={index} className={`c-section__frame${activeIndex === index ? ' current' : ''}`}>
						{isPrerendering ? null : (
							<>
								<Loader />

								<iframe
									src={`${slide.url}/embed?start=false&loop=false&delayms=3000`}
									title={slide.description}
									loading="lazy"
									allowFullScreen={true}
								/>
							</>
						)}
					</div>
				))}
			</div>
		</Section>
	);
};

export default Slides;