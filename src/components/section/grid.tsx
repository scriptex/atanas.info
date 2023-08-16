import Link from 'next/link';

import { Routes } from '@data/routes';
import { SubPage } from '@data/projects';
import { usePagination } from '@scripts/shared';
import { Loader, SectionNav, ExternalLink } from '@components';

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
	style: { backgroundImage: `url(${img})` },
	className: 'c-article-link fullsize-background'
});

export const SectionGrid = <T extends boolean = false>({
	data,
	linkType = 'internal',
	pagination = false,
	...rest
}: Props<T>) => {
	const { menu, items } = usePagination(data, 9);
	const { page, route } = rest as unknown as PaginationProps;

	return pagination && (!items || items.length === 0) ? null : (
		<>
			<div className="c-section__grid o-grid">
				{(!pagination ? data : items![page - 1]).map((item: SubPage) => (
					<div key={item.index} className="o-grid__item xs-12 sm-6 md-4 lg-4 xl-4">
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

			{pagination ? <SectionNav data={menu ?? []} name="title" small active={page} route={route} /> : null}
		</>
	);
};

export default SectionGrid;
