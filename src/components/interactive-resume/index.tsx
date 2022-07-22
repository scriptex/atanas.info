import * as React from 'react';

import { Lines, Section } from '..';
import { interactiveResumeItems, InteractiveResumeItem } from '../../data/interactive-resume';

export const InteractiveResume: React.FC = () => (
	<Section id="interactive-resume" title="Interactive resume" hasButton={true}>
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
