import Link from 'next/link';
import Image from 'next/image';
import type { FC } from 'react';

import { Routes } from '@data/routes';
import { WebProject } from '@data/projects';
import { portfolioSectionProps } from '.';
import { getData, MongoDBProps, queryScreenshots } from '@lib/mongodb';
import { Icon, Layout, Loader, Section, SectionNav, ExternalLink, Title } from '@components';
import { usePagination, useNetworkState, composeClassName, useCurrentPageParam } from '@scripts/shared';

type Props = {
	data: WebProject[];
};

export const PortfolioWebApps: FC<Readonly<Props>> = ({ data = [] }: Props) => {
	const page = useCurrentPageParam();
	const online = useNetworkState();
	const { menu, items } = usePagination(data);

	return !items ? null : (
		<Layout>
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

export const getStaticProps = async (): Promise<MongoDBProps<unknown[]>> => getData('Screenshots', queryScreenshots);

export default PortfolioWebApps;
