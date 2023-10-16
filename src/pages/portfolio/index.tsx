import type { FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { portfolioItems } from '@data/projects';
import { getPartnersFromCMS } from '@scripts/cms';
import { portfolioSectionProps } from '@data/pages';
import type { PortfolioPageData } from '@scripts/types';
import { Layout, Section, SectionGrid, Title } from '@components';

export const Portfolio: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ partners }) => (
	<Layout partners={partners}>
		<Title text="Portfolio | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

		<Section {...portfolioSectionProps}>
			<SectionGrid data={portfolioItems} />
		</Section>
	</Layout>
);

export const getStaticProps: GetStaticProps<PortfolioPageData> = async () => ({
	props: {
		partners: await getPartnersFromCMS()
	}
});

export default Portfolio;
