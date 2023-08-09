import type { FC } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import timeline from '@data/lotties/timeline.json';
import { TimelineItem, timelineItems } from '@data/timeline';
import { Layout, Section, Animation, Title } from '@components';

export const Timeline: FC = () => (
	<Layout>
		<Title text="Timeline | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

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
