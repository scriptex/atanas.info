import * as React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '../../data/routes';
import { automotiveProjects } from '../../data/projects';
import { portfolioSectionProps } from '.';
import { Section, PortfolioSliders } from '..';

export const PortfolioAutomotiveApps: React.FC = () => (
	<Section
		{...portfolioSectionProps}
		actions={
			<Link to={Routes.PORTFOLIO} className="c-btn">
				Go back
			</Link>
		}
	>
		<h3>Automotive projects</h3>

		<PortfolioSliders data={automotiveProjects} slidesToShow={1} className="c-section__slider--fullwidth" />
	</Section>
);

export default PortfolioAutomotiveApps;
