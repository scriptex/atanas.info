import type { FC } from 'react';
import Carousel from 'react-round-carousel';

import lastFm from '@data/last.fm-insights.json';
import { formatDate } from '@scripts/shared';
import { ExternalLink } from '@components';
import { filteredData } from './utils';

interface Props {
	data: (typeof lastFm)['weeklyAlbumChart'] | (typeof lastFm)['topAlbums'];
	period: 'week' | 'month';
	condition: boolean;
}

export const SocialMusicCarousel: FC<Readonly<Props>> = ({ data, period, condition }: Props) =>
	condition ? (
		<div className="o-grid__item xs-12">
			<h3>Top albums for last {period}:</h3>

			<Carousel items={filteredData(data)} />
		</div>
	) : null;

export const SocialMusic: FC = () => {
	const { error, updated, topAlbums, weeklyAlbumChart } = lastFm;
	const topAlbumsLength = topAlbums.length;
	const weeklyAlbumChartLength = weeklyAlbumChart.length;
	const hasNoData = topAlbumsLength + weeklyAlbumChartLength === 0;

	return error || hasNoData ? null : (
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
						<SocialMusicCarousel
							data={weeklyAlbumChart}
							period="week"
							condition={weeklyAlbumChartLength > 0}
						/>

						<SocialMusicCarousel data={topAlbums} period="month" condition={topAlbumsLength > 0} />
					</div>
				</div>
			</div>
		</>
	);
};

export default SocialMusic;
