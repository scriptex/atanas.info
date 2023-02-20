import Head from 'next/head';
import type { FC } from 'react';

import { Routes } from '@data/routes';
import { portfolioSectionProps } from '..';
import { openSourceProjectsList } from '@data/open-source';
import { Button, Layout, Section, SectionGrid } from '@components';

export const openSourceProjects = openSourceProjectsList.map((repo, index) => ({
	url: repo.url,
	text: repo.title,
	image: `/images/unsplash/${(index % 25) + 1}.jpeg`
}));

export const PortfolioOpenSourceProjects: FC = () => (
	<Layout>
		<Head>
			<title>Open Source | Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
		</Head>

		<Section
			{...portfolioSectionProps}
			actions={
				<Button href={Routes.PORTFOLIO} type="link">
					Go back
				</Button>
			}
		>
			<h3>Open-source projects</h3>

			<SectionGrid data={openSourceProjects} />
		</Section>
	</Layout>
);

export default PortfolioOpenSourceProjects;
