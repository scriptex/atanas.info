import type { FC } from 'react';

import { resumeSkills } from '@data/resume';

export const ResumeSkills: FC = () => (
	<div className="c-resume__block">
		<h2>INDUSTRY SKILLS</h2>

		{resumeSkills.map((skills: string[]) => (
			<ul className="c-resume__skills" key={skills.join('')}>
				{skills.map((skill: string) => (
					<li key={skill}>{skill}</li>
				))}
			</ul>
		))}
	</div>
);

export default ResumeSkills;
