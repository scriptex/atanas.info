import type { FC } from 'react';
import type { InferGetStaticPropsType } from 'next';

import { Routes } from '@data/routes';
import { MDX, Layout, Title } from '@components';
import { getPostBySlug, getAllPosts } from '@lib/markdown';
import { Article, getArticlesFromCMS } from '@scripts/cms';

type Params = {
	params: {
		slug: string;
	};
};

type StaticPaths = {
	paths: Params[];
	fallback: boolean;
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const OpenSourceProject: FC<Readonly<Props>> = ({ post, articles }: Props) => {
	const match = articles
		.filter((article: Article) => !article.external)
		.find(item => item.url === `/blog/${post.slug}`);

	return (
		<Layout>
			<Title text={`${match?.title ?? post.slug} | Atanas Atanasov | Senior Javascript/Typescript Engineer`} />

			<MDX
				id="blog-post"
				back={Routes.BLOG}
				title={match?.title ?? post.slug}
				image={match?.externalImage ?? match?.image?.fields.file?.url?.toString()}
				content={post.content}
			/>
		</Layout>
	);
};

export const getStaticProps = async ({ params }: Params) => {
	const post = getPostBySlug('src/data/posts', params?.slug, ['slug', 'content']);
	const articles = await getArticlesFromCMS();

	return { props: { post, articles } };
};

export async function getStaticPaths(): Promise<StaticPaths> {
	const posts = getAllPosts('src/data/posts', ['slug']);

	return {
		paths: posts.map(({ slug }) => ({ params: { slug } })),
		fallback: false
	};
}

export default OpenSourceProject;
