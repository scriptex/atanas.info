import type { FC } from 'react';

import { ResumeEntry } from '@components';

import type { Experience } from '@scripts/cms';

type Props = {
	data: Experience[];
};

export const ResumeExperience: FC<Readonly<Props>> = ({ data }: Props) => (
	<div className="c-resume__block">
		<h2>Experience</h2>

		{data.map((item: Experience) => (
			<div className="c-resume__experience" key={item.index}>
				<h3>{item.title}</h3>

				<div className="c-resume__experience-title" dangerouslySetInnerHTML={{ __html: item.project }} />

				<ResumeEntry period={item.period} place={item.location} />

				<div className="c-resume__experience-details" dangerouslySetInnerHTML={{ __html: item.details }} />
			</div>
		))}
	</div>
);

export default ResumeExperience;
