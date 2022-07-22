import * as React from 'react';

import npmStats from '../../data/npm-stats.json';
import { ExternalLink } from '..';

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
		<div className="c-section__entry c-section__entry--no-background">
			<div className="o-shell">
				<h3>Statistics for NPM packages</h3>

				<h6>
					Total downloads: <strong>{sum}</strong>
				</h6>

				<div className="o-grid c-packages">
					{Object.keys(packages).map((key: string, index: number) => {
						const item = (packages as any)[key];
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
			</div>
		</div>
	);
};

export default NPMStats;
