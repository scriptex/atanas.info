import Head from 'next/head';
import Link from 'next/link';
import type { FC } from 'react';

import { Routes } from '@data/routes';
import { getData, queryNPM } from '@lib/mongodb';
import { sectionStatsProps } from '@scripts/stats';
import { Layout, Section, ExternalLink } from '@components';

type Package = {
	name: string;
	version: string;
	description: string;
	license: string;
	homepage: string;
	author: string;
	downloads: number;
};

type Packages<T = Record<string, Package>> = {
	data: Record<string, Package> & T;
};

type WithSum = {
	sum: number;
};

type WithError = {
	error?: boolean;
};

type Props = Packages<WithSum & WithError>;

export const Packages: FC<Readonly<Packages>> = ({ data }: Packages) => (
	<div className="o-grid c-packages">
		{Object.keys(data).map((key: string, index: number) => {
			const item = data[key];
			const authors = item.author.split(',');

			return (
				<div className="o-grid__item xs-12 sm-6 md-4 lg-4" key={index}>
					<ExternalLink href={item.homepage} className="c-package">
						<h4>{item.name}</h4>

						<p>{item.description}</p>

						<ul>
							<li>
								Version <strong>{item.version}</strong>
							</li>

							<li>
								Downloads: <strong>{item.downloads}</strong>
							</li>

							<li>
								{authors.length > 1 ? 'Authors: ' : 'Author: '}

								<strong>{item.author}</strong>
							</li>
						</ul>
					</ExternalLink>
				</div>
			);
		})}
	</div>
);

export const NPMStats: FC<Readonly<Props>> = ({ data }: Props) => {
	const { sum = null, error, ...packages } = data;

	if (!data || Object.keys(data).length === 0 || error || sum === null) {
		return null;
	}

	return (
		<Layout>
			<Head>
				<title>NPM Stats | Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
			</Head>

			<Section
				{...sectionStatsProps}
				actions={
					<Link href={Routes.STATS} className="c-btn">
						Go back
					</Link>
				}
				hasShell={false}
			>
				<div className="c-section__entry c-section__entry--no-background c-section__entry--alt">
					<div className="o-shell">
						<h3>Statistics for NPM packages</h3>

						<h6>
							Total downloads: <strong>{sum as unknown as number}</strong>
						</h6>

						<Packages data={packages} />
					</div>
				</div>
			</Section>
		</Layout>
	);
};

export const getStaticProps = async () => getData('Insights', queryNPM);

export default NPMStats;
