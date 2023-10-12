import Link from 'next/link';
import type { FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Routes } from '@data/routes';
import { personalProjects } from '@data/projects';
import { getPartnersFromCMS } from '@scripts/cms';
import { useCurrentPageParam } from '@scripts/shared';
import { portfolioSectionProps } from '@data/pages';
import { Layout, Section, SectionGrid, Title } from '@components';
import type { PortfolioPersonalProjectsPageData } from '@scripts/types';

export const PortfolioPersonalProjects: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ partners }) => {
	const page = useCurrentPageParam();

	return (
		<Layout partners={partners}>
			<Title text="Personal Projects | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

			<Section
				{...portfolioSectionProps}
				actions={
					<Link href={Routes.PORTFOLIO} className="c-btn">
						Go back
					</Link>
				}
			>
				<h3>Personal projects</h3>

				<SectionGrid<true>
					data={personalProjects}
					page={page}
					route={Routes.PORTFOLIO_PERSONAL_PROJECTS}
					linkType="external"
					pagination
				/>
			</Section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<PortfolioPersonalProjectsPageData> = async () => ({
	props: {
		partners: await getPartnersFromCMS()
	}
});

export default PortfolioPersonalProjects;
