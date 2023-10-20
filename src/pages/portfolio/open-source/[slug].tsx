import ErrorPage from 'next/error';
import type { FC } from 'react';
import { useRouter } from 'next/router';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Routes } from '@data/routes';
import { openSourceProjects } from '@data/pages';
import { MDX, Layout, Title } from '@components';
import { getPostBySlug, getAllPosts } from '@lib/markdown';
import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import type { PortfolioOpenSourceProjectPageData } from '@scripts/types';

type Params = {
	params: {
		slug: string;
	};
};

type StaticPaths = {
	paths: Params[];
	fallback: boolean;
};

export const OpenSourceProject: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ post, funding, partners }) => {
	const router = useRouter();

	if (!router.isFallback && !post?.slug) {
		return (
			<Layout funding={funding} partners={partners}>
				<ErrorPage statusCode={404} />
			</Layout>
		);
	}

	const match = openSourceProjects.find(item => item.url === `/portfolio/open-source/${post.slug}`);

	return (
		<Layout funding={funding} partners={partners}>
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

export const getStaticProps: GetStaticProps<PortfolioOpenSourceProjectPageData> = async ({ params }) => ({
	props: {
		post: getPostBySlug('src/data/open-source-projects', params?.slug as string, ['slug', 'content']),
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	}
});

export const getStaticPaths = async (): Promise<StaticPaths> => {
	const posts = getAllPosts('src/data/open-source-projects', ['slug']);

	return {
		paths: posts.map(({ slug }) => ({ params: { slug } })),
		fallback: false
	};
};

export default OpenSourceProject;
