import * as React from 'react';
import { Link } from 'react-router-dom';

import { isPrerendering } from '../../../scripts/shared';
import { Loader, Section } from '../..';
import { articles, Article } from '../../../data/articles';

export const SectionBlog: React.FunctionComponent = () => (
	<Section
		id="blog"
		style={{ backgroundImage: 'url(images/temp/articles.jpg)' }}
		className=" c-section--slides fullsize-background"
		hasButton={true}
	>
		<h2>Blog</h2>

		<div className="c-section__body o-grid">
			{articles
				.filter((article: Article) => !article.external)
				.map((article: Article, index: number) =>
					isPrerendering ? null : (
						<div key={index} className="o-grid__item xs-12 sm-6">
							<Link
								to={article.url}
								style={{ backgroundImage: `url(${article.image})` }}
								className="c-article-link fullsize-background"
							>
								<strong>{article.title}</strong>
							</Link>

							<Loader />
						</div>
					)
				)}
		</div>
	</Section>
);

export default SectionBlog;
