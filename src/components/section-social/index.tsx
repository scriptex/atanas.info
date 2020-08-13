import * as React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import { Section, ExternalLink } from '..';

export const SectionSocial: React.FunctionComponent = () => (
	<Section id="social" hasShell={false} hasButton={true}>
		<header className="c-section__head">
			<div className="o-shell">
				<h1>Social</h1>
			</div>
		</header>

		<div className="c-section__entry">
			<div className="o-shell">
				<div className="o-grid">
					<div className="o-grid__item o-grid__item--1of2">
						<h2>Codersrank Profile</h2>

						<codersrank-widget username="scriptex"></codersrank-widget>
					</div>

					<div className="o-grid__item o-grid__item--1of2">
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

					<div className="o-grid__item o-grid__item--1of2">
						<h2>Twitter Profile</h2>

						<TwitterTimelineEmbed
							theme="dark"
							options={{ height: '25rem' }}
							sourceType="profile"
							screenName="scriptexbg"
						/>
					</div>

					<div className="o-grid__item o-grid__item--1of2">
						<h2>YouTube Channel</h2>

						<iframe
							src="//www.youtube.com/embed/?listType=user_uploads&list=scriptex"
							height="400"
							loading="lazy"
							className="youtube-wrapper"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	</Section>
);

export default SectionSocial;
