import * as React from 'react';
import Carousel from 'react-round-carousel';

import lastFm from '../../data/last.fm-insights.json';
import { formatDate } from '../../scripts/shared';
import { ExternalLink } from '..';
import { filteredData } from './utils';

export const SocialMusic: React.FC = () => {
	const { error, updated, topAlbums, weeklyAlbumChart } = lastFm;

	return error ? null : (
		<>
			<header className="c-section__header">
				<h2>
					<ExternalLink href="https://www.last.fm/user/scriptex">Last.FM</ExternalLink> statistics
					<small>Updated at {formatDate(updated, 'dd MMM yyyy HH:mm:ss')}</small>
				</h2>
			</header>

			<div className="c-section__entry">
				<div className="o-shell">
					<div className="o-grid">
						<div className="o-grid__item xs-12">
							<h3>Top albums for last week:</h3>

							<Carousel items={filteredData(weeklyAlbumChart)} />
						</div>

						<div className="o-grid__item xs-12">
							<h3>Top albums for last month:</h3>

							<Carousel items={filteredData(topAlbums)} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SocialMusic;
