import { FC, useEffect } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import resume from '@data/lotties/resume.json';
import { useNetworkState } from '@scripts/shared';
import type { InteractiveResumePageProps } from '@scripts/types';
import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import { Icon, Lines, Layout, Section, Animation, Title } from '@components';

const items = [
	{
		index: 0,
		title: 'Activity',
		element: <codersrank-activity labels legend tooltip branding="false" username="scriptex" />
	},
	{
		index: 1,
		title: 'Education',
		element: (
			<codersrank-education
				grid
				branding="false"
				username="scriptex"
				education-section-title="Schools"
				certificates-section-title="Certificates"
			/>
		)
	},
	{
		index: 2,
		title: 'Portfolio',
		element: <codersrank-portfolio grid branding="false" username="scriptex" />
	},
	{
		index: 3,
		title: 'Skills',
		element: <codersrank-skills-chart labels legend tooltip branding="false" username="scriptex" />
	},
	{
		index: 4,
		title: 'Summary',
		element: <codersrank-summary username="scriptex" />
	},
	{
		index: 5,
		title: 'Work',
		element: <codersrank-work-experience grid logos branding="false" username="scriptex" />
	},
	{
		index: 6,
		title: 'Work Experience Timeline',
		element: <codersrank-timeline type="workexperience" branding="false" username="scriptex" />
	},
	{
		index: 7,
		title: 'Portfolio Timeline',
		element: <codersrank-timeline type="portfolio" branding="false" username="scriptex" />
	},
	{
		index: 8,
		title: 'Technologies Timeline',
		element: <codersrank-timeline type="technologies" branding="false" username="scriptex" />
	}
];

export const InteractiveResume: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ funding, partners }) => {
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
		<Layout funding={funding} partners={partners}>
			<Title text="Interactive Resume" />

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
					{items.map(item => (
						<div key={item.index} className="c-interactive-resume__widget">
							<h3>{item.title}</h3>

							{online ? item.element : <Icon name="svg-disconnected " className="svg-disconnected" />}
						</div>
					))}
				</div>
			</Section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<InteractiveResumePageProps> = async () => ({
	props: {
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	}
});

export default InteractiveResume;
