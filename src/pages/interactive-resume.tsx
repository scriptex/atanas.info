import { FC, useEffect } from 'react';

import resume from '@data/lotties/resume.json';
import { useNetworkState } from '@scripts/shared';
import { interactiveResumeItems, InteractiveResumeItem } from '@data/interactive-resume';
import { Icon, Lines, Layout, Section, Animation, Title } from '@components';

export const InteractiveResume: FC = () => {
	const online = useNetworkState();

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
			<Title text="Interactive Resume | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

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
					{interactiveResumeItems.map((item: InteractiveResumeItem) => (
						<div key={item.title} className="c-interactive-resume__widget">
							<h3>{item.title}</h3>

							{online ? item.element : <Icon name="svg-disconnected " className="svg-disconnected" />}
						</div>
					))}
				</div>
			</Section>
		</Layout>
	);
};

export default InteractiveResume;
