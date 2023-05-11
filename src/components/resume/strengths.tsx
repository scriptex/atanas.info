import type { FC } from 'react';

import { ResumeStrengthItem, resumeStrengths } from '@data/resume';

export const ResumeStrengths: FC = () => (
	<div className="c-resume__block">
		<h2>Strengths</h2>

		<ul className="c-resume__strengths">
			{resumeStrengths.map((item: ResumeStrengthItem) => (
				<li key={item.index}>
					<h4>
						<i className={item.icon} />
						{item.title}
					</h4>

					<p>{item.content}</p>
				</li>
			))}
		</ul>
	</div>
);

export default ResumeStrengths;
