import * as React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '@data/routes';
import { mobileApps } from '@data/projects';
import { portfolioSectionProps } from '.';
import { Section, PortfolioSliders } from '@components';

export const PortfolioMobileApps: React.FC = () => (
	<Section
		{...portfolioSectionProps}
		actions={
			<Link to={Routes.PORTFOLIO} className="c-btn">
				Go back
			</Link>
		}
	>
		<h3>Mobile applications</h3>

		<PortfolioSliders data={mobileApps} slidesToShow={2} />
	</Section>
);

export default PortfolioMobileApps;
