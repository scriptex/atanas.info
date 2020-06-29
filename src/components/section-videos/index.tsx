import * as React from 'react';

import { Section, SectionNav } from '..';
import { presentations, Presentation } from '../../assets/scripts/presentations';

export const SectionVideos: React.FunctionComponent = () => {
	const [activeIndex, setActiveIndex] = React.useState(-1);

	return (
		<Section id="videos" hasButton={true} className=" c-section--slides">
			<h2>Videos</h2>

			<SectionNav name="title" data={presentations} active={activeIndex} onClick={setActiveIndex} />

			<div className="c-section__body">
				{activeIndex === -1 ? (
					<div className="text-center">
						<em>Select a video to view</em>
					</div>
				) : (
					presentations.map((presentation: Presentation, index: number) => (
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
					))
				)}
			</div>
		</Section>
	);
};

export default SectionVideos;
