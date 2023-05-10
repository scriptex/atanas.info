import type { FC } from 'react';

import { resumeMore } from '@data/resume';

export const ResumeMore: FC = () => (
	<div className="c-resume__block">
		<h2>More</h2>

		<ul className="c-resume__strengths">
			{resumeMore.map((item: string) => (
				<p key={item}>{item}</p>
			))}
		</ul>
	</div>
);

export default ResumeMore;
