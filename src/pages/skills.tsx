import Head from 'next/head';
import { FC, useState, useEffect } from 'react';

import { Skill, skills } from '@data/skills-list';
import { composeClassName } from '@scripts/shared';
import { Icon, Lines, Button, Section, Layout } from '@components';

export const Skills: FC = () => {
	const [showTable, setShowTable] = useState(false);

	useEffect(() => {
		import('@scripts/skills').then(({ drawSkills }) => drawSkills(skills));
	}, []);

	return (
		<Layout>
			<Head>
				<title>Skills | Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
			</Head>

			<Section
				id="skills"
				title="Skills"
				actions={
					<Button onClick={() => setShowTable(!showTable)}>
						{showTable ? 'Interactive' : 'Static'} mode
					</Button>
				}
				subtitle={showTable ? undefined : 'Drag the bubbles to play'}
				hasButton
				className="bubbles"
			>
				<div className={showTable ? 'c-section__wrapper' : 'c-section__container'}>
					<Lines />

					<div id="skills-graph" className={showTable ? 'is--hidden' : undefined}></div>

					<div className={composeClassName('o-grid', [], showTable ? [] : ['is--hidden'])}>
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
		</Layout>
	);
};

export default Skills;