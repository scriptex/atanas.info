import type { FC } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { ExternalLink, Layout, Section, Title } from '@components';
import { Routes } from '@data/routes';
import { getData, queryNPM } from '@lib/mongodb';
import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import { sectionStatsProps } from '@scripts/stats';
import type { NPMStatsPageProps, Packages, WithError, WithSum } from '@scripts/types';

const PackagesList: FC<Readonly<Packages>> = ({ data }: Packages) => (
	<div className="o-grid c-packages">
		{Object.keys(data).map((key: string) => {
			const item = data[key];
			const authors = item.author.split(',');

			return (
				<div className="o-grid__item xs-12 sm-6 md-4 lg-4" key={key}>
					<ExternalLink className="c-package" href={item.homepage}>
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

export const NPMStats: FC<Readonly<InferGetStaticPropsType<typeof getStaticProps>>> = ({ data, funding, partners }) => {
	if (!data || Object.keys(data).length === 0) {
		return null;
	}

	const { error, sum = null, ...packages } = data;

	if (error || sum === null) {
		return null;
	}

	return (
		<Layout funding={funding} partners={partners}>
			<Title text="NPM Stats" />

			<Section
				{...sectionStatsProps}
				actions={
					<Link className="c-btn" href={Routes.STATS}>
						Go back
					</Link>
				}
				hasShell={false}
			>
				<div className="c-section__entry c-section__entry--no-background c-section__entry--alt">
					<div className="o-shell">
						<h3>Statistics for NPM packages</h3>

						<h6>
							Total downloads for the past year: <strong>{sum as unknown as number}</strong>
						</h6>

						<PackagesList data={packages} />
					</div>
				</div>
			</Section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<NPMStatsPageProps> = async () => ({
	props: {
		data: (await getData('Insights', queryNPM)).props.data as Packages<WithSum & WithError>['data'],
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	},
	revalidate: 86400
});

export default NPMStats;
