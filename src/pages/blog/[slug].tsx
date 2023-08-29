import type { FC } from 'react';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { Routes } from '@data/routes';
import { MDX, Layout, Title } from '@components';
import { getPostBySlug, getAllPosts } from '@lib/markdown';
import { Article, getArticlesFromCMS } from '@scripts/cms';

export const OpenSourceProject: FC<Readonly<InferGetStaticPropsType<typeof getStaticProps>>> = ({ post, articles }) => {
	const match = articles
		.filter((article: Article) => !article.external)
		.find(item => item.url === `/blog/${post.slug}`);

	return (
		<Layout>
			<Title text={`${match?.title ?? post.slug} | Atanas Atanasov | Senior Javascript/Typescript Engineer`} />

			<MDX
				id="blog-post"
				back={Routes.BLOG}
				title={match?.title ?? post.slug ?? ''}
				image={match?.externalImage ?? match?.image?.fields.file?.url?.toString()}
				content={post.content}
			/>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<{
	post: ReturnType<typeof getPostBySlug>;
	articles: Article[];
}> = async ({ params }) => {
	const post = getPostBySlug('src/data/posts', params?.slug as string, ['slug', 'content']);
	const articles = await getArticlesFromCMS();

	return { props: { post, articles } };
};

export const getStaticPaths: GetStaticPaths = async ({}) => {
	const posts = getAllPosts('src/data/posts', ['slug']);

	return {
		paths: posts.map(({ slug }) => ({ params: { slug } })),
		fallback: false
	};
};

export default OpenSourceProject;
