import * as React from 'react';
import 'lite-youtube-embed';

import { presentations, Presentation } from '../../data/presentations';
import { Lines, Loader, Section, SectionNav } from '..';

export const SectionVideos: React.FunctionComponent = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	return (
		<Section id="videos" hasButton={true} className=" c-section--videos">
			<Lines />

			<h2>Videos</h2>

			<SectionNav name="title" data={presentations} active={activeIndex} onClick={setActiveIndex} />

			<div className="c-section__body">
				{presentations.map((presentation: Presentation, index: number) => (
					<div key={index} className={`c-section__frame${activeIndex === index ? ' current' : ''}`}>
						<Loader />

						<lite-youtube
							title={presentation.description}
							params="autoplay=0"
							videoid={`${presentation.id}`}
							playlabel={presentation.title}
						/>
					</div>
				))}
			</div>
		</Section>
	);
};

export default SectionVideos;
