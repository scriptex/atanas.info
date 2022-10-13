import * as React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '../../data/routes';
import { openSourceProjects } from '../../data/projects';
import { Section, SectionGrid } from '..';
import { portfolioSectionProps } from '.';

export const PortfolioOpenSourceProjects: React.FC = () => (
	<Section
		{...portfolioSectionProps}
		actions={
			<Link to={Routes.PORTFOLIO} className="c-btn">
				Go back
			</Link>
		}
	>
		<h3>Open-source projects</h3>

		<SectionGrid data={openSourceProjects} />
	</Section>
);

export default PortfolioOpenSourceProjects;
