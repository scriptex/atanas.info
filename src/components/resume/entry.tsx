import type { FC } from 'react';

type Props = {
	place: string;
	period: string;
};

export const ResumeEntry: FC<Readonly<Props>> = ({ place, period }: Props) => (
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
