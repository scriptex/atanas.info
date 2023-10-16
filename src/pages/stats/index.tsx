import type { FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { statsItems } from '@data/projects';
import { sectionStatsProps } from '@scripts/stats';
import { getPartnersFromCMS } from '@scripts/cms';
import type { StatsPageData } from '@scripts/types';
import { Layout, Section, SectionGrid, Title } from '@components';

export const Stats: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ partners }) => (
	<Layout partners={partners}>
		<Title text="Stats | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

		<Section {...sectionStatsProps} hasShell={true}>
			<SectionGrid data={statsItems} />
		</Section>
	</Layout>
);

export const getStaticProps: GetStaticProps<StatsPageData> = async () => ({
	props: {
		partners: await getPartnersFromCMS()
	}
});

export default Stats;
