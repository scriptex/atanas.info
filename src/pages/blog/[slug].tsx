import type { FC } from 'react';

import { Routes } from '@data/routes';
import { MDX, Layout } from '@components';
import { Article, articles } from '@data/articles';
import { getPostBySlug, getAllPosts } from '@lib/markdown';

type Props = {
	post: {
		slug: string;
		content: string;
	};
};

type Params = {
	params: {
		slug: string;
	};
};

export const OpenSourceProject: FC<Readonly<Props>> = ({ post }: Props) => {
	const match = articles
		.filter((article: Article) => !article.external)
		.find(item => item.url === `/blog/${post.slug}`);

	return (
		<Layout>
			<MDX
				id="blog-post"
				back={Routes.BLOG}
				title={match?.title || post.slug}
				image={match?.image}
				content={post.content}
			/>
		</Layout>
	);
};

export async function getStaticProps({ params }: Params) {
	const post = getPostBySlug('src/data/posts', params.slug, ['slug', 'content']);

	return { props: { post } };
}

export async function getStaticPaths() {
	const posts = getAllPosts('src/data/posts', ['slug']);

	return {
		paths: posts.map(({ slug }) => ({ params: { slug } })),
		fallback: false
	};
}

export default OpenSourceProject;
