import * as React from 'react';
import 'lite-youtube-embed';

import { Section, SectionNav } from '..';
import { presentations, Presentation } from '../../scripts/presentations';

export const SectionVideos: React.FunctionComponent = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	return (
		<Section
			id="videos"
			style={{ backgroundImage: 'url(images/temp/desktop.jpg)' }}
			hasButton={true}
			className=" c-section--slides fullsize-background"
		>
			<h2>Videos</h2>

			<SectionNav name="title" data={presentations} active={activeIndex} onClick={setActiveIndex} />

			<div className="c-section__body">
				{presentations.map((presentation: Presentation, index: number) => (
					<div key={index} className={`c-section__frame${activeIndex === index ? ' current' : ''}`}>
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
