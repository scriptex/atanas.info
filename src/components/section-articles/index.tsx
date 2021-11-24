import * as React from 'react';

import { isPrerendering } from '../../scripts/shared';
import { articles, Article } from '../../data/articles';
import { Loader, Section, ExternalLink } from '..';

export const SectionArticles: React.FunctionComponent = () => (
	<Section
		id="articles"
		style={{ backgroundImage: 'url(images/temp/articles.jpg)' }}
		className=" c-section--slides fullsize-background"
		hasButton={true}
	>
		<h2>Articles</h2>

		<div className="c-section__body o-grid">
			{articles.map((article: Article, index: number) => (
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

export default SectionArticles;
