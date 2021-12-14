import { Routes } from './routes';
import { isPrerendering } from '../scripts/shared';

export interface MenuItem {
	rel?: string;
	href: string;
	title: string;
	target?: string;
	content: string;
}

export const menuItems: Array<Readonly<MenuItem>> = [
	{
		href: Routes.HOME,
		title: 'Back to homepage',
		content: 'Home'
	},
	{
		href: Routes.ABOUT,
		title: 'About me',
		content: 'About'
	},
	{
		href: Routes.TIMELINE,
		title: 'Life events',
		content: 'Timeline'
	},
	{
		href: Routes.SKILLS,
		title: 'My skills',
		content: 'Skills'
	},
	{
		href: Routes.PORTFOLIO,
		title: 'My portfolio',
		content: 'Portfolio'
	},
	{
		href: Routes.STATS,
		title: 'My stats',
		content: 'Stats'
	},
	{
		href: Routes.SLIDES,
		title: 'My presentations',
		content: 'Slides'
	},
	{
		href: Routes.VIDEOS,
		title: 'My video presentations',
		content: 'Videos'
	},
	{
		href: Routes.ARTICLES,
		title: 'My published articles',
		content: 'Articles'
	},
	{
		href: Routes.CERTIFICATES,
		title: 'My certificates',
		content: 'Certificates'
	},
	{
		href: Routes.SOCIAL,
		title: 'Social widgets',
		content: 'Social'
	},
	{
		href: Routes.BLOG,
		title: 'My blog',
		content: 'Blog'
	},
	...(isPrerendering
		? []
		: [
				{
					rel: 'noopener noreferrer',
					href: './resume.pdf',
					title: 'My CV',
					target: '_blank',
					content: 'Resume (pdf)'
				},
				{
					rel: 'noopener noreferrer',
					href: 'https://scriptex.js.org',
					title: 'My interactive CV',
					target: '_blank',
					content: 'Interactive Resume'
				},
				{
					rel: 'noopener noreferrer',
					href: 'projects/',
					title: 'My open source projects',
					target: '_blank',
					content: 'Open source'
				}
		  ]),
	{
		href: Routes.MUSIC,
		title: 'My music',
		content: 'Music'
	}
];
