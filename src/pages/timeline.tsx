import Head from 'next/head';
import type { FC } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import timeline from '@data/lotties/timeline.json';
import { Layout, Section, Animation } from '@components';
import { TimelineItem, timelineItems } from '@data/timeline';

export const Timeline: FC = () => (
	<Layout>
		<Head>
			<title>Timeline | Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
		</Head>

		<Section
			id="timeline"
			title="Timeline"
			hasButton
			additionalElements={<Animation data={timeline} width={367} height={32} className="c-section__animation" />}
		>
			<VerticalTimeline>
				{timelineItems.map((item: TimelineItem) => (
					<VerticalTimelineElement key={`${item.date}-${item.location}`} date={item.date} icon={item.icon}>
						<h3 className="vertical-timeline-element-title">{item.title}</h3>
						<h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
						<p>{item.content}</p>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</Section>
	</Layout>
);

export default Timeline;
