import type { FC } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { Layout, Section, SectionGrid, Title } from '@components';

import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import { useCurrentPageParam } from '@scripts/shared';
import type { PortfolioOpenSourcePageData } from '@scripts/types';

import { openSourceProjects, portfolioSectionProps } from '@data/pages';
import { Routes } from '@data/routes';

export const PortfolioOpenSourceProjects: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
	funding,
	partners
}) => {
	const page = useCurrentPageParam();

	return (
		<Layout funding={funding} partners={partners}>
			<Title text="Open Source" />

			<Section
				{...portfolioSectionProps}
				actions={
					<Link className="c-btn" href={Routes.PORTFOLIO}>
						Go back
					</Link>
				}
			>
				<h3>Open-source projects</h3>

				<SectionGrid<true>
					data={openSourceProjects}
					page={page}
					pagination
					route={Routes.PORTFOLIO_OPEN_SOURCE_PROJECTS}
				/>
			</Section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<PortfolioOpenSourcePageData> = async () => ({
	props: {
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	},
	revalidate: 86400
});

export default PortfolioOpenSourceProjects;
