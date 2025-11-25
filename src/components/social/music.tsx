import type { FC } from 'react';
import { useState } from 'react';

import { UTCDate } from '@date-fns/utc';
import { formatDistance } from 'date-fns/formatDistance';
import type { LastFMRecentTrack, LastFMRecentTracksResponse } from 'lastfm-node-client';
import useInterval from 'use-interval';

import type { LastFMAlbum, LastFMInsights } from '@insights/utils';

// Keep a copy of Carousel in `/components` until I figure out why the imported version breaks with React 19
import type { CarouselItem } from '@components';
import { Carousel, ExternalLink, Loader, StatsEntry } from '@components';

import { formatDate } from '@scripts/shared';

import { filteredData } from './utils';

type Props = {
	condition: boolean;
	data: LastFMAlbum[];
	period: 'month' | 'week';
};

const SocialMusicCarousel: FC<Readonly<Props>> = ({ condition, data, period }: Props) =>
	condition ? (
		<div className="o-grid__item xs-12">
			<h3>Top albums for last {period}:</h3>

			<Carousel items={filteredData(data)} />
		</div>
	) : null;

const toCarouselItems = (data: LastFMRecentTrack[]) =>
	data
		.slice(0, 30)
		.map(item => ({
			alt: `${item.artist['#text']} - ${item.name}`,
			content: (
				<>
					<span>
						{item.artist['#text']} - {item.name}
					</span>

					{item['@attr']?.nowplaying ? (
						<strong>Now playing</strong>
					) : item.date?.uts ? (
						<strong>{formatDistance(new UTCDate(), new UTCDate(Number(item.date.uts) * 1000))} ago</strong>
					) : null}
				</>
			),
			image: item.image.at(-1)?.['#text'] ?? ''
		}))
		.reduce(
			(result: CarouselItem[], item: CarouselItem) =>
				result.find(el => el.alt === item.alt) ? result : [...result, item],
			[]
		);

const fetchRecentTracks = (
	setData: (data: CarouselItem[]) => void,
	setError: (value: boolean) => void,
	setLoading: (value: boolean) => void
) => {
	setLoading(true);

	fetch('/api/last-fm')
		.then(r => r.json())
		.then((r: LastFMRecentTracksResponse) => {
			const hasError = 'error' in r;

			setError(hasError);

			if (!r.recenttracks?.track?.length) {
				setData([]);
			} else {
				setData(hasError ? [] : toCarouselItems(r.recenttracks.track));
			}
		})
		.catch(() => setError(true))
		.finally(() => setLoading(false));
};

export const SocialMusic: FC<Readonly<{ data: LastFMInsights }>> = ({ data }) => {
	const { error, info, topAlbums, updated, weeklyAlbumChart } = data;
	const topAlbumsLength = topAlbums.length;
	const weeklyAlbumChartLength = weeklyAlbumChart.length;
	const hasNoData = topAlbumsLength + weeklyAlbumChartLength === 0;

	const [recentTracks, setRecentTracks] = useState<CarouselItem[]>([]);
	const [recentTracksError, setRecentTracksError] = useState(false);
	const [recentTracksLoading, setRecentTracksLoading] = useState(false);

	useInterval(() => fetchRecentTracks(setRecentTracks, setRecentTracksError, setRecentTracksLoading), 30000, true);

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

						<div className="o-grid__item xs-12 c-recent-tracks">
							<h3>Recent tracks:</h3>

							{recentTracksLoading && recentTracks.length === 0 ? (
								<Loader />
							) : recentTracksError ? (
								<p className="c-recent-tracks__error">Error fetching recent tracks.</p>
							) : recentTracks.length === 0 ? (
								<p className="c-recent-tracks__empty">No recent tracks to show.</p>
							) : (
								<>
									<Carousel items={recentTracks} />
									{recentTracksLoading && <Loader />}
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SocialMusic;
