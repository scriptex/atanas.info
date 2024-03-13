import type { ReactNode } from 'react';

import Link from 'next/link';

import { ExternalLink, Loader, SectionNav } from '@components';
import { SubPage } from '@data/projects';
import { Routes } from '@data/routes';
import { usePagination } from '@scripts/shared';

type SectionGridProps = {
	data: SubPage[];
	linkType?: 'external' | 'internal';
	pagination?: boolean;
};

type PaginationProps = {
	page: number;
	route: Routes;
};

type Props<T extends boolean> = T extends true ? SectionGridProps & PaginationProps : SectionGridProps;

const getCommonProps = (img: string) => ({
	className: 'c-article-link fullsize-background',
	style: { backgroundImage: `url(${img})` }
});

export const SectionGrid = <T extends boolean = false>({
	data,
	linkType = 'internal',
	pagination = false,
	...rest
}: Props<T>): ReactNode => {
	const { items, menu } = usePagination(data, 9);
	const { page, route } = rest as unknown as PaginationProps;

	return pagination && (!items || items.length === 0) ? null : (
		<>
			<div className="c-section__grid o-grid">
				{(!pagination ? data : items![page - 1]).map((item: SubPage) => (
					<div className="o-grid__item xs-12 sm-6 md-4 lg-4 xl-4" key={item.index}>
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

			{pagination ? <SectionNav active={page} data={menu ?? []} name="title" route={route} small /> : null}
		</>
	);
};

export default SectionGrid;
