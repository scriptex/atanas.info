import Link from 'next/link';
import type { FC } from 'react';

import { Routes } from '@data/routes';
import { personalProjects } from '@data/projects';
import { portfolioSectionProps } from '.';
import { Layout, Section, SectionGrid, Title } from '@components';

export const PortfolioPersonalProjects: FC = () => (
	<Layout>
		<Title text="Personal Projects | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

		<Section
			{...portfolioSectionProps}
			actions={
				<Link href={Routes.PORTFOLIO} className="c-btn">
					Go back
				</Link>
			}
		>
			<h3>Personal projects</h3>

			<SectionGrid data={personalProjects} linkType="external" pagination />
		</Section>
	</Layout>
);

export default PortfolioPersonalProjects;
