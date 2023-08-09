import { FC, useState, useEffect } from 'react';

import { composeClassName } from '@scripts/shared';
import { ForceNode, skills } from '@data/skills-list';
import { Icon, Lines, Button, Section, Layout, Title } from '@components';

export const Skills: FC = () => {
	const [showTable, setShowTable] = useState(false);

	useEffect(() => {
		import('@scripts/force')
			.then(({ renderForceDirectedGraph }) => renderForceDirectedGraph('skills-graph', skills, 'skills'))
			.catch(console.error);
	}, []);

	return (
		<Layout>
			<Title text="Skills | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

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
						{skills.map((skill: ForceNode) => (
							<div key={skill.text} className="o-grid__item xs-12 sm-6 md-4 lg-3">
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
