import Link from 'next/link';
import type { FC } from 'react';

import { Routes } from '@data/routes';
import { useCurrentPageParam } from '@scripts/shared';
import { portfolioSectionProps } from '..';
import { openSourceProjectsList } from '@data/open-source';
import { Layout, Section, SectionGrid, Title } from '@components';

export const openSourceProjects = openSourceProjectsList.map((repo, index) => ({
	url: repo?.url,
	text: repo?.title,
	index,
	image: `/images/unsplash/${(index % 25) + 1}.jpeg`
}));

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
