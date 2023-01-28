import Link from 'next/link';
import type { FC } from 'react';

import { SubPage } from '@data/projects';
import { Loader, ExternalLink } from '@components';

export type Props = {
	data: SubPage[];
	linkType?: 'external' | 'internal';
};

const getCommonProps = (img: string) => ({
	style: { backgroundImage: `url(${img})` },
	className: 'c-article-link fullsize-background'
});

export const SectionGrid: FC<Readonly<Props>> = ({ data, linkType = 'internal' }: Props) => (
	<div className="c-section__grid o-grid">
		{data.map((item: SubPage, index: number) => (
			<div key={index} className="o-grid__item xs-12 sm-6 md-4 lg-4 xl-4">
				{linkType === 'external' ? (
					<ExternalLink href={item.url} {...getCommonProps(item.image)}>
						<strong>{item.text}</strong>
					</ExternalLink>
				) : (
					<Link href={item.url} {...getCommonProps(item.image)}>
						<strong>{item.text}</strong>
					</Link>
				)}

				<Loader />
			</div>
		))}
	</div>
);

export default SectionGrid;
