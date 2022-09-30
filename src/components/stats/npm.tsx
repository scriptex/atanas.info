import * as React from 'react';
import { Link } from 'react-router-dom';

import npmStats from '../../data/npm-stats.json';
import { Routes } from '../../data/routes';
import { sectionStatsProps } from '.';
import { Section, ExternalLink } from '..';

interface Package {
	name: string;
	version: string;
	description: string;
	license: string;
	homepage: string;
	author: string;
	downloads: number;
}

interface Props {
	data: Record<string, Package>;
}

export const Packages: React.FC<Readonly<Props>> = ({ data }: Props) => (
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

export const NPMStats: React.FC = () => {
	const error: boolean = (npmStats as any)?.error;

	if (!npmStats || Object.keys(npmStats).length === 0 || error) {
		return null;
	}

	const { sum = null, ...packages } = npmStats;

	if (sum === null) {
		return null;
	}

	return (
		<Section
			{...sectionStatsProps}
			actions={
				<Link to={Routes.STATS} className="c-btn">
					Go back
				</Link>
			}
			hasShell={false}
		>
			<div className="c-section__entry c-section__entry--no-background c-section__entry--alt">
				<div className="o-shell">
					<h3>Statistics for NPM packages</h3>

					<h6>
						Total downloads: <strong>{sum}</strong>
					</h6>

					<Packages data={packages} />
				</div>
			</div>
		</Section>
	);
};

export default NPMStats;
