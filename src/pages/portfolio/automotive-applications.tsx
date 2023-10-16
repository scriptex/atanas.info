import Link from 'next/link';
import type { FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Routes } from '@data/routes';
import { automotiveProjects } from '@data/projects';
import { getPartnersFromCMS } from '@scripts/cms';
import { portfolioSectionProps } from '@data/pages';
import type { PortfolioAutomotiveAppsPageData } from '@scripts/types';
import { Layout, Section, PortfolioSliders, Title } from '@components';

export const PortfolioAutomotiveApps: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ partners }) => (
	<Layout partners={partners}>
		<Title text="Automotive Applications | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

		<Section
			{...portfolioSectionProps}
			actions={
				<Link href={Routes.PORTFOLIO} className="c-btn">
					Go back
				</Link>
			}
		>
			<h3>Automotive projects</h3>

			<PortfolioSliders
				data={automotiveProjects}
				folder="automotive-apps"
				slidesToShow={1}
				className="c-section__slider--fullwidth"
			/>
		</Section>
	</Layout>
);

export const getStaticProps: GetStaticProps<PortfolioAutomotiveAppsPageData> = async () => ({
	props: {
		partners: await getPartnersFromCMS()
	}
});

export default PortfolioAutomotiveApps;
