import type { FC } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { ExternalLink, Icon, Layout, Loader, Section, SectionNav, Title } from '@components';
import { portfolioSectionProps } from '@data/pages';
import type { WebProject } from '@data/projects';
import { Routes } from '@data/routes';
import { getData, queryScreenshots } from '@lib/mongodb';
import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import { composeClassName, useCurrentPageParam, useNetworkState, usePagination } from '@scripts/shared';
import type { PortfolioWebAppsPageData } from '@scripts/types';

export const PortfolioWebApps: FC<Readonly<InferGetStaticPropsType<typeof getStaticProps>>> = ({
	data = [],
	funding,
	partners
}) => {
	const page = useCurrentPageParam();
	const online = useNetworkState();
	const { items, menu } = usePagination(data);

	return !items ? null : (
		<Layout funding={funding} partners={partners}>
			<Title text="Web Applications" />

			<Section
				{...portfolioSectionProps}
				actions={
					<Link className="c-btn" href={Routes.PORTFOLIO}>
						Go back
					</Link>
				}
			>
				<h3>Web applications</h3>

				<div className="c-section__body">
					{items[page - 1]?.map((project: WebProject) => (
						<ExternalLink
							className={composeClassName('', [], [!project.url ? 'disabled' : ''])}
							href={project.url}
							key={project.index}
						>
							<Loader />

							{online || !project.url ? (
								<Image
									alt={project.title}
									height="1000"
									loading="lazy"
									src={project.image}
									width="1280"
								/>
							) : (
								<Icon className="svg-disconnected" name="svg-disconnected " />
							)}

							<section>
								<strong>{project.title}</strong>

								<span>
									<small>Technologies used:</small>
									<br />
									{project.description}
								</span>

								{project.text && (
									<strong>
										<em>{project.text}</em>
									</strong>
								)}
							</section>
						</ExternalLink>
					))}
				</div>

				<SectionNav active={page} data={menu ?? []} name="title" route={Routes.PORTFOLIO_WEB_APPS} small />
			</Section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<PortfolioWebAppsPageData> = async () => ({
	props: {
		data: (await getData('Screenshots', queryScreenshots)).props.data as WebProject[],
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	},
	revalidate: 86400
});

export default PortfolioWebApps;
