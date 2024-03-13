import type { FC } from 'react';

import type { ResumeMore as IResumeMore } from '@scripts/cms';

type Props = {
	data: IResumeMore[];
};

export const ResumeMore: FC<Readonly<Props>> = ({ data }: Props) => (
	<div className="c-resume__block">
		<h2>More</h2>

		<ul className="c-resume__strengths">
			{data.map((item: IResumeMore) => (
				<li dangerouslySetInnerHTML={{ __html: item.content }} key={item.index} />
			))}
		</ul>
	</div>
);

export default ResumeMore;
