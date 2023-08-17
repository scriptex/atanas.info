import Link from 'next/link';
import type { FC } from 'react';

import { Routes } from '@data/routes';
import { mobileApps } from '@data/projects';
import { portfolioSectionProps } from '@data/pages';
import { Layout, Section, PortfolioSliders, Title } from '@components';

export const PortfolioMobileApps: FC = () => (
	<Layout>
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

export default PortfolioMobileApps;
