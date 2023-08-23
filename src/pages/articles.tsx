import type { FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { blogProps } from '@data/pages';
import { Article, getArticlesFromCMS } from '@scripts/cms';
import { Layout, Loader, Section, ExternalLink, Title } from '@components';

export const Articles: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ articles }) => (
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
								style={{ backgroundImage: `url(${article.externalImage})` }}
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

export const getStaticProps: GetStaticProps<{ articles: Article[] }> = async () => ({
	props: {
		articles: await getArticlesFromCMS()
	}
});

export default Articles;
