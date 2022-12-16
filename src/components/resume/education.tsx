import * as React from 'react';

import { ResumeEntry } from '@components';

export const ResumeEducation: React.FC = () => (
	<div className="c-resume__block">
		<h2>Education</h2>

		<p>
			<strong>Master in Marketing</strong>
		</p>

		<ResumeEntry place="University of Economics Varna" period="2003 - 2009" />
	</div>
);

export default ResumeEducation;
