import type { FC } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Layout, Section, SectionGrid, Title } from '@components';
import { portfolioSectionProps } from '@data/pages';
import { portfolioItems } from '@data/projects';
import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import type { PortfolioPageData } from '@scripts/types';

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
	},
	revalidate: 86400
});

export default Portfolio;
