import * as React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import { ExternalLink } from '../components';

export type SocialItem = {
	title: string;
	element: JSX.Element;
};

export const socialItems: SocialItem[] = [
	{
		title: 'Codersrank Profile',
		element: <codersrank-widget username="scriptex" branding={false} />
	},
	{
		title: 'LinkedIn Profile',
		element: (
			<div
				className="badge-base LI-profile-badge linkedin-frame"
				data-size="large"
				data-type="HORIZONTAL"
				data-theme="dark"
				data-locale="en_US"
				data-vanity="scriptex"
				data-version="v1"
			/>
		)
	},
	{
		title: 'Github Profile',
		element: (
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
		)
	},
	{
		title: 'Twitter Profile',
		element: (
			<TwitterTimelineEmbed
				theme="dark"
				options={{ height: '25rem' }}
				sourceType="profile"
				screenName="scriptexbg"
			/>
		)
	},
	{
		title: 'YouTube Channel',
		element: (
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
		)
	},
	{
		title: 'Spotify playlist',
		element: (
			<iframe
				src="https://open.spotify.com/embed/playlist/37i9dQZF1EpzZomgLqaOnp?theme=0"
				allow="encrypted-media"
				width="100%"
				height={380}
				loading="lazy"
				className="spotify-frame"
				frameBorder={0}
			/>
		)
	},
	{
		title: 'Stackoverflow flair',
		element: (
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
		)
	}
];