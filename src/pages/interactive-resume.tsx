import { FC, useEffect } from 'react';

import resume from '@data/lotties/resume.json';
import { Lines, Layout, Section, Animation } from '@components';
import { interactiveResumeItems, InteractiveResumeItem } from '@data/interactive-resume';

export const InteractiveResume: FC = () => {
	useEffect(() => {
		import('@codersrank/summary/codersrank-summary.min');
		import('@codersrank/activity/codersrank-activity.min');
		import('@codersrank/timeline/codersrank-timeline.min');
		import('@codersrank/education/codersrank-education.min');
		import('@codersrank/portfolio/codersrank-portfolio.min');
		import('@codersrank/skills-chart/codersrank-skills-chart.min');
		import('@codersrank/work-experience/codersrank-work-experience.min');
	}, []);

	return (
		<Layout>
			<Section
				id="interactive-resume"
				title="Interactive resume"
				hasButton
				additionalElements={
					<Animation data={resume} width={150} height={150} className="c-section__animation" />
				}
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
		</Layout>
	);
};

export default InteractiveResume;
