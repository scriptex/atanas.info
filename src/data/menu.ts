import { Routes } from './routes';

export type MenuItem = {
	rel?: string;
	href: string;
	title: string;
	links?: MenuItem[];
	index: number;
	target?: string;
	content: string;
};

export const menuItems: Array<Readonly<MenuItem>> = [
	{
		href: Routes.HOME,
		index: 0,
		title: 'Back to homepage',
		content: 'Home'
	},
	{
		href: Routes.ABOUT,
		index: 1,
		title: 'About me',
		content: 'About'
	},
	{
		href: Routes.TIMELINE,
		index: 2,
		title: 'Life events',
		content: 'Timeline'
	},
	{
		href: Routes.SKILLS,
		index: 3,
		title: 'My skills',
		content: 'Skills'
	},
	{
		href: Routes.RESUME,
		index: 4,
		title: 'My resume',
		content: 'Resume'
	},
	{
		href: Routes.INTERACTIVE_RESUME,
		index: 5,
		title: 'My interactive resume',
		content: 'Interactive resume'
	},
	{
		href: Routes.PORTFOLIO,
		index: 6,
		title: 'My portfolio',
		content: 'Portfolio',
		links: [
			{
				href: Routes.PORTFOLIO_WEB_APPS,
				index: 0,
				title: 'My web apps portfolio',
				content: 'Web'
			},
			{
				href: Routes.PORTFOLIO_MOBILE_APPS,
				index: 1,
				title: 'My mobile apps portfolio',
				content: 'Mobile'
			},
			{
				href: Routes.PORTFOLIO_AUTOMOTIVE_APPS,
				index: 2,
				title: 'My automotive apps portfolio',
				content: 'Automotive'
			},
			{
				href: Routes.PORTFOLIO_EMAIL_TEMPLATES,
				index: 3,
				title: 'Email templates portfolio',
				content: 'Email templates'
			},
			{
				href: Routes.PORTFOLIO_PERSONAL_PROJECTS,
				index: 4,
				title: 'My personal projects',
				content: 'Personal'
			},
			{
				href: Routes.PORTFOLIO_OPEN_SOURCE_PROJECTS,
				index: 5,
				title: 'My open source projects',
				content: 'Open source'
			}
		]
	},
	{
		href: Routes.STATS,
		index: 7,
		title: 'My stats',
		content: 'Stats',
		links: [
			{
				href: Routes.STATS_GITHUB,
				index: 0,
				title: 'My Github profile stats',
				content: 'Github'
			},
			{
				href: Routes.STATS_GITLAB,
				index: 1,
				title: 'My Gitlab profile stats',
				content: 'Gitlab'
			},
			{
				href: Routes.STATS_NPM,
				index: 2,
				title: 'My NPM profile stats',
				content: 'NPM'
			}
		]
	},
	{
		href: Routes.SLIDES,
		index: 8,
		title: 'My presentations',
		content: 'Slides'
	},
	{
		href: Routes.VIDEOS,
		index: 9,
		title: 'My video presentations',
		content: 'Videos'
	},
	{
		href: Routes.ARTICLES,
		index: 10,
		title: 'My published articles',
		content: 'Articles'
	},
	{
		href: Routes.BLOG,
		index: 11,
		title: 'My blog',
		content: 'Blog'
	},
	{
		href: Routes.CERTIFICATES,
		index: 12,
		title: 'My certificates',
		content: 'Certificates'
	},
	{
		href: Routes.SOCIAL,
		index: 13,
		title: 'Social widgets',
		content: 'Social'
	},
	{
		href: Routes.MUSIC,
		index: 14,
		title: 'My music',
		content: 'Music'
	}
];
