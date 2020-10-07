import * as React from 'react';

import { articles, Article } from '../../scripts/articles';
import { Section, ExternalLink } from '..';

export const SectionArticles: React.FunctionComponent = () => (
	<Section id="articles" hasButton={true} className=" c-section--slides">
		<h2>Articles</h2>

		<div className="c-section__body o-grid">
			{articles.map((article: Article, index: number) => (
				<div key={index} className="o-grid__item o-grid__item--1of2">
					<ExternalLink
						href={article.url}
						style={{ backgroundImage: `url(${article.image})` }}
						className="c-article-link fullsize-background"
					>
						<strong>{article.title}</strong>
					</ExternalLink>
				</div>
			))}
		</div>
	</Section>
);

export default SectionArticles;
