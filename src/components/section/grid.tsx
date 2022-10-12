import * as React from 'react';
import { Link } from 'react-router-dom';

import { SubPage } from '../../data/projects';
import { Loader, ExternalLink } from '..';

export interface Props {
	data: SubPage[];
	linkType?: 'external' | 'internal';
}

const getCommonProps = (index: number, img?: string) => {
	const image = img || `https://source.unsplash.com/random/${1280 + index}x${840 + index}/?code`;

	return {
		style: { backgroundImage: `url(${image})` },
		className: 'c-article-link fullsize-background'
	};
};

export const SectionGrid: React.FC<Readonly<Props>> = ({ data, linkType = 'internal' }: Props) => (
	<div className="c-section__grid o-grid">
		{data.map((item: SubPage, index: number) => (
			<div key={index} className="o-grid__item xs-12 sm-6 md-4 lg-4 xl-4">
				{linkType === 'external' ? (
					<ExternalLink href={item.url} {...getCommonProps(index, item.image)}>
						<strong>{item.text}</strong>
					</ExternalLink>
				) : (
					<Link to={item.url} {...getCommonProps(index, item.image)}>
						<strong>{item.text}</strong>
					</Link>
				)}

				<Loader />
			</div>
		))}
	</div>
);

export default SectionGrid;
