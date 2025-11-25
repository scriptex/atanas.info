import type { FC } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { Layout, PortfolioSliders, Section, Title } from '@components';

import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import type { PortfolioAutomotiveAppsPageData } from '@scripts/types';

import { portfolioSectionProps } from '@data/pages';
import { automotiveProjects } from '@data/projects';
import { Routes } from '@data/routes';

export const PortfolioAutomotiveApps: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ funding, partners }) => (
	<Layout funding={funding} partners={partners}>
		<Title text="Automotive Applications" />

		<Section
			{...portfolioSectionProps}
			actions={
				<Link className="c-btn" href={Routes.PORTFOLIO}>
					Go back
				</Link>
			}
		>
			<h3>Automotive projects</h3>

			<PortfolioSliders
				className="c-section__slider--fullwidth"
				data={automotiveProjects}
				folder="automotive-apps"
				slidesToShow={1}
			/>
		</Section>
	</Layout>
);

export const getStaticProps: GetStaticProps<PortfolioAutomotiveAppsPageData> = async () => ({
	props: {
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	},
	revalidate: 86400
});

export default PortfolioAutomotiveApps;
