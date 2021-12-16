/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react';
// @ts-ignore
import '@codersrank/activity/codersrank-activity.min';
// @ts-ignore
import '@codersrank/education/codersrank-education.min';
// @ts-ignore
import '@codersrank/portfolio/codersrank-portfolio.min';
// @ts-ignore
import '@codersrank/skills-chart/codersrank-skills-chart.min';
// @ts-ignore
import '@codersrank/summary/codersrank-summary.min';
// @ts-ignore
import '@codersrank/work-experience/codersrank-work-experience.min';
// @ts-ignore
import '@codersrank/timeline/codersrank-timeline.min';

import { Section } from '~/src/components';

export const InteractiveResume: React.FC = () => (
	<Section id="interactive-resume" hasButton={true}>
		<div className="c-resume">
			<h2>Interactive resume</h2>

			<div className="c-resume__widget">
				<h3>Activity</h3>

				<codersrank-activity labels legend tooltip branding="false" username="scriptex" />
			</div>

			<div className="c-resume__widget">
				<h3>Education</h3>

				<codersrank-education
					grid
					branding="false"
					username="scriptex"
					education-section-title="Schools"
					certificates-section-title="Certificates"
				/>
			</div>

			<div className="c-resume__widget">
				<h3>Portfolio</h3>

				<codersrank-portfolio grid branding="false" username="scriptex" />
			</div>

			<div className="c-resume__widget">
				<h3>Skills</h3>

				<codersrank-skills-chart labels legend tooltip branding="false" username="scriptex" />
			</div>

			<div className="c-resume__widget">
				<h3>Summary</h3>

				<codersrank-summary username="scriptex" />
			</div>

			<div className="c-resume__widget">
				<h3>Work</h3>

				<codersrank-work-experience grid logos branding="false" username="scriptex" />
			</div>

			<div className="c-resume__widget">
				<h3>Work Experience Timeline</h3>

				<codersrank-timeline type="workexperience" branding="false" username="scriptex" />
			</div>

			<div className="c-resume__widget">
				<h3>Portfolio Timeline</h3>

				<codersrank-timeline type="portfolio" branding="false" username="scriptex" />
			</div>

			<div className="c-resume__widget">
				<h3>Technologies Timeline</h3>

				<codersrank-timeline type="technologies" branding="false" username="scriptex" />
			</div>
		</div>
	</Section>
);

export default InteractiveResume;
