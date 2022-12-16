import * as React from 'react';

import portfolio from '@data/lotties/portfolio.json';
import { portfolioItems } from '@data/projects';
import { Section, Animation, SectionGrid } from '@components';

export const portfolioSectionProps = {
	id: 'portfolio',
	title: 'Portfolio',
	hasButton: true,
	additionalElements: <Animation data={portfolio} width={200} height={150} className="c-section__animation" />
};

export const Portfolio: React.FC = () => (
	<Section {...portfolioSectionProps}>
		<SectionGrid data={portfolioItems} />
	</Section>
);

export default Portfolio;
