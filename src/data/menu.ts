import { Routes } from './routes';

export type MenuItem = {
	content: string;
	href: string;
	index: number;
	links?: MenuItem[];
	rel?: string;
	target?: string;
	title: string;
};

export const menuItems: Array<Readonly<MenuItem>> = [
	{
		content: 'Home',
		href: Routes.HOME,
		index: 0,
		title: 'Back to homepage'
	},
	{
		content: 'About',
		href: Routes.ABOUT,
		index: 1,
		title: 'About me'
	},
	{
		content: 'Timeline',
		href: Routes.TIMELINE,
		index: 2,
		title: 'Life events'
	},
	{
		content: 'Skills',
		href: Routes.SKILLS,
		index: 3,
		title: 'My skills'
	},
	{
		content: 'Resume',
		href: Routes.RESUME,
		index: 4,
		title: 'My resume'
	},
	{
		content: 'Interactive resume',
		href: Routes.INTERACTIVE_RESUME,
		index: 5,
		title: 'My interactive resume'
	},
	{
		content: 'Portfolio',
		href: Routes.PORTFOLIO,
		index: 6,
		links: [
			{
				content: 'Web',
				href: Routes.PORTFOLIO_WEB_APPS,
				index: 0,
				title: 'My web apps portfolio'
			},
			{
				content: 'Mobile',
				href: Routes.PORTFOLIO_MOBILE_APPS,
				index: 1,
				title: 'My mobile apps portfolio'
			},
			{
				content: 'Automotive',
				href: Routes.PORTFOLIO_AUTOMOTIVE_APPS,
				index: 2,
				title: 'My automotive apps portfolio'
			},
			{
				content: 'Email templates',
				href: Routes.PORTFOLIO_EMAIL_TEMPLATES,
				index: 3,
				title: 'Email templates portfolio'
			},
			{
				content: 'Personal',
				href: Routes.PORTFOLIO_PERSONAL_PROJECTS,
				index: 4,
				title: 'My personal projects'
			},
			{
				content: 'Open source',
				href: Routes.PORTFOLIO_OPEN_SOURCE_PROJECTS,
				index: 5,
				title: 'My open source projects'
			}
		],
		title: 'My portfolio'
	},
	{
		content: 'Stats',
		href: Routes.STATS,
		index: 7,
		links: [
			{
				content: 'Github',
				href: Routes.STATS_GITHUB,
				index: 0,
				title: 'My Github profile stats'
			},
			{
				content: 'Gitlab',
				href: Routes.STATS_GITLAB,
				index: 1,
				title: 'My Gitlab profile stats'
			},
			{
				content: 'NPM',
				href: Routes.STATS_NPM,
				index: 2,
				title: 'My NPM profile stats'
			}
		],
		title: 'My stats'
	},
	{
		content: 'Slides',
		href: Routes.SLIDES,
		index: 8,
		title: 'My presentations'
	},
	{
		content: 'Videos',
		href: Routes.VIDEOS,
		index: 9,
		title: 'My video presentations'
	},
	{
		content: 'Testimonials',
		href: Routes.TESTIMONIALS,
		index: 10,
		title: "Testimonials I've received throughout the years"
	},
	{
		content: 'Occupation',
		href: Routes.OCCUPATION,
		index: 11,
		title: 'My current occupation'
	},
	{
		content: 'Articles',
		href: Routes.ARTICLES,
		index: 12,
		title: 'My published articles'
	},
	{
		content: 'Blog',
		href: Routes.BLOG,
		index: 13,
		title: 'My blog'
	},
	{
		content: 'Certificates',
		href: Routes.CERTIFICATES,
		index: 14,
		title: 'My certificates'
	},
	{
		content: 'Social',
		href: Routes.SOCIAL,
		index: 15,
		title: 'Social widgets'
	},
	{
		content: 'Music',
		href: Routes.MUSIC,
		index: 16,
		title: 'My music'
	}
];
