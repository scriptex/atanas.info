import * as React from 'react';

import { mobileApps } from '../../data/projects';
import { PortfolioSliders } from '..';

export const PortfolioMobileApps: React.FC = () => (
	<>
		<h3>Mobile applications</h3>

		<PortfolioSliders data={mobileApps} slidesToShow={2} />
	</>
);

export default PortfolioMobileApps;
