import * as React from 'react';
import { Link } from 'react-router-dom';

import { SubPage } from '../../data/projects';
import { Icon, Loader, ExternalLink, SectionGridItem } from '..';

export interface Props {
	data: SubPage[];
	linkType?: 'external' | 'internal';
}

export const SectionGrid: React.FC<Readonly<Props>> = ({ data, linkType = 'internal' }: Props) => {
	const isExternal = linkType === 'external';
	const getCommonProps = (img?: string) => ({
		className: 'c-article-link fullsize-background',
		...(img ? { style: { backgroundImage: `url(${img})` } } : {})
	});

	return (
		<div className="c-section__grid o-grid">
			{data.map((item: SubPage, index: number) => (
				<div key={index} className="o-grid__item xs-12 sm-6 md-4 lg-4 xl-4">
					<SectionGridItem isExternal={isExternal}>
						{isExternal ? (
							<ExternalLink href={item.url} {...getCommonProps(item.image)}>
								{item.image ? null : <Icon name="svg-logo" className="c-svg-logo" />}

								<strong>{item.text}</strong>
							</ExternalLink>
						) : (
							<Link to={item.url} {...getCommonProps(item.image)}>
								<strong>{item.text}</strong>
							</Link>
						)}

						<Loader />
					</SectionGridItem>
				</div>
			))}
		</div>
	);
};

export default SectionGrid;
