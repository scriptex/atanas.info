import type { FC } from 'react';

import { resumeSkills } from '@data/resume';

export const ResumeSkills: FC = () => (
	<div className="c-resume__block">
		<h2>INDUSTRY SKILLS</h2>

		{resumeSkills.map((skills: string[], i: number) => (
			<ul className="c-resume__skills" key={i}>
				{skills.map((skill: string, j: number) => (
					<li key={j}>{skill}</li>
				))}
			</ul>
		))}
	</div>
);

export default ResumeSkills;
