/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react';
import Carousel from 'react-round-carousel';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import lastFm from '../../scripts/last.fm-insights.json';
import { formatDate } from '../section-stats';
import { useScript, isPrerendering } from '../../scripts/shared';
import { Lines, Section, ExternalLink } from '..';

const filteredData = (data: any[]): any[] =>
	data
		.filter((album: any) => !!album.images[2]['#text'])
		.map(album => ({
			alt: album.name,
			image: album.images[2]['#text'],
			content: (
				<>
					<strong>{album.name}</strong>

					<span>{album.artist}</span>
				</>
			)
		}));

// codebeat:disable[ABC,LOC]
export const SectionSocial: React.FunctionComponent = () => {
	const { error, updated, topAlbums, weeklyAlbumChart }: any = lastFm;

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
		<Section id="social" hasShell={false} hasButton={true}>
			<Lines />

			<header className="c-section__head">
				<div className="o-shell">
					<h1>Social</h1>
				</div>
			</header>

			<div className="c-section__entry">
				<div className="o-shell">
					<div className="o-grid">
						<div className="o-grid__item xs-12 sm-6">
							<h2>Codersrank Profile</h2>

							{isPrerendering ? null : <codersrank-widget username="scriptex" branding={false} />}
						</div>

						<div className="o-grid__item xs-12 sm-6">
							<h2>LinkedIn Profile</h2>

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
							<h2>Github Profile</h2>

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
							<h2>Twitter Profile</h2>

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
							<h2>YouTube Channel</h2>

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
							<h2>Spotify playlist</h2>

							{isPrerendering ? null : (
								<iframe
									src="https://open.spotify.com/embed/playlist/37i9dQZF1EpzZomgLqaOnp?theme=0"
									allow="encrypted-media"
									width="100%"
									height={380}
									loading="lazy"
									className="spotify-frame"
									frameBorder={0}
									allowTransparency
								/>
							)}
						</div>

						<div className="o-grid__item xs-12 sm-6">
							<h2>Stackoverflow flair</h2>

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
					<header className="c-section__head">
						<div className="o-shell">
							<h1>
								<ExternalLink href="https://www.last.fm/user/scriptex">Last.FM</ExternalLink> statistics
							</h1>

							<small>Updated at {formatDate(updated, 'dd MMM yyyy HH:mm:ss')}</small>
						</div>
					</header>

					<div className="c-section__entry">
						<div className="o-shell">
							<div className="o-grid">
								<div className="o-grid__item xs-12">
									<h2>Top albums for last week:</h2>

									<Carousel items={filteredData(weeklyAlbumChart)} />
								</div>

								<div className="o-grid__item xs-12">
									<h2>Top albums for last month:</h2>

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
// codebeat:enable[ABC,LOC]

export default SectionSocial;
