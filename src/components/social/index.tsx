import * as React from 'react';
import Carousel from 'react-round-carousel';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import lastFm from '../../data/last.fm-insights.json';
import { formatDate } from '../stats';
import { useScript, isPrerendering } from '../../scripts/shared';
import { Lines, Section, ExternalLink } from '..';

type TopAlbum = typeof lastFm['topAlbums'][0];
type WeeklyAlbumChart = typeof lastFm['weeklyAlbumChart'][0];

const filteredData = (data: TopAlbum[] | WeeklyAlbumChart[]) =>
	data
		.filter((album: TopAlbum | WeeklyAlbumChart) => !!album?.images[2]['#text'])
		.map(album => ({
			alt: album?.name,
			image: album?.images[2]['#text'],
			content: (
				<>
					<strong>{album?.name}</strong>

					<span>{album?.artist}</span>
				</>
			)
		}));

export const SectionSocial: React.FC = () => {
	const { error, updated, topAlbums, weeklyAlbumChart } = lastFm;

	if (!isPrerendering) {
		useScript('https://profile.codersrank.io/widget/widget.js');
		useScript('https://platform.linkedin.com/badges/js/profile.js', true);
	}

	React.useEffect(() => {
		document.documentElement.classList.add('page-social');

		return () => {
			document.documentElement.classList.remove('page-social');
		};
	});

	return (
		<Section id="social" title="Social" hasShell={false} hasButton={true}>
			<Lines />

			<div className="c-section__entry">
				<div className="o-shell">
					<div className="o-grid">
						<div className="o-grid__item xs-12 sm-6">
							<h3>Codersrank Profile</h3>

							{isPrerendering ? null : <codersrank-widget username="scriptex" branding={false} />}
						</div>

						<div className="o-grid__item xs-12 sm-6">
							<h3>LinkedIn Profile</h3>

							{isPrerendering ? null : (
								<div
									className="badge-base LI-profile-badge linkedin-frame"
									data-size="large"
									data-type="HORIZONTAL"
									data-theme="dark"
									data-locale="en_US"
									data-vanity="scriptex"
									data-version="v1"
								/>
							)}
						</div>

						<div className="o-grid__item xs-12 sm-6">
							<h3>Github Profile</h3>

							{isPrerendering ? null : (
								<iframe
									src="https://github.com/sponsors/scriptex/card"
									title="Sponsor scriptex"
									width="600"
									height="225"
									style={{ border: 0 }}
									loading="lazy"
									className="github-frame"
									frameBorder={0}
								/>
							)}
						</div>

						<div className="o-grid__item xs-12 sm-6">
							<h3>Twitter Profile</h3>

							{isPrerendering ? null : (
								<TwitterTimelineEmbed
									theme="dark"
									options={{ height: '25rem' }}
									sourceType="profile"
									screenName="scriptexbg"
								/>
							)}
						</div>

						<div className="o-grid__item xs-12 sm-6">
							<h3>YouTube Channel</h3>

							{isPrerendering ? null : (
								<iframe
									src="https://www.youtube.com/embed/?list=PLgLu3XOevO8_G7n5n9Mmoe-xPwuwpGDYr"
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									height="400"
									loading="lazy"
									className="youtube-frame"
									frameBorder={0}
									allowFullScreen={true}
								/>
							)}
						</div>

						<div className="o-grid__item xs-12 sm-6">
							<h3>Spotify playlist</h3>

							{isPrerendering ? null : (
								<iframe
									src="https://open.spotify.com/embed/playlist/37i9dQZF1EpzZomgLqaOnp?theme=0"
									allow="encrypted-media"
									width="100%"
									height={380}
									loading="lazy"
									className="spotify-frame"
									frameBorder={0}
								/>
							)}
						</div>

						<div className="o-grid__item xs-12 sm-6">
							<h3>Stackoverflow flair</h3>

							{isPrerendering ? null : (
								<div className="stackoverflow-frame">
									<ExternalLink href="https://stackoverflow.com/users/4140082/atanas-atanasov">
										<img
											src="https://stackoverflow.com/users/flair/4140082.png"
											alt="profile for Atanas Atanasov at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
											title="profile for Atanas Atanasov at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
											width="208"
											height="58"
										/>
									</ExternalLink>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>

			{error ? null : (
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
			)}
		</Section>
	);
};

export default SectionSocial;
