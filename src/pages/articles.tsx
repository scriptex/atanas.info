import type { FC } from 'react';

import { blogProps } from './blog';
import { articles, Article } from '@data/articles';
import { Layout, Loader, Section, ExternalLink, Title } from '@components';

export const Articles: FC = () => (
	<Layout>
		<Title text="Articles | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

		<Section id="articles" title="Articles" {...blogProps}>
			<div className="c-section__body o-grid">
				{articles
					.filter((article: Article) => article.external)
					.map((article: Article) => (
						<div key={article.index} className="o-grid__item xs-12 sm-6">
							<ExternalLink
								href={article.url}
								style={{ backgroundImage: `url(${article.image})` }}
								className="c-article-link fullsize-background"
							>
								<strong>{article.title}</strong>
							</ExternalLink>

							<Loader />
						</div>
					))}
			</div>
		</Section>
	</Layout>
);

export default Articles;
