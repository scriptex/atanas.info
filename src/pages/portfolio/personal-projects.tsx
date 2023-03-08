import Head from 'next/head';
import type { FC } from 'react';

import { Routes } from '@data/routes';
import { personalProjects } from '@data/projects';
import { portfolioSectionProps } from '.';
import { Button, Layout, Section, SectionGrid } from '@components';

export const PortfolioPersonalProjects: FC = () => (
	<Layout>
		<Head>
			<title>Personal Projects | Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
		</Head>

		<Section
			{...portfolioSectionProps}
			actions={
				<Button href={Routes.PORTFOLIO} type="link">
					Go back
				</Button>
			}
		>
			<h3>Personal projects</h3>

			<SectionGrid data={personalProjects} linkType="external" pagination />
		</Section>
	</Layout>
);

export default PortfolioPersonalProjects;
