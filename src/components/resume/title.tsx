import type { FC } from 'react';

import Image from 'next/image';

import type { ResumeLink } from '@scripts/cms';

type Props = {
	alt: string;
	data: ResumeLink[];
	image: string;
	name: string;
	title: string;
};

export const ResumeTitle: FC<Readonly<Props>> = ({ alt, data, image, name, title }: Props) => (
	<div className="c-resume__title">
		{image && <Image alt={alt} height={240} loading="lazy" src={image} width={240} />}

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
