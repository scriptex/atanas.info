import Link from 'next/link';
import type { FC } from 'react';

import { SubPage } from '@data/projects';
import { usePagination } from '@scripts/shared';
import { Loader, SectionNav, ExternalLink } from '@components';

export type Props = {
	data: SubPage[];
	linkType?: 'external' | 'internal';
	pagination?: boolean;
};

const getCommonProps = (img: string) => ({
	style: { backgroundImage: `url(${img})` },
	className: 'c-article-link fullsize-background'
});

export const SectionGrid: FC<Readonly<Props>> = ({ data, linkType = 'internal', pagination = false }: Props) => {
	const { menu, items, current, setCurrent } = usePagination(data, 9);

	return pagination && (!items || items.length === 0) ? null : (
		<>
			<div className="c-section__grid o-grid">
				{(!pagination ? data : items![current]).map((item: SubPage, index: number) => (
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

			{pagination ? (
				<SectionNav data={menu || []} name="title" small active={current} onClick={setCurrent} />
			) : null}
		</>
	);
};

export default SectionGrid;
