/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import lastFm from '../../scripts/last.fm-insights.json';
import { formatDate } from '../section-stats';
import { Section, Carousel, ExternalLink } from '..';

const filteredData = (data: any[]): any[] =>
	data
		.filter((album: any) => !!album.images[2]['#text'])
		.map((album: any) => ({
			image: album.images[2]['#text'],
			title: album.name,
			subtitle: album.artist
		}));

// codebeat:disable[ABC,LOC]
export const SectionSocial: React.FunctionComponent = () => {
	const { topAlbums, weeklyAlbumChart, updated }: any = lastFm;

	return (
		<Section
			id="social"
			style={{ backgroundImage: 'url(images/temp/desktop.jpg)' }}
			hasShell={false}
			hasButton={true}
			className=" fullsize-background"
		>
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
							<h2>Github Profile</h2>

							<iframe
								src="https://github.com/sponsors/scriptex/card"
								title="Sponsor scriptex"
								width="600"
								height="225"
								style={{ border: 0 }}
								loading="lazy"
								className="github-frame"
								frameBorder={0}
							></iframe>
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
								src="//www.youtube.com/embed/?listType=user_uploads&amp;list=scriptex"
								height="400"
								loading="lazy"
								className="youtube-frame"
							></iframe>
						</div>

						<div className="o-grid__item xs-12 sm-6">
							<h2>Spotify playlist</h2>

							<iframe
								src="https://open.spotify.com/embed/playlist/4MiRUEKhpi7Zb83GDxsV4W"
								allow="encrypted-media"
								width="300"
								height="380"
								loading="lazy"
								className="spotify-frame"
								frameBorder={0}
							></iframe>
						</div>
					</div>
				</div>
			</div>

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
		</Section>
	);
};
// codebeat:enable[ABC,LOC]

export default SectionSocial;
