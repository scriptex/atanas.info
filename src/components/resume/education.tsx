import type { FC } from 'react';

import { ResumeEntry } from '@components';

export const ResumeEducation: FC = () => (
	<div className="c-resume__block">
		<div className="o-grid">
			<div className="o-grid__item xs-12 sm-6">
				<h2>Education</h2>

				<p>
					<strong>Master in Marketing</strong>
				</p>

				<ResumeEntry place="University of Economics Varna" period="2003 - 2009" />
			</div>

			<div className="o-grid__item xs-12 sm-6">
				<h2>Certificates</h2>

				<ul>
					<li>HTML Certification, 2021</li>

					<li>CSS Certification, 2021</li>

					<li>Javascript Certification, 2020</li>

					<li>React Development Certification, 2020</li>

					<li>Deno Certification, 2020</li>

					<li>Python Certification, 2020</li>
				</ul>
			</div>
		</div>
	</div>
);

export default ResumeEducation;
