import type { FC } from 'react';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { Routes } from '@data/routes';
import { MDX as Mdx, Layout, Title } from '@components';
import type { BlogPostPageData } from '@scripts/types';
import { getPostBySlug, getAllPosts } from '@lib/markdown';
import { Article, getArticlesFromCMS, getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';

export const OpenSourceProject: FC<Readonly<InferGetStaticPropsType<typeof getStaticProps>>> = ({
	post,
	funding,
	articles,
	partners
}) => {
	const match = articles
		.filter((article: Article) => !article.external)
		.find(item => item.url === `/blog/${post.slug}`);

	return (
		<Layout funding={funding} partners={partners}>
			<Title text={match?.title ?? post.slug} />

			<Mdx
				id="blog-post"
				back={Routes.BLOG}
				title={match?.title ?? post.slug ?? ''}
				image={match?.externalImage ?? match?.image?.fields.file?.url?.toString()}
				content={post.content}
			/>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<BlogPostPageData<typeof getPostBySlug>> = async ({ params }) => ({
	props: {
		post: getPostBySlug('src/data/posts', params?.slug as string, ['slug', 'content']),
		funding: await getFundingFromCMS(),
		articles: await getArticlesFromCMS(),
		partners: await getPartnersFromCMS()
	}
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStaticPaths: GetStaticPaths = async ({ locales, defaultLocale }) => {
	const posts = getAllPosts('src/data/posts', ['slug']);

	return {
		paths: posts.map(({ slug }) => ({ params: { slug } })),
		fallback: false
	};
};

export default OpenSourceProject;
