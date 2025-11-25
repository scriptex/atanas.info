import type { FC } from 'react';

import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { getAllPosts, getPostBySlug } from '@lib/markdown';

import { Layout, MDX as Mdx, Title } from '@components';

import type { Article } from '@scripts/cms';
import { getArticlesFromCMS, getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import type { BlogPostPageData } from '@scripts/types';

import { Routes } from '@data/routes';

export const OpenSourceProject: FC<Readonly<InferGetStaticPropsType<typeof getStaticProps>>> = ({
	articles,
	funding,
	partners,
	post
}) => {
	const match = articles
		.filter((article: Article) => !article.external)
		.find(item => item.url === `/blog/${post.slug}`);

	return (
		<Layout funding={funding} partners={partners}>
			<Title text={match?.title ?? post.slug} />

			<Mdx
				back={Routes.BLOG}
				content={post.content}
				id="blog-post"
				image={match?.externalImage ?? match?.image?.fields.file?.url?.toString()}
				slug={post.slug}
				title={match?.title ?? post.slug ?? ''}
			/>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<BlogPostPageData<typeof getPostBySlug>> = async ({ params }) => ({
	props: {
		articles: await getArticlesFromCMS(),
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS(),
		post: getPostBySlug('src/data/posts', params?.slug as string, ['slug', 'content'])
	},
	revalidate: 86400
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStaticPaths: GetStaticPaths = async ({ defaultLocale, locales }) => {
	const posts = getAllPosts('src/data/posts', ['slug']);

	return {
		fallback: false,
		paths: posts.map(({ slug }) => ({ params: { slug } }))
	};
};

export default OpenSourceProject;
