import type { FC } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { ExternalLink, Layout, Loader, Section, Title } from '@components';

import type { Article } from '@scripts/cms';
import { getArticlesFromCMS, getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import type { ArticlesPageProps } from '@scripts/types';

import { blogProps } from '@data/pages';

export const Articles: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ articles, funding, partners }) => (
	<Layout funding={funding} partners={partners}>
		<Title text="Articles" />

		<Section id="articles" title="Articles" {...blogProps}>
			<div className="c-section__body o-grid">
				{articles
					.filter((article: Article) => article.external)
					.map((article: Article) => (
						<div className="o-grid__item xs-12 sm-6" key={article.index}>
							<ExternalLink
								className="c-article-link fullsize-background"
								href={article.url}
								style={{ backgroundImage: `url(${article.externalImage})` }}
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
		articles: await getArticlesFromCMS(),
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	},
	revalidate: 86400
});

export default Articles;
