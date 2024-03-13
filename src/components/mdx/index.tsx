import type { FC } from 'react';

import Link from 'next/link';
import Script from 'next/script';

import { Lines, Section } from '@components';
import { Routes } from '@data/routes';

type Props = {
	back: Routes;
	content: string;
	id: string;
	image?: string;
	title: string;
};

export const MDX: FC<Readonly<Props>> = ({ back, content, id, image, title }: Props) => (
	<Section
		actions={
			<Link className="c-btn" href={back}>
				Go back
			</Link>
		}
		hasButton
		id={id}
		title={title}
	>
		<Script async defer src="https://atanas-info.disqus.com/embed.js" />

		<Lines />

		{/* eslint-disable-next-line @next/next/no-img-element */}
		{!!image && <img alt="" loading="lazy" src={image} />}

		<div className="c-blog-post">
			<div className="c-blog-post__content" dangerouslySetInnerHTML={{ __html: content }} />

			<div id="disqus_thread" />
		</div>
	</Section>
);

export default MDX;
