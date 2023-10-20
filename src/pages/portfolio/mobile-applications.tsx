import Link from 'next/link';
import type { FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Routes } from '@data/routes';
import { mobileApps } from '@data/projects';
import { portfolioSectionProps } from '@data/pages';
import type { PortfolioMobileAppsPageData } from '@scripts/types';
import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import { Layout, Section, PortfolioSliders, Title } from '@components';

export const PortfolioMobileApps: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ funding, partners }) => (
	<Layout funding={funding} partners={partners}>
		<Title text="Mobile Applications | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

		<Section
			{...portfolioSectionProps}
			actions={
				<Link href={Routes.PORTFOLIO} className="c-btn">
					Go back
				</Link>
			}
		>
			<h3>Mobile applications</h3>

			<PortfolioSliders data={mobileApps} folder="mobile-apps" slidesToShow={2} />
		</Section>
	</Layout>
);

export const getStaticProps: GetStaticProps<PortfolioMobileAppsPageData> = async () => ({
	props: {
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	}
});

export default PortfolioMobileApps;
