import type { FC } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { Layout, PortfolioSliders, Section, Title } from '@components';

import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import type { PortfolioMobileAppsPageData } from '@scripts/types';

import { portfolioSectionProps } from '@data/pages';
import { mobileApps } from '@data/projects';
import { Routes } from '@data/routes';

export const PortfolioMobileApps: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ funding, partners }) => (
	<Layout funding={funding} partners={partners}>
		<Title text="Mobile Applications" />

		<Section
			{...portfolioSectionProps}
			actions={
				<Link className="c-btn" href={Routes.PORTFOLIO}>
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
	},
	revalidate: 86400
});

export default PortfolioMobileApps;
