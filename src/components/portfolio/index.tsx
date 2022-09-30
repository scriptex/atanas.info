import * as React from 'react';
import { Link } from 'react-router-dom';

import portfolio from '../../data/lotties/portfolio.json';
import { SubPage, portfolioItems } from '../../data/projects';
import { Loader, Section, Animation } from '..';

export const portfolioSectionProps = {
	id: 'portfolio',
	title: 'Portfolio',
	hasButton: true,
	additionalElements: <Animation data={portfolio} width={200} height={150} className="c-section__animation" />
};

export const Portfolio: React.FC = () => (
	<Section {...portfolioSectionProps}>
		<div className="c-section__grid o-grid">
			{portfolioItems.map((item: SubPage, index: number) => (
				<div key={index} className="o-grid__item xs-12 sm-6 md-4 lg-4 xl-4">
					<Link
						to={item.url}
						style={{ backgroundImage: `url(${item.image})` }}
						className="c-article-link fullsize-background"
					>
						<strong>{item.text}</strong>
					</Link>

					<Loader />
				</div>
			))}
		</div>
	</Section>
);

export default Portfolio;
