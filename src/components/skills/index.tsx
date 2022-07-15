import * as React from 'react';

import { drawSkills } from '../../scripts/skills';
import { Skill, skills } from '../../data/skills-list';
import { isPrerendering } from '../../scripts/shared';
import { Icon, Lines, Button, Section } from '..';

export const SectionSkills: React.FC = () => {
	const [showTable, setShowTable] = React.useState(false);

	React.useEffect(() => {
		if (!isPrerendering) {
			drawSkills(skills);
		}
	}, []);

	return (
		<Section
			id="skills"
			title="Skills"
			actions={
				<Button onClick={() => setShowTable(!showTable)}>{showTable ? 'Interactive' : 'Static'} mode</Button>
			}
			hasButton={true}
			className=" bubbles"
			subtitle={showTable ? undefined : 'Drag the bubbles to play'}
		>
			<div className="c-section__container">
				<Lines />

				<div id="skills-graph" className={showTable ? 'is--hidden' : ''}></div>

				<div className={`o-grid${showTable ? '' : ' is--hidden'}`}>
					{skills.map((skill: Skill, index: number) => (
						<div key={index} className="o-grid__item xs-12 sm-6 md-4 lg-3">
							<div className="c-skill">
								<figure style={{ backgroundColor: skill.fill }}>
									<Icon
										fill={skill.iconFill}
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
			</div>
		</Section>
	);
};

export default SectionSkills;
