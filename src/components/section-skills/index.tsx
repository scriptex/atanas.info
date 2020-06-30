import * as React from 'react';

import { skills } from '../../scripts/skills-list';
import { Section } from '..';
import { drawSkills } from '../../scripts/skills';

export const SectionSkills: React.FunctionComponent = () => {
	React.useEffect(() => {
		drawSkills(skills);
	}, []);

	return (
		<Section id="skills" hasButton={true}>
			<h2>
				Skills <br />
				<small>(Drag the bubbles to play)</small>
			</h2>

			<div id="skills-graph"></div>
		</Section>
	);
};

export default SectionSkills;
