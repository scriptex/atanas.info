import { ReactNode } from 'react';

import { ExternalLink } from '@components';

export type SocialItem = {
	element: ReactNode;
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
		title: 'Github Sponsors Profile'
	},
	{
		element: <div className="elfsight-app-66c4f997-1941-4133-86b6-8a6ab499ed03" data-elfsight-app-lazy />,
		index: 2,
		title: 'X (Twitter) Feed'
	},
	{
		element: <div className="elfsight-app-db464ddb-0c81-49f0-8036-d6ae51aae7d8" data-elfsight-app-lazy />,
		index: 3,
		title: 'Instagram Feed'
	},
	{
		element: <div className="elfsight-app-b53ffe08-8adc-4751-96ce-e2c209f9709a" data-elfsight-app-lazy />,
		index: 4,
		title: 'Personal LinkedIn Feed'
	},
	{
		element: <div className="elfsight-app-d9e21bd3-cca5-48d6-adb4-c5d7f94becdf" data-elfsight-app-lazy />,
		index: 5,
		title: 'Company LinkedIn Feed'
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
		index: 6,
		title: 'YouTube Channel'
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
		index: 7,
		title: 'Spotify playlist'
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
		index: 8,
		title: 'Stack Overflow flair'
	}
];
