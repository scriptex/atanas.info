import * as React from 'react';

import { drawSkills } from '../../scripts/skills';
import { Skill, skills } from '../../scripts/skills-list';
import { Icon, Button, Section } from '..';

export const SectionSkills: React.FunctionComponent = () => {
	const [showTable, setShowTable] = React.useState(false);

	React.useEffect(() => {
		drawSkills(skills);
	}, []);

	return (
		<Section
			id="skills"
			style={{ backgroundImage: 'url(images/temp/desktop.jpg)' }}
			actions={
				<Button onClick={() => setShowTable(!showTable)}>{showTable ? 'Interactive' : 'Static'} mode</Button>
			}
			hasButton={true}
			className=" fullsize-background"
		>
			<h2>
				Skills <br />
				<small hidden={showTable}>(Drag the bubbles to play)</small>
			</h2>

			<div id="skills-graph" className={showTable ? 'is--hidden' : ''}></div>

			<div className={`o-grid${showTable ? '' : ' is--hidden'}`}>
				{skills.map((skill: Skill, index: number) => (
					<div key={index} className="o-grid__item xs-12 sm-6 md-4 lg-3">
						<div className="c-skill">
							<figure style={{ backgroundColor: skill.fill }}>
								<Icon
									name={`svg-${skill.icon}`}
									width={skill.width}
									height={skill.height}
									className="c-skill__icon"
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
