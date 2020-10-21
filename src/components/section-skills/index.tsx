import * as React from 'react';

import { drawSkills } from '../../scripts/skills';
import { Skill, skills } from '../../scripts/skills-list';
import { Button, Section } from '..';

export const SectionSkills: React.FunctionComponent = () => {
	const [showTable, setShowTable] = React.useState(false);

	React.useEffect(() => {
		drawSkills(skills);
	}, []);

	return (
		<Section
			id="skills"
			actions={
				<Button onClick={() => setShowTable(!showTable)}>{showTable ? 'Interactive' : 'Static'} mode</Button>
			}
			hasButton={true}
		>
			<h2>
				Skills <br />
				<small hidden={showTable}>(Drag the bubbles to play)</small>
			</h2>

			<div id="skills-graph" className={showTable ? 'is--hidden' : ''}></div>

			<div className={`o-grid${showTable ? '' : ' is--hidden'}`}>
				{skills.map((skill: Skill, index: number) => (
					<div key={index} className="o-grid__item o-grid__item--1of4">
						<div className="c-skill">
							<figure>
								<img
									src={`/images/svg/${skill.icon}.svg`}
									alt={`${skill.text} icon`}
									width={skill.width}
									height={skill.height}
									loading="lazy"
								/>
							</figure>

							<p>
								<strong>{skill.text}</strong>
								Since {skill.since}
							</p>
						</div>
					</div>
				))}
			</div>
		</Section>
	);
};

export default SectionSkills;
