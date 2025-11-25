import type { FC } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

import { getAllPosts, getPostBySlug } from '@lib/markdown';

import { ExternalLink, Layout, MDX as Mdx, Title } from '@components';

import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import type { PortfolioOpenSourceProjectPageData } from '@scripts/types';

import { openSourceProjects } from '@data/pages';
import { Routes } from '@data/routes';

type Params = {
	params: {
		slug: string;
	};
};

type StaticPaths = {
	fallback: boolean;
	paths: Params[];
};

export const OpenSourceProject: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ funding, partners, post }) => {
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
			<Title text="Open Source" />

			<Mdx
				additionalActions={
					match ? (
						<>
							<br className="visible-xs-block" />

							<ExternalLink className="c-btn" href={`https://github.com/${match?.text}`}>
								View source
							</ExternalLink>
						</>
					) : null
				}
				back={Routes.PORTFOLIO_OPEN_SOURCE_PROJECTS}
				content={post.content}
				id="blog-post"
				image={match?.image}
				slug={post.slug}
				title={post.slug}
			/>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<PortfolioOpenSourceProjectPageData> = async ({ params }) => ({
	props: {
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS(),
		post: getPostBySlug('src/data/open-source-projects', params?.slug as string, ['slug', 'content'])
	},
	revalidate: 86400
});

export const getStaticPaths = async (): Promise<StaticPaths> => {
	const posts = getAllPosts('src/data/open-source-projects', ['slug']);

	return {
		fallback: false,
		paths: posts.map(({ slug }) => ({ params: { slug } }))
	};
};

export default OpenSourceProject;
