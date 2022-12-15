import * as React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '../../data/routes';
import { useScript } from '../../scripts/shared';
import { Lines, Section } from '..';

interface Props {
	id: string;
	back: Routes;
	title: string;
	image: string;
	content: string;
}

export const MDX: React.FC<Readonly<Props>> = ({ id, back, title, image, content }: Props) => {
	useScript('https://atanas-info.disqus.com/embed.js', (script: HTMLScriptElement) => {
		script.setAttribute('data-timestamp', (+new Date()).toString());
	});

	return (
		<Section
			id={id}
			title={title}
			actions={
				<Link to={back} className="c-btn">
					Go back
				</Link>
			}
			hasButton
		>
			<Lines />

			<img src={image} alt="" loading="lazy" />

			<div className="c-blog-post">
				<div className="c-blog-post__content" dangerouslySetInnerHTML={{ __html: content }} />

				<div id="disqus_thread" />
			</div>
		</Section>
	);
};

export default MDX;
