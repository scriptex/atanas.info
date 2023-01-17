import Link from 'next/link';
import type { FC } from 'react';

import { Routes } from '@data/routes';
import { mobileApps } from '@data/projects';
import { portfolioSectionProps } from '.';
import { Layout, Section, PortfolioSliders } from '@components';

export const PortfolioMobileApps: FC = () => (
	<Layout>
		<Section
			{...portfolioSectionProps}
			actions={
				<Link href={Routes.PORTFOLIO} className="c-btn">
					Go back
				</Link>
			}
		>
			<h3>Mobile applications</h3>

			<PortfolioSliders data={mobileApps} slidesToShow={2} />
		</Section>
	</Layout>
);

export default PortfolioMobileApps;
