import Head from 'next/head';
import Link from 'next/link';
import type { FC } from 'react';

import { Routes } from '@data/routes';
import { portfolioSectionProps } from '..';
import { openSourceProjectsList } from '@data/open-source';
import { Layout, Section, SectionGrid } from '@components';

export const openSourceProjects = openSourceProjectsList.map((repo, index) => ({
	url: repo?.url,
	text: repo?.title,
	index,
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
				<Link href={Routes.PORTFOLIO} className="c-btn">
					Go back
				</Link>
			}
		>
			<h3>Open-source projects</h3>

			<SectionGrid data={openSourceProjects} pagination />
		</Section>
	</Layout>
);

export default PortfolioOpenSourceProjects;
