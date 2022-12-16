import * as React from 'react';
import { Link } from 'react-router-dom';

import book from '@data/lotties/book.json';
import { articles, Article } from '@data/articles';
import { Loader, Section, Animation } from '@components';

export const blogProps = {
	style: { backgroundImage: 'url(images/temp/articles.jpg)' },
	className: 'c-section--slides fullsize-background',
	hasButton: true,
	additionalElements: <Animation data={book} width={150} height={150} className="c-section__animation" />
};

export const Blog: React.FC = () => (
	<Section id="blog" title="Blog" {...blogProps}>
		<div className="c-section__body o-grid">
			{articles
				.filter((article: Article) => !article.external)
				.map((article: Article, index: number) => (
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
				))}
		</div>
	</Section>
);

export default Blog;
