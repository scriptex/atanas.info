import type { FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { portfolioItems } from '@data/projects';
import { portfolioSectionProps } from '@data/pages';
import type { PortfolioPageData } from '@scripts/types';
import { Layout, Section, SectionGrid, Title } from '@components';
import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';

export const Portfolio: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ funding, partners }) => (
	<Layout funding={funding} partners={partners}>
		<Title text="Portfolio" />

		<Section {...portfolioSectionProps}>
			<SectionGrid data={portfolioItems} />
		</Section>
	</Layout>
);

export const getStaticProps: GetStaticProps<PortfolioPageData> = async () => ({
	props: {
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	}
});

export default Portfolio;
