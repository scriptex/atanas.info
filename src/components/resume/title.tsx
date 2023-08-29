import Image from 'next/image';
import type { FC } from 'react';

import type { ResumeLink } from '@scripts/cms';

type Props = {
	alt: string;
	data: ResumeLink[];
	name: string;
	title: string;
	image: string;
};

export const ResumeTitle: FC<Readonly<Props>> = ({ alt, data, name, title, image }: Props) => (
	<div className="c-resume__title">
		{image && <Image src={image} alt={alt} width={240} height={240} loading="lazy" />}

		<h1>{name}</h1>

		<h3>{title}</h3>

		<ul className="c-resume__list">
			{data.map((item: ResumeLink) => (
				<li key={item.index}>
					<i className={`icon-${item.icon}`} />
					{item.text}
				</li>
			))}
		</ul>
	</div>
);

export default ResumeTitle;
