import { FC, useEffect, useState } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Button, Icon, Layout, Lines, Section, Title } from '@components';
import { ForceNode, skills } from '@data/skills-list';
import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import { composeClassName } from '@scripts/shared';
import type { SkillsPageData } from '@scripts/types';

export const Skills: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ funding, partners }) => {
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
		<Layout funding={funding} partners={partners}>
			<Title text="Skills" />

			<Section
				actions={
					<Button onClick={() => setShowTable(!showTable)} type="button">
						{showTable ? 'Interactive' : 'Static'} mode
					</Button>
				}
				className="bubbles"
				hasButton
				id="skills"
				subtitle={showTable ? undefined : 'Drag the bubbles to play'}
				title="Skills"
			>
				<div className={showTable ? 'c-section__wrapper' : 'c-section__container'}>
					<Lines />

					<div className={showTable ? 'is--hidden' : undefined} id="skills-graph"></div>

					<div className={composeClassName('o-grid', [], showTable ? [] : ['is--hidden'])}>
						{skills.map((skill: ForceNode) => (
							<div className="o-grid__item xs-12 sm-6 md-4 lg-3" key={skill.text}>
								<div className="c-skill">
									<figure style={{ backgroundColor: skill.fill }}>
										<Icon
											className="c-skill__icon"
											fill={skill.iconFill}
											height={skill.height}
											name={`svg-${skill.icon}`}
											width={skill.width}
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
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	}
});

export default Skills;
