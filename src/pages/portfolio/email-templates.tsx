/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import type { FC } from 'react';

import { Routes } from '@data/routes';
import { emailTemplates } from '@data/projects';
import { Layout, Section } from '@components';
import { portfolioSectionProps } from '.';

export const PortfolioMobileApps: FC = () => (
	<Layout>
		<Head>
			<title>Email Templates | Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
		</Head>

		<Section
			{...portfolioSectionProps}
			actions={
				<Link href={Routes.PORTFOLIO} className="c-btn">
					Go back
				</Link>
			}
		>
			<h3>Mobile applications</h3>

			{emailTemplates.map(img => (
				<a href={img} key={img}>
					<img src={img} alt="" />
				</a>
			))}
		</Section>
	</Layout>
);

export default PortfolioMobileApps;
