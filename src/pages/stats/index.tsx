import type { FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { statsItems } from '@data/projects';
import { sectionStatsProps } from '@scripts/stats';
import type { StatsPageData } from '@scripts/types';
import { Layout, Section, SectionGrid, Title } from '@components';
import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';

export const Stats: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ funding, partners }) => (
	<Layout funding={funding} partners={partners}>
		<Title text="Stats" />

		<Section {...sectionStatsProps} hasShell={true}>
			<SectionGrid data={statsItems} />
		</Section>
	</Layout>
);

export const getStaticProps: GetStaticProps<StatsPageData> = async () => ({
	props: {
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	}
});

export default Stats;
