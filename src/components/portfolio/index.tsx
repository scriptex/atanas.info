import * as React from 'react';

import webApps from '../../data/projects-list.json';
import portfolio from '../../data/lotties/portfolio.json';
import { Button, Section, Animation, PortfolioWebApps, PortfolioMobileApps, PortfolioAutomotiveApps } from '..';

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
			additionalElements={
				<Animation data={portfolio} width={200} height={150} className="c-section__animation" />
			}
		>
			<PortfolioMobileApps />

			<PortfolioAutomotiveApps />

			<PortfolioWebApps itemsToShow={itemsToShow} />
		</Section>
	);
};

export default Portfolio;
