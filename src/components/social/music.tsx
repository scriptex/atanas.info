import type { FC } from 'react';

import Carousel from 'react-round-carousel';

import { ExternalLink, StatsEntry } from '@components';
import type { LastFMAlbum, LastFMInsights } from '@insights/utils';
import { formatDate } from '@scripts/shared';

import { filteredData } from './utils';

type Props = {
	condition: boolean;
	data: LastFMAlbum[];
	period: 'week' | 'month';
};

const SocialMusicCarousel: FC<Readonly<Props>> = ({ condition, data, period }: Props) =>
	condition ? (
		<div className="o-grid__item xs-12">
			<h3>Top albums for last {period}:</h3>

			<Carousel items={filteredData(data)} />
		</div>
	) : null;

export const SocialMusic: FC<Readonly<{ data: LastFMInsights }>> = ({ data }) => {
	const { error, info, topAlbums, updated, weeklyAlbumChart } = data;
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

			{info?.user && (
				<div className="c-section--stats">
					<StatsEntry
						data={[
							{ index: 0, title: 'Last.FM username', value: info.user.name },
							{ index: 1, title: 'Total albums', value: info.user.album_count },
							{ index: 2, title: 'Total artists', value: info.user.artist_count },
							{ index: 3, title: 'Total plays', value: info.user.playcount },
							{ index: 4, title: 'Total tracks', value: info.user.track_count },
							{
								index: 5,
								title: 'Listening since',
								value: formatDate(info.user.registered['#text'] * 1000, 'yyyy')
							}
						]}
						title=""
					/>
				</div>
			)}

			<div className="c-section__entry">
				<div className="o-shell">
					<div className="o-grid">
						<SocialMusicCarousel
							condition={weeklyAlbumChartLength > 0}
							data={weeklyAlbumChart}
							period="week"
						/>

						<SocialMusicCarousel condition={topAlbumsLength > 0} data={topAlbums} period="month" />
					</div>
				</div>
			</div>
		</>
	);
};

export default SocialMusic;
