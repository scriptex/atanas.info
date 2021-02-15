/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import { Video, Section, ExternalLink } from '..';
import lastFm from '../../scripts/last.fm-insights.json';

export const SectionSocial: React.FunctionComponent = () => {
	const tracks = lastFm.weeklyTrackChart.weeklytrackchart.track.slice(0, 10);
	const artists = lastFm.weeklyArtistChart.weeklyartistchart.artist.slice(0, 10).map(item => item.apiDetails.artist);
	const albums = lastFm.weeklyAlbumChart.weeklyalbumchart.album
		.filter(album => !!album.apiDetails.album.image[2]['#text'])
		// @ts-ignore
		.sort((a, b) => Number(a.apiDetails.album.userplaycount) > Number(b.apiDetails.album.userplaycount))
		.slice(0, 10)
		.map(item => item.apiDetails.album);

	return (
		<Section id="social" hasShell={false} hasButton={true}>
			<Video name="social" />

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

							<codersrank-widget username="scriptex" branding={false}></codersrank-widget>
						</div>

						<div className="o-grid__item xs-12 sm-6">
							<h2>LinkedIn Profile</h2>

							<div
								className="LI-profile-badge"
								data-size="large"
								data-type="horizontal"
								data-theme="light"
								data-locale="en_US"
								data-vanity="scriptex"
								data-version="v1"
							>
								<ExternalLink
									href="https://bg.linkedin.com/in/scriptex?trk=profile-badge"
									className="LI-simple-link"
								>
									Atanas Atanasov
								</ExternalLink>
							</div>
						</div>

						<div className="o-grid__item xs-12 sm-6">
							<h2>Twitter Profile</h2>

							<TwitterTimelineEmbed
								theme="dark"
								options={{ height: '25rem' }}
								sourceType="profile"
								screenName="scriptexbg"
							/>
						</div>

						<div className="o-grid__item xs-12 sm-6">
							<h2>YouTube Channel</h2>

							<iframe
								src="//www.youtube.com/embed/?listType=user_uploads&list=scriptex"
								height="400"
								loading="lazy"
								className="youtube-wrapper"
							></iframe>
						</div>

						<div className="o-grid__item xs-12 sm-6">
							<h2>Spotify playlist</h2>

							<iframe
								src="https://open.spotify.com/embed/playlist/4MiRUEKhpi7Zb83GDxsV4W"
								allow="encrypted-media"
								width="300"
								height="380"
								className="spotify-player"
								frameBorder={0}
							></iframe>
						</div>
					</div>
				</div>
			</div>

			<header className="c-section__head">
				<div className="o-shell">
					<h1>Last.FM weekly statistics</h1>
				</div>
			</header>

			<div className="c-section__entry">
				<div className="o-shell">
					<div className="o-grid">
						<div className="o-grid__item xs-12 sm-6 md-4 lg-4">
							<h2>Top albums:</h2>

							<div className="c-last-fm">
								{albums.map((album, index) => (
									<ExternalLink href={album.url} key={index}>
										<img src={album.image[2]['#text']} />
										<strong>{album.name}</strong>
										by
										<span>{album.artist}</span>
									</ExternalLink>
								))}
							</div>
						</div>

						<div className="o-grid__item xs-12 sm-6 md-4 lg-4">
							<h2>Top artists:</h2>

							<div className="c-last-fm">
								{artists.map((artist, index) => (
									<ExternalLink href={artist.url} key={index}>
										<img src={artist.image[2]['#text']} />
										<strong>{artist.name}</strong>
									</ExternalLink>
								))}
							</div>
						</div>

						<div className="o-grid__item xs-12 sm-6 md-4 lg-4">
							<h2>Top tracks:</h2>

							<div className="c-last-fm">
								{tracks.map((track, index) => (
									<ExternalLink href={track.url} key={index}>
										<img src={track.image[2]['#text']} />
										<strong>{track.name}</strong>
										by
										<span>{track.artist['#text']}</span>
									</ExternalLink>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default SectionSocial;
