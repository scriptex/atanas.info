import Link from 'next/link';
import type { FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Routes } from '@data/routes';
import { getPartnersFromCMS } from '@scripts/cms';
import { useCurrentPageParam } from '@scripts/shared';
import type { PortfolioOpenSourcePageData } from '@scripts/types';
import { Layout, Section, SectionGrid, Title } from '@components';
import { openSourceProjects, portfolioSectionProps } from '@data/pages';

export const PortfolioOpenSourceProjects: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ partners }) => {
	const page = useCurrentPageParam();

	return (
		<Layout partners={partners}>
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
		partners: await getPartnersFromCMS()
	}
});

export default PortfolioOpenSourceProjects;
