import * as React from 'react';

import { Section, Button } from '..';
import { presentations, Presentation } from '../../assets/scripts/presentations';

export const SectionVideos: React.FunctionComponent = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	return (
		<Section id="videos" hasButton={true} className=" c-section--slides">
			<h2>Videos</h2>

			<nav className="c-section__nav">
				<ul>
					{presentations.map((presentation: Presentation, index: number) => (
						<li key={index} className={activeIndex === index ? 'current' : ''}>
							<Button type="button" onClick={() => setActiveIndex(index)}>
								{presentation.title}
							</Button>
						</li>
					))}
				</ul>
			</nav>

			<div className="c-section__body">
				{presentations.map((presentation: Presentation, index: number) => (
					<div key={index} className={`c-section__frame${activeIndex === index ? ' current' : ''}`}>
						<iframe src={`${presentation.url}`} title={presentation.description} allowFullScreen={true} />
					</div>
				))}
			</div>
		</Section>
	);
};

export default SectionVideos;
