import * as React from 'react';

import webApps from '../../data/projects-list.json';
import { Button, Section, PortfolioWebApps, PortfolioMobileApps, PortfolioAutomotiveApps } from '..';

export const Portfolio: React.FC = () => {
	const [itemsToShow, setItemsToShow] = React.useState(7);

	return (
		<Section
			id="portfolio"
			title="Portfolio"
			actions={
				itemsToShow >= webApps.length ? null : (
					<Button onClick={() => setItemsToShow(itemsToShow + 6)}>Show more</Button>
				)
			}
			hasButton={true}
		>
			<PortfolioMobileApps />

			<PortfolioAutomotiveApps />

			<PortfolioWebApps itemsToShow={itemsToShow} />
		</Section>
	);
};

export default Portfolio;
