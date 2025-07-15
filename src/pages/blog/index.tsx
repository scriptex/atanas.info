import type { FC } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { Layout, Loader, Section, Title } from '@components';
import { blogProps } from '@data/pages';
import { Article, getArticlesFromCMS, getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import type { BlogPageData } from '@scripts/types';

export const Blog: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ articles, funding, partners }) => (
	<Layout funding={funding} partners={partners}>
		<Title text="Blog" />

		<Section id="blog" title="Blog" {...blogProps}>
			<div className="c-section__body o-grid">
				{articles
					.filter((article: Article) => !article.external)
					.map((article: Article) => (
						<div className="o-grid__item xs-12 sm-6" key={article.index}>
							<Link
								className="c-article-link fullsize-background"
								href={article.url}
								style={{ backgroundImage: `url(${article.image?.fields.file?.url})` }}
							>
								<strong>{article.title}</strong>
							</Link>

							<Loader />
						</div>
					))}
			</div>
		</Section>
	</Layout>
);

export const getStaticProps: GetStaticProps<BlogPageData> = async () => ({
	props: {
		articles: await getArticlesFromCMS(),
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	},
	revalidate: 86400
});

export default Blog;
