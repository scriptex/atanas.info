import Link from 'next/link';
import Image from 'next/image';
import type { FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Routes } from '@data/routes';
import type { WebProject } from '@data/projects';
import { portfolioSectionProps } from '@data/pages';
import { getData, queryScreenshots } from '@lib/mongodb';
import type { PortfolioWebAppsPageData } from '@scripts/types';
import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import { Icon, Layout, Loader, Section, SectionNav, ExternalLink, Title } from '@components';
import { usePagination, useNetworkState, composeClassName, useCurrentPageParam } from '@scripts/shared';

export const PortfolioWebApps: FC<Readonly<InferGetStaticPropsType<typeof getStaticProps>>> = ({
	data = [],
	funding,
	partners
}) => {
	const page = useCurrentPageParam();
	const online = useNetworkState();
	const { menu, items } = usePagination(data);

	return !items ? null : (
		<Layout funding={funding} partners={partners}>
			<Title text="Web Applications | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

			<Section
				{...portfolioSectionProps}
				actions={
					<Link href={Routes.PORTFOLIO} className="c-btn">
						Go back
					</Link>
				}
			>
				<h3>Web applications</h3>

				<div className="c-section__body">
					{items[page - 1]?.map((project: WebProject) => (
						<ExternalLink
							key={project.index}
							href={project.url}
							className={composeClassName('', [], [!project.url ? 'disabled' : ''])}
						>
							<Loader />

							{online || !project.url ? (
								<Image
									src={project.image}
									alt={project.title}
									width="1280"
									height="1000"
									loading="lazy"
								/>
							) : (
								<Icon name="svg-disconnected " className="svg-disconnected" />
							)}

							<section>
								<strong>{project.title}</strong>

								<span>
									<small>Technologies used:</small>
									<br />
									{project.description}
								</span>
							</section>
						</ExternalLink>
					))}
				</div>

				<SectionNav data={menu ?? []} name="title" small route={Routes.PORTFOLIO_WEB_APPS} active={page} />
			</Section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<PortfolioWebAppsPageData> = async () => ({
	props: {
		data: (await getData('Screenshots', queryScreenshots)).props.data as WebProject[],
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	}
});

export default PortfolioWebApps;
