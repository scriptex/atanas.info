import Head from 'next/head';
import type { FC } from 'react';

import { statsItems } from '@data/projects';
import { sectionStatsProps } from '@scripts/stats';
import { Layout, Section, SectionGrid } from '@components';

export const Stats: FC = () => (
	<Layout>
		<Head>
			<title>Stats | Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
		</Head>

		<Section {...sectionStatsProps} hasShell={true}>
			<SectionGrid data={statsItems} />
		</Section>
	</Layout>
);

export default Stats;
