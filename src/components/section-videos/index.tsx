import * as React from 'react';

import { Section, SectionNav } from '..';
import { presentations, Presentation } from '../../scripts/presentations';

export const SectionVideos: React.FunctionComponent = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	return (
		<Section id="videos" hasButton={true} className=" c-section--slides">
			<h2>Videos</h2>

			<SectionNav name="title" data={presentations} active={activeIndex} onClick={setActiveIndex} />

			<div className="c-section__body">
				{presentations.map((presentation: Presentation, index: number) => (
					<div key={index} className={`c-section__frame${activeIndex === index ? ' current' : ''}`}>
						<iframe
							src={`${presentation.url}`}
							title={presentation.description}
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

export default SectionVideos;
