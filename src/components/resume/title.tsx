import * as React from 'react';

import { resumeLinks, ResumeLinkItem } from '../../data/resume';

export const ResumeTitle: React.FC = () => (
	<div className="c-resume__title">
		<img src="images/temp/atanas.jpg" alt="Atanas Atanasov's profile picture" />

		<h1>Atanas Atanasov</h1>

		<h3>Senior Front-End Engineer</h3>

		<ul className="c-resume__list">
			{resumeLinks.map((item: ResumeLinkItem, i: number) => (
				<li key={i}>
					<i className={item.icon} />
					{item.text}
				</li>
			))}
		</ul>
	</div>
);

export default ResumeTitle;