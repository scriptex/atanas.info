import Image from 'next/image';
import type { FC } from 'react';

import { resumeLinks, ResumeLinkItem } from '@data/resume';

export const ResumeTitle: FC = () => (
	<div className="c-resume__title">
		<Image
			src="/images/temp/atanas.jpg"
			alt="Atanas Atanasov's profile picture"
			width={240}
			height={240}
			loading="lazy"
		/>

		<h1>Atanas Atanasov</h1>

		<h3>Frontend Team Lead</h3>

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
