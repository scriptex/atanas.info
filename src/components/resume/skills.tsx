import type { FC } from 'react';

import type { ResumeSkills as IResumeSkills } from '@scripts/cms';

type Props = {
	data: IResumeSkills[];
};

export const ResumeSkills: FC<Readonly<Props>> = ({ data }) => (
	<div className="c-resume__block">
		<h2>Industry Skills</h2>

		{data.map((item: IResumeSkills) => (
			<ul className="c-resume__skills" key={item.index}>
				{item.content.map((skill: string) => (
					<li key={skill}>{skill}</li>
				))}
			</ul>
		))}
	</div>
);

export default ResumeSkills;
