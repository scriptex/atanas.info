import * as React from 'react';

import { badges } from '../../assets/scripts/stats';
import { Section, ExternalLink } from '..';

export const SectionStats: React.FunctionComponent = () => (
	<Section id="stats" hasButton={true}>
		<h1>Stats</h1>

		<div className="o-grid">
			<div className="o-grid__item o-grid__item--1of2">
				<h2>
					Commits (based on data by{' '}
					<ExternalLink href="https://sourcerer.io/scriptex">Sourcerer</ExternalLink>)
				</h2>

				<ul>
					{badges.map((src: string, index: number) => (
						<li key={index}>
							<ExternalLink href="https://sourcerer.io/scriptex">
								<img src={src} />
							</ExternalLink>
						</li>
					))}
				</ul>
			</div>

			<div className="o-grid__item o-grid__item--1of2">
				<h2>
					<a
						href="https://profile.codersrank.io/user/scriptex"
						target="_blank"
						rel="noopener noreferrer nofollow"
					>
						Codersrank
					</a>{' '}
					Profile
				</h2>

				<codersrank-widget username="scriptex"></codersrank-widget>
			</div>
		</div>
	</Section>
);

export default SectionStats;
