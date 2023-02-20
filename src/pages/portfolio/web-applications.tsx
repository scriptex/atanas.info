/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import type { FC } from 'react';

import { Routes } from '@data/routes';
import { WebProject } from '@data/projects';
import { portfolioSectionProps } from '.';
import { useNetworkState, composeClassName } from '@scripts/shared';
import { getData, MongoDBProps, queryScreenshots } from '@lib/mongodb';
import { Icon, Button, Layout, Loader, Section, ExternalLink } from '@components';

type Props = {
	data: WebProject[];
};

export const PortfolioWebApps: FC<Readonly<Props>> = ({ data = [] }: Props) => {
	const online = useNetworkState();

	return (
		<Layout>
			<Head>
				<title>Web Applications | Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
			</Head>

			<Section
				{...portfolioSectionProps}
				actions={
					<Button href={Routes.PORTFOLIO} type="link">
						Go back
					</Button>
				}
			>
				<h3>Web applications</h3>

				<div className="c-section__body">
					{data.map((project: WebProject) => (
						<ExternalLink
							key={project.url}
							href={project.url}
							className={composeClassName('', [], [!project.url ? 'disabled' : ''])}
						>
							<Loader />

							{online || !project.url ? (
								<img width="600" loading="lazy" src={project.image} alt={project.title} />
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
			</Section>
		</Layout>
	);
};

export const getStaticProps = async (): Promise<MongoDBProps<unknown>> => getData('Screenshots', queryScreenshots);

export default PortfolioWebApps;
