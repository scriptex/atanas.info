import type { FC } from 'react';

type Props = {
	period: string;
	place: string;
};

export const ResumeEntry: FC<Readonly<Props>> = ({ period, place }: Props) => (
	<ul className="c-resume__list">
		<li>
			<i className="icon-calendar"></i>
			{period}
		</li>

		<li>
			<i className="icon-location"></i>
			{place}
		</li>
	</ul>
);

export default ResumeEntry;
