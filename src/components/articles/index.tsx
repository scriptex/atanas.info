import * as React from 'react';

import { blogProps } from '../blog';
import { isPrerendering } from '../../scripts/shared';
import { articles, Article } from '../../data/articles';
import { Loader, Section, ExternalLink } from '..';

export const Articles: React.FC = () => (
	<Section id="articles" title="Articles" {...blogProps}>
		<div className="c-section__body o-grid">
			{articles
				.filter((article: Article) => article.external)
				.map((article: Article, index: number) => (
					<div key={index} className="o-grid__item xs-12 sm-6">
						<ExternalLink
							href={article.url}
							style={isPrerendering ? {} : { backgroundImage: `url(${article.image})` }}
							className="c-article-link fullsize-background"
						>
							<strong>{article.title}</strong>
						</ExternalLink>

						<Loader />
					</div>
				))}
		</div>
	</Section>
);

export default Articles;
