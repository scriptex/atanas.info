import * as React from 'react';
import 'lite-youtube-embed';

import videoCamera from '../../data/lotties/video-camera.json';
import { presentations, Presentation } from '../../data/presentations';
import { Lines, Loader, Section, Animation, SectionNav } from '..';

export const Videos: React.FC = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	return (
		<Section
			id="videos"
			title="Videos"
			hasButton={true}
			className=" c-section--slides"
			additionalElements={
				<Animation data={videoCamera} width={150} height={150} className="c-section__animation" />
			}
		>
			<Lines />

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

export default Videos;
