import Link from 'next/link';
import type { FC } from 'react';

import { Routes } from '@data/routes';
import { portfolioSectionProps } from '..';
import { openSourceProjectsList } from '@data/open-source';
import { Layout, Section, SectionGrid } from '@components';

export const openSourceProjects = openSourceProjectsList.map((repo, index) => ({
	url: repo.url,
	text: repo.title,
	image: `/images/unsplash/${(index % 25) + 1}.jpeg`
}));

export const PortfolioOpenSourceProjects: FC = () => (
	<Layout>
		<Section
			{...portfolioSectionProps}
			actions={
				<Link href={Routes.PORTFOLIO} className="c-btn">
					Go back
				</Link>
			}
		>
			<h3>Open-source projects</h3>

			<SectionGrid data={openSourceProjects} />
		</Section>
	</Layout>
);

export default PortfolioOpenSourceProjects;
