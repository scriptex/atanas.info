import Head from 'next/head';
import type { FC } from 'react';

import { Routes } from '@data/routes';
import { automotiveProjects } from '@data/projects';
import { portfolioSectionProps } from '.';
import { Button, Layout, Section, PortfolioSliders } from '@components';

export const PortfolioAutomotiveApps: FC = () => (
	<Layout>
		<Head>
			<title>Automotive Applications | Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
		</Head>

		<Section
			{...portfolioSectionProps}
			actions={
				<Button href={Routes.PORTFOLIO} type="link">
					Go back
				</Button>
			}
		>
			<h3>Automotive projects</h3>

			<PortfolioSliders data={automotiveProjects} slidesToShow={1} className="c-section__slider--fullwidth" />
		</Section>
	</Layout>
);

export default PortfolioAutomotiveApps;
