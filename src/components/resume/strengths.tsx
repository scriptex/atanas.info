import type { FC } from 'react';

import type { Strength } from '@scripts/cms';

type Props = {
	data: Strength[];
};

export const ResumeStrengths: FC<Readonly<Props>> = ({ data }: Props) => (
	<div className="c-resume__block">
		<h2>Strengths</h2>

		<ul className="c-resume__strengths">
			{data.map((item: Strength) => (
				<li key={item.index}>
					<h4>
						<i className={`icon-${item.icon}`} />
						{item.title}
					</h4>

					<p>{item.content}</p>
				</li>
			))}
		</ul>
	</div>
);

export default ResumeStrengths;
