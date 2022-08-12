import * as React from 'react';

import book from '../../data/lotties/book.json';
import { isPrerendering } from '../../scripts/shared';
import { articles, Article } from '../../data/articles';
import { Loader, Section, Animation, ExternalLink } from '..';

export const Articles: React.FC = () => (
	<Section
		id="articles"
		style={{ backgroundImage: 'url(images/temp/articles.jpg)' }}
		title="Articles"
		className=" c-section--slides fullsize-background"
		hasButton
		additionalElements={<Animation data={book} width={150} height={150} className="c-section__animation" />}
	>
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
