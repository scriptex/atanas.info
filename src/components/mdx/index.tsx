import { FC, ReactNode, useMemo } from 'react';

import dynamic from 'next/dynamic';
import Link from 'next/link';

import { Lines, Section } from '@components';
import { Routes } from '@data/routes';

type Props = {
	additionalActions?: ReactNode;
	back: Routes;
	content: string;
	id: string;
	image?: string;
	slug: string;
	title: string;
};

const url = typeof window !== 'undefined' ? window.location.href : '';

export const MDX: FC<Readonly<Props>> = ({ additionalActions, back, content, id, image, slug, title }: Props) => {
	const DiscussionEmbed = dynamic(() => import('disqus-react').then(mod => mod.DiscussionEmbed), { ssr: false });

	const disqusConfig = useMemo(
		() => ({
			identifier: slug,
			title,
			url
		}),
		[slug, title]
	);

	return (
		<Section
			actions={
				<>
					<Link className="c-btn" href={back}>
						Go back
					</Link>

					{additionalActions}
				</>
			}
			hasButton
			id={id}
			title={title}
		>
			<Lines />

			{/* eslint-disable-next-line @next/next/no-img-element */}
			{!!image && <img alt="" loading="lazy" src={image} />}

			<div className="c-blog-post">
				<div className="c-blog-post__content" dangerouslySetInnerHTML={{ __html: content }} />

				<DiscussionEmbed config={disqusConfig} shortname="atanas-info" />
			</div>
		</Section>
	);
};

export default MDX;
