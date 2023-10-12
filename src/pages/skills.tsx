import { FC, useState, useEffect } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { composeClassName } from '@scripts/shared';
import { ForceNode, skills } from '@data/skills-list';
import { getPartnersFromCMS } from '@scripts/cms';
import type { SkillsPageData } from '@scripts/types';
import { Icon, Lines, Button, Section, Layout, Title } from '@components';

export const Skills: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ partners }) => {
	const [showTable, setShowTable] = useState(false);

	useEffect(() => {
		import('@scripts/force')
			.then(({ renderForceDirectedGraph }) => renderForceDirectedGraph('skills-graph', skills, 'skills'))
			.catch(console.error);

		return () => {
			const graph = document.getElementById('skills-graph');

			if (graph) {
				graph.innerHTML = '';
			}
		};
	}, []);

	return (
		<Layout partners={partners}>
			<Title text="Skills | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

			<Section
				id="skills"
				title="Skills"
				actions={
					<Button type="button" onClick={() => setShowTable(!showTable)}>
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

export const getStaticProps: GetStaticProps<SkillsPageData> = async () => ({
	props: {
		partners: await getPartnersFromCMS()
	}
});

export default Skills;
