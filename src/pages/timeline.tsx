import type { FC } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import timeline from '@data/lotties/timeline.json';
import { TimelineItem, getTimelineFromCMS } from '@scripts/cms';
import { Layout, Section, Animation, Title, Icon } from '@components';

export const Timeline: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ data }) => (
	<Layout>
		<Title text="Timeline | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

		<Section
			id="timeline"
			title="Timeline"
			hasButton
			additionalElements={<Animation data={timeline} width={367} height={32} className="c-section__animation" />}
		>
			<VerticalTimeline>
				{data.map((item: TimelineItem) => (
					<VerticalTimelineElement
						key={item.index}
						date={item.date}
						icon={<Icon name={`svg-${item.icon}`} className="vertical-timeline__icon" />}
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

export const getStaticProps: GetStaticProps<{ data: TimelineItem[] }> = async () => ({
	props: {
		data: await getTimelineFromCMS()
	}
});

export default Timeline;
