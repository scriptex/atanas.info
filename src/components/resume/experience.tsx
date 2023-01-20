import type { FC } from 'react';

import { ResumeEntry } from '@components';
import { resumeExperience, ResumeExperienceItem } from '@data/resume';

export const ResumeExperience: FC = () => (
	<div className="c-resume__block">
		<h2>Experience</h2>

		{resumeExperience.map((item: ResumeExperienceItem, i: number) => (
			<div className="c-resume__experience" key={i}>
				<h3>{item.position}</h3>

				<h4>{item.project}</h4>

				<ResumeEntry {...item.meta} />

				<ul>
					{item.details.map((detail, j) => (
						<li key={j}>{detail}</li>
					))}
				</ul>
			</div>
		))}
	</div>
);

export default ResumeExperience;
