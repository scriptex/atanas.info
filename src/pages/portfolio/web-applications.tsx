/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import type { FC } from 'react';

import webApps from '@data/projects-list.json';
import { Routes } from '@data/routes';
import { WebProject } from '@data/projects';
import { portfolioSectionProps } from '.';
import { useNetworkState, composeClassName } from '@scripts/shared';
import { Icon, Layout, Loader, Section, ExternalLink } from '@components';

export const PortfolioWebApps: FC = () => {
	const online = useNetworkState();

	return (
		<Layout>
			<Head>
				<title>Web Applications | Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
			</Head>

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
					{webApps.map((project: WebProject, index: number) => (
						<ExternalLink
							key={index}
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

export default PortfolioWebApps;
