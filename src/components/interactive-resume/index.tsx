import * as React from 'react';

import resume from '@data/lotties/resume.json';
import { Lines, Section, Animation } from '@components';
import { interactiveResumeItems, InteractiveResumeItem } from '@data/interactive-resume';

export const InteractiveResume: React.FC = () => (
	<Section
		id="interactive-resume"
		title="Interactive resume"
		hasButton
		additionalElements={<Animation data={resume} width={150} height={150} className="c-section__animation" />}
	>
		<Lines />

		<div className="c-interactive-resume">
			{interactiveResumeItems.map((item: InteractiveResumeItem, i: number) => (
				<div key={i} className="c-interactive-resume__widget">
					<h3>{item.title}</h3>

					{item.element}
				</div>
			))}
		</div>
	</Section>
);

export default InteractiveResume;
