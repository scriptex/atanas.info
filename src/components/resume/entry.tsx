import * as React from 'react';

interface ResumeEntryProps {
	place: string;
	period: string;
}

export const ResumeEntry: React.FC<Readonly<ResumeEntryProps>> = ({ place, period }: ResumeEntryProps) => (
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
