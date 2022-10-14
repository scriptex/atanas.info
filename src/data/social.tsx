import * as React from 'react';

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
		title: 'Github Profile',
		element: (
			<iframe
				src="https://github.com/sponsors/scriptex/card"
				title="Sponsor scriptex"
				width={600}
				height={400}
				loading="lazy"
				className="github-frame"
				frameBorder={0}
			/>
		)
	},

	{
		title: 'Twitter Profile',
		element: (
			<a href="//twitter.com/scriptexbg" className="twitter-timeline" data-dnt="true" data-theme="dark">
				Tweets by scriptexbg
			</a>
		)
	},
	{
		title: 'YouTube Channel',
		element: (
			<iframe
				src="https://www.youtube.com/embed/?list=PLgLu3XOevO8_G7n5n9Mmoe-xPwuwpGDYr"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				height={400}
				loading="lazy"
				className="youtube-frame"
				frameBorder={0}
				allowFullScreen
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
				height={400}
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
						width={208}
						height={58}
						loading="lazy"
					/>
				</ExternalLink>
			</div>
		)
	}
];
