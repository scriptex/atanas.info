import ErrorPage from 'next/error';
import type { FC } from 'react';
import { useRouter } from 'next/router';

import { Routes } from '@data/routes';
import { openSourceProjects } from '@data/pages';
import { MDX, Layout, Title } from '@components';
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

type StaticProps = {
	props: {
		post: Record<string, string>;
	};
};

type StaticPaths = {
	paths: Params[];
	fallback: boolean;
};

export const OpenSourceProject: FC<Readonly<Props>> = ({ post }: Props) => {
	const router = useRouter();

	if (!router.isFallback && !post?.slug) {
		return (
			<Layout>
				<ErrorPage statusCode={404} />
			</Layout>
		);
	}

	const match = openSourceProjects.find(item => item.url === `/portfolio/open-source/${post.slug}`);

	return (
		<Layout>
			<Title text="Open Source | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

			<MDX
				id="blog-post"
				back={Routes.PORTFOLIO_OPEN_SOURCE_PROJECTS}
				title={post.slug}
				image={match?.image}
				content={post.content}
			/>
		</Layout>
	);
};

export async function getStaticProps({ params }: Params): Promise<StaticProps> {
	const post = getPostBySlug('src/data/open-source-projects', params.slug, ['slug', 'content']);

	return { props: { post } };
}

export async function getStaticPaths(): Promise<StaticPaths> {
	const posts = getAllPosts('src/data/open-source-projects', ['slug']);

	return {
		paths: posts.map(({ slug }) => ({ params: { slug } })),
		fallback: false
	};
}

export default OpenSourceProject;
