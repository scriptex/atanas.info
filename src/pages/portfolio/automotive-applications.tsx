import Head from 'next/head';
import Link from 'next/link';
import type { FC } from 'react';

import { Routes } from '@data/routes';
import { automotiveProjects } from '@data/projects';
import { portfolioSectionProps } from '.';
import { Layout, Section, PortfolioSliders } from '@components';

export const PortfolioAutomotiveApps: FC = () => (
	<Layout>
		<Head>
			<title>Automotive Applications | Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
		</Head>

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

export default PortfolioAutomotiveApps;
