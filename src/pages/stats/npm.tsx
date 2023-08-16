import Link from 'next/link';
import type { FC } from 'react';

import { Routes } from '@data/routes';
import { sectionStatsProps } from '@scripts/stats';
import { getData, queryNPM, MongoDBProps } from '@lib/mongodb';
import { Layout, Section, ExternalLink, Title } from '@components';

import type { Packages, Props } from './types';

const PackagesList: FC<Readonly<Packages>> = ({ data }: Packages) => (
	<div className="o-grid c-packages">
		{Object.keys(data).map((key: string) => {
			const item = data[key];
			const authors = item.author.split(',');

			return (
				<div className="o-grid__item xs-12 sm-6 md-4 lg-4" key={key}>
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
	if (!data || Object.keys(data).length === 0) {
		return null;
	}

	const { sum = null, error, ...packages } = data;

	if (error || sum === null) {
		return null;
	}

	return (
		<Layout>
			<Title text="NPM Stats | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

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

						<PackagesList data={packages} />
					</div>
				</div>
			</Section>
		</Layout>
	);
};

export const getStaticProps = async (): Promise<MongoDBProps<unknown>> => getData('Insights', queryNPM);

export default NPMStats;
