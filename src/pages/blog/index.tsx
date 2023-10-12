import Link from 'next/link';
import type { FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { blogProps } from '@data/pages';
import type { BlogPageData } from '@scripts/types';
import { Layout, Loader, Section, Title } from '@components';
import { Article, getArticlesFromCMS, getPartnersFromCMS } from '@scripts/cms';

export const Blog: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ articles, partners }) => (
	<Layout partners={partners}>
		<Title text="Blog | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

		<Section id="blog" title="Blog" {...blogProps}>
			<div className="c-section__body o-grid">
				{articles
					.filter((article: Article) => !article.external)
					.map((article: Article) => (
						<div key={article.index} className="o-grid__item xs-12 sm-6">
							<Link
								href={article.url}
								style={{ backgroundImage: `url(${article.image?.fields.file?.url})` }}
								className="c-article-link fullsize-background"
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
		partners: await getPartnersFromCMS()
	}
});

export default Blog;
