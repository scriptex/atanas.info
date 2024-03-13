import type { FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { blogProps } from '@data/pages';
import type { ArticlesPageProps } from '@scripts/types';
import { Layout, Loader, Section, ExternalLink, Title } from '@components';
import { Article, getArticlesFromCMS, getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';

export const Articles: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ funding, articles, partners }) => (
	<Layout funding={funding} partners={partners}>
		<Title text="Articles" />

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

export const getStaticProps: GetStaticProps<ArticlesPageProps> = async () => ({
	props: {
		funding: await getFundingFromCMS(),
		articles: await getArticlesFromCMS(),
		partners: await getPartnersFromCMS()
	}
});

export default Articles;
