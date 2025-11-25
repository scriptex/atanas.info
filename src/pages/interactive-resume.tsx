import type { FC } from 'react';
import { useEffect } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Animation, Icon, Layout, Lines, Section, Title } from '@components';

import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import { useNetworkState } from '@scripts/shared';
import type { InteractiveResumePageProps } from '@scripts/types';

import resume from '@data/lotties/resume.json';

const items = [
	{
		element: <codersrank-activity branding="false" labels legend tooltip username="scriptex" />,
		index: 0,
		title: 'Activity'
	},
	{
		element: (
			<codersrank-education
				branding="false"
				certificates-section-title="Certificates"
				education-section-title="Schools"
				grid
				username="scriptex"
			/>
		),
		index: 1,
		title: 'Education'
	},
	{
		element: <codersrank-portfolio branding="false" grid username="scriptex" />,
		index: 2,
		title: 'Portfolio'
	},
	{
		element: <codersrank-skills-chart branding="false" labels legend tooltip username="scriptex" />,
		index: 3,
		title: 'Skills'
	},
	{
		element: <codersrank-summary username="scriptex" />,
		index: 4,
		title: 'Summary'
	},
	{
		element: <codersrank-work-experience branding="false" grid logos username="scriptex" />,
		index: 5,
		title: 'Work'
	},
	{
		element: <codersrank-timeline branding="false" type="workexperience" username="scriptex" />,
		index: 6,
		title: 'Work Experience Timeline'
	},
	{
		element: <codersrank-timeline branding="false" type="portfolio" username="scriptex" />,
		index: 7,
		title: 'Portfolio Timeline'
	},
	{
		element: <codersrank-timeline branding="false" type="technologies" username="scriptex" />,
		index: 8,
		title: 'Technologies Timeline'
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
				additionalElements={
					<Animation className="c-section__animation" data={resume} height={150} width={150} />
				}
				hasButton
				id="interactive-resume"
				title="Interactive resume"
			>
				<Lines />

				<div className="c-interactive-resume">
					{items.map(item => (
						<div className="c-interactive-resume__widget" key={item.index}>
							<h3>{item.title}</h3>

							{online ? item.element : <Icon className="svg-disconnected" name="svg-disconnected " />}
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
	},
	revalidate: 86400
});

export default InteractiveResume;
