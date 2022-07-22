import * as React from 'react';

import { PortfolioSliders } from '..';
import { automotiveProjects } from '../../data/projects';

export const PortfolioAutomotiveApps: React.FC = () => (
	<>
		<h3>Automotive projects</h3>

		<PortfolioSliders data={automotiveProjects} slidesToShow={1} className="c-section__slider--fullwidth" />
	</>
);

export default PortfolioAutomotiveApps;
