import type { FC } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { Layout, Section, SectionGrid, Title } from '@components';

import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import { useCurrentPageParam } from '@scripts/shared';
import type { PortfolioPersonalProjectsPageData } from '@scripts/types';

import { portfolioSectionProps } from '@data/pages';
import { personalProjects } from '@data/projects';
import { Routes } from '@data/routes';

export const PortfolioPersonalProjects: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
	funding,
	partners
}) => {
	const page = useCurrentPageParam();

	return (
		<Layout funding={funding} partners={partners}>
			<Title text="Personal Projects" />

			<Section
				{...portfolioSectionProps}
				actions={
					<Link className="c-btn" href={Routes.PORTFOLIO}>
						Go back
					</Link>
				}
			>
				<h3>Personal projects</h3>

				<SectionGrid<true>
					data={personalProjects}
					linkType="external"
					page={page}
					pagination
					route={Routes.PORTFOLIO_PERSONAL_PROJECTS}
				/>
			</Section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<PortfolioPersonalProjectsPageData> = async () => ({
	props: {
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	},
	revalidate: 86400
});

export default PortfolioPersonalProjects;
