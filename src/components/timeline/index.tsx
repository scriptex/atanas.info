import * as React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import timeline from '@data/lotties/timeline.json';
import { Section, Animation } from '@components';
import { TimelineItem, timelineItems } from '@data/timeline';

export const Timeline: React.FC = () => (
	<Section
		id="timeline"
		title="Timeline"
		hasButton
		additionalElements={<Animation data={timeline} width={367} height={32} className="c-section__animation" />}
	>
		<VerticalTimeline>
			{timelineItems.map((item: TimelineItem, i: number) => (
				<VerticalTimelineElement key={i} date={item.date} icon={item.icon}>
					<h3 className="vertical-timeline-element-title">{item.title}</h3>
					<h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
					<p>{item.content}</p>
				</VerticalTimelineElement>
			))}
		</VerticalTimeline>
	</Section>
);

export default Timeline;
