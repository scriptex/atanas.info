import * as React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '../../data/routes';
import { personalProjects } from '../../data/projects';
import { Section, SectionGrid } from '..';
import { portfolioSectionProps } from '.';

export const PortfolioPersonalProjects: React.FC = () => (
	<Section
		{...portfolioSectionProps}
		actions={
			<Link to={Routes.PORTFOLIO} className="c-btn">
				Go back
			</Link>
		}
	>
		<h3>Personal projects</h3>

		<SectionGrid data={personalProjects} linkType="external" />
	</Section>
);

export default PortfolioPersonalProjects;
