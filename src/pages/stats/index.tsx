import type { FC } from 'react';

import { statsItems } from '@data/projects';
import { sectionStatsProps } from '@scripts/stats';
import { Layout, Section, SectionGrid, Title } from '@components';

export const Stats: FC = () => (
	<Layout>
		<Title text="Stats | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

		<Section {...sectionStatsProps} hasShell={true}>
			<SectionGrid data={statsItems} />
		</Section>
	</Layout>
);

export default Stats;
