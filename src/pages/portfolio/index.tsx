import type { FC } from 'react';

import { portfolioItems } from '@data/projects';
import { portfolioSectionProps } from '@data/pages';
import { Layout, Section, SectionGrid, Title } from '@components';

export const Portfolio: FC = () => (
	<Layout>
		<Title text="Portfolio | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

		<Section {...portfolioSectionProps}>
			<SectionGrid data={portfolioItems} />
		</Section>
	</Layout>
);

export default Portfolio;
