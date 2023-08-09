import Link from 'next/link';
import Image from 'next/image';
import type { FC } from 'react';

import { Routes } from '@data/routes';
import { WebProject } from '@data/projects';
import { portfolioSectionProps } from '.';
import { getData, MongoDBProps, queryScreenshots } from '@lib/mongodb';
import { usePagination, useNetworkState, composeClassName } from '@scripts/shared';
import { Icon, Layout, Loader, Section, SectionNav, ExternalLink, Title } from '@components';

type Props = {
	data: WebProject[];
};

export const PortfolioWebApps: FC<Readonly<Props>> = ({ data = [] }: Props) => {
	const online = useNetworkState();
	const { menu, items, current, setCurrent } = usePagination(data);

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
					{items[current]?.map((project: WebProject) => (
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

				<SectionNav data={menu ?? []} name="title" small active={current} onClick={setCurrent} />
			</Section>
		</Layout>
	);
};

export const getStaticProps = async (): Promise<MongoDBProps<unknown[]>> => getData('Screenshots', queryScreenshots);

export default PortfolioWebApps;
