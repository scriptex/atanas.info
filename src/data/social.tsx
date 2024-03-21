import { ExternalLink } from '@components';

export type SocialItem = {
	element: JSX.Element;
	index: number;
	title: string;
};

export const socialItems: SocialItem[] = [
	{
		element: <codersrank-widget branding={false} username="scriptex" />,
		index: 0,
		title: 'Codersrank Profile'
	},
	{
		element: (
			<iframe
				className="github-frame"
				height={400}
				loading="lazy"
				src="https://github.com/sponsors/scriptex/card"
				title="Sponsor scriptex"
				width={600}
			/>
		),
		index: 1,
		title: 'Github Profile'
	},
	{
		element: (
			<a
				className="twitter-timeline"
				data-dnt="true"
				data-height={400}
				data-lang="en"
				data-theme="dark"
				href="//twitter.com/scriptexbg?ref_src=twsrc%5Etfw"
			>
				Tweets by @scriptexbg
			</a>
		),
		index: 2,
		title: 'Twitter Feed'
	},
	{
		element: (
			<iframe
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				className="youtube-frame"
				height={400}
				loading="lazy"
				src="https://www.youtube.com/embed/?list=PLgLu3XOevO8_G7n5n9Mmoe-xPwuwpGDYr"
				title="YouTube video player"
			/>
		),
		index: 3,
		title: 'YouTube Channel'
	},
	{
		element: <div className="sk-instagram-feed" data-embed-id="25385561" />,
		index: 4,
		title: 'Instagram Feed'
	},
	{
		element: (
			<iframe
				allow="encrypted-media"
				className="spotify-frame"
				height={400}
				loading="lazy"
				src="https://open.spotify.com/embed/playlist/37i9dQZF1EpzZomgLqaOnp?theme=0"
				title="Spotify playlist"
				width="100%"
			/>
		),
		index: 5,
		title: 'Spotify playlist'
	},
	{
		element: <div className="sk-ww-linkedin-profile-post" data-embed-id="25385560" />,
		index: 6,
		title: 'LinkedIn Feed'
	},
	{
		element: (
			<div className="stackoverflow-frame">
				<ExternalLink href="https://stackoverflow.com/users/4140082/atanas-atanasov">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						alt="profile for Atanas Atanasov at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
						height={58}
						loading="lazy"
						src="https://stackoverflow.com/users/flair/4140082.png"
						title="profile for Atanas Atanasov at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
						width={208}
					/>
				</ExternalLink>
			</div>
		),
		index: 7,
		title: 'Stackoverflow flair'
	}
];
