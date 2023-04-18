import Link from 'next/link';
import Script from 'next/script';
import type { FC } from 'react';

import { Routes } from '@data/routes';
import { Lines, Section } from '@components';

type Props = {
	id: string;
	back: Routes;
	title: string;
	image?: string;
	content: string;
};

export const MDX: FC<Readonly<Props>> = ({ id, back, title, image, content }: Props) => (
	<Section
		id={id}
		title={title}
		actions={
			<Link href={back} className="c-btn">
				Go back
			</Link>
		}
		hasButton
	>
		<Script src="https://atanas-info.disqus.com/embed.js" async defer />
		<Lines />

		{/* eslint-disable-next-line @next/next/no-img-element */}
		{!!image && <img src={image} alt="" loading="lazy" />}
		<div className="c-blog-post">
			<div className="c-blog-post__content" dangerouslySetInnerHTML={{ __html: content }} />

			<div id="disqus_thread" />
		</div>
	</Section>
);

export default MDX;
