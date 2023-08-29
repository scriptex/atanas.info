import format from 'date-fns/format';
import { FC, Fragment } from 'react';

import { ResumeEntry } from '@components';
import type { Certificate, Education } from '@scripts/cms';

type Props = {
	education: Education[];
	certificates: Certificate[];
};

export const ResumeEducation: FC<Readonly<Props>> = ({ education, certificates }: Props) => (
	<div className="c-resume__block">
		<div className="o-grid">
			<div className="o-grid__item xs-12 sm-6">
				<h2>Education</h2>

				{education.map(item => (
					<Fragment key={item.index}>
						<p>
							<strong>{item.degree}</strong>
						</p>

						<ResumeEntry place={item.school} period={item.period} />
					</Fragment>
				))}
			</div>

			<div className="o-grid__item xs-12 sm-6">
				<h2>Certificates</h2>

				<ul>
					{certificates.map(item => (
						<li key={item.index}>
							{item.title} Certification, {format(new Date(item.date), 'dd MMM yyyy')}
						</li>
					))}
				</ul>
			</div>
		</div>
	</div>
);

export default ResumeEducation;
