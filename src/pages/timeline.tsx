import type { FC } from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Animation, Icon, Layout, Section, Title } from '@components';
import { getFundingFromCMS, getPartnersFromCMS, getTimelineFromCMS, TimelineItem } from '@scripts/cms';
import type { TimelinePageData } from '@scripts/types';

import timeline from '@data/lotties/timeline.json';

export const Timeline: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ data, funding, partners }) => (
	<Layout funding={funding} partners={partners}>
		<Title text="Timeline" />

		<Section
			additionalElements={<Animation className="c-section__animation" data={timeline} height={32} width={367} />}
			hasButton
			id="timeline"
			title="Timeline"
		>
			<VerticalTimeline>
				{data.map((item: TimelineItem) => (
					<VerticalTimelineElement
						date={item.date}
						icon={<Icon className="vertical-timeline__icon" name={`svg-${item.icon}`} />}
						key={item.index}
					>
						<div
							className="vertical-timeline-element-title"
							dangerouslySetInnerHTML={{ __html: item.title }}
						/>

						<h4 className="vertical-timeline-element-subtitle">📍 {item.location}</h4>

						<div dangerouslySetInnerHTML={{ __html: item.content }} />
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</Section>
	</Layout>
);

export const getStaticProps: GetStaticProps<TimelinePageData> = async () => ({
	props: {
		data: await getTimelineFromCMS(),
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	},
	revalidate: 86400
});

export default Timeline;
