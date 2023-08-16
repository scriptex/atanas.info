import Link from 'next/link';
import type { FC } from 'react';

import { Routes } from '@data/routes';
import { useCurrentPageParam } from '@scripts/shared';
import { Layout, Section, SectionGrid, Title } from '@components';
import { openSourceProjects, portfolioSectionProps } from '@data/pages';

export const PortfolioOpenSourceProjects: FC = () => {
	const page = useCurrentPageParam();

	return (
		<Layout>
			<Title text="Open Source | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

			<Section
				{...portfolioSectionProps}
				actions={
					<Link href={Routes.PORTFOLIO} className="c-btn">
						Go back
					</Link>
				}
			>
				<h3>Open-source projects</h3>

				<SectionGrid<true>
					data={openSourceProjects}
					page={page}
					route={Routes.PORTFOLIO_OPEN_SOURCE_PROJECTS}
					pagination
				/>
			</Section>
		</Layout>
	);
};

export default PortfolioOpenSourceProjects;
