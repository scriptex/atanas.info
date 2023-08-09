import type { FC } from 'react';

import portfolio from '@data/lotties/portfolio.json';
import { portfolioItems } from '@data/projects';
import { Layout, Section, Animation, SectionGrid, Title } from '@components';

export const portfolioSectionProps = {
	id: 'portfolio',
	title: 'Portfolio',
	hasButton: true,
	additionalElements: <Animation data={portfolio} width={200} height={150} className="c-section__animation" />
};

export const Portfolio: FC = () => (
	<Layout>
		<Title text="Portfolio | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

		<Section {...portfolioSectionProps}>
			<SectionGrid data={portfolioItems} />
		</Section>
	</Layout>
);

export default Portfolio;
