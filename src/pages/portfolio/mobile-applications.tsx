import Head from 'next/head';
import type { FC } from 'react';

import { Routes } from '@data/routes';
import { mobileApps } from '@data/projects';
import { portfolioSectionProps } from '.';
import { Button, Layout, Section, PortfolioSliders } from '@components';

export const PortfolioMobileApps: FC = () => (
	<Layout>
		<Head>
			<title>Mobile Applications | Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
		</Head>

		<Section
			{...portfolioSectionProps}
			actions={
				<Button href={Routes.PORTFOLIO} type="link">
					Go back
				</Button>
			}
		>
			<h3>Mobile applications</h3>

			<PortfolioSliders data={mobileApps} folder="mobile-apps" slidesToShow={2} />
		</Section>
	</Layout>
);

export default PortfolioMobileApps;
