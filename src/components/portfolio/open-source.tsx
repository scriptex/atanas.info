import * as React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '../../data/routes';
import { Section, SectionGrid } from '..';
import { portfolioSectionProps } from '.';
import { openSourceProjectsList } from '../../data/open-source';

export const openSourceProjects = openSourceProjectsList.map((repo, index) => ({
	url: repo.url,
	text: repo.title,
	image: `https://source.unsplash.com/random/${1280 + index}x${840 + index}/?code`,
	content: repo.content
}));

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
