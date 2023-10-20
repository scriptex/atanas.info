import Link from 'next/link';
import type { FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Routes } from '@data/routes';
import { useCurrentPageParam } from '@scripts/shared';
import type { PortfolioOpenSourcePageData } from '@scripts/types';
import { Layout, Section, SectionGrid, Title } from '@components';
import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import { openSourceProjects, portfolioSectionProps } from '@data/pages';

export const PortfolioOpenSourceProjects: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
	funding,
	partners
}) => {
	const page = useCurrentPageParam();

	return (
		<Layout funding={funding} partners={partners}>
			<Title text="Open Source | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

			<Section
				{...portfolioSectionProps}
				actions={
					<Link href={Routes.PORTFOLIO} className="c-btn">
						Go back
					</Link>
				}
			>
				<h3>Open-source projects</h3>

				<SectionGrid<true>
					data={openSourceProjects}
					page={page}
					route={Routes.PORTFOLIO_OPEN_SOURCE_PROJECTS}
					pagination
				/>
			</Section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<PortfolioOpenSourcePageData> = async () => ({
	props: {
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	}
});

export default PortfolioOpenSourceProjects;
