export interface Link {
	rel?: string;
	href: string;
	title: string;
	target?: '_blank';
	content: string;
}

export const links: Array<Readonly<Link>> = [
	{
		href: '#hello',
		title: 'Back to top',
		content: 'Home'
	},
	{
		href: '#about',
		title: 'About me',
		content: 'About'
	},
	{
		href: '#timeline',
		title: 'Life events',
		content: 'Timeline'
	},
	{
		href: '#skills',
		title: 'My skills',
		content: 'Skills'
	},
	{
		href: '#portfolio',
		title: 'My portfolio',
		content: 'Portfolio'
	},
	{
		href: '#stats',
		title: 'My stats',
		content: 'Stats'
	},
	{
		href: '#slides',
		title: 'My presentations',
		content: 'Slides'
	},
	{
		href: '#videos',
		title: 'My video presentations',
		content: 'Videos'
	},
	{
		href: '#articles',
		title: 'My published articles',
		content: 'Articles'
	},
	{
		href: '#certificates',
		title: 'My certificates',
		content: 'Certificates'
	},
	{
		href: '#social',
		title: 'Social widgets',
		content: 'Social'
	},
	{
		rel: 'noopener noreferrer',
		href: './resume.pdf',
		title: 'My CV',
		target: '_blank',
		content: 'Resume (pdf)'
	},
	{
		rel: 'noopener noreferrer',
		href: 'https://interactive-resume.atanas.info/',
		title: 'My interactive resume',
		target: '_blank',
		content: 'Interactive resume'
	},
	{
		rel: 'noopener noreferrer',
		href: 'projects/',
		title: 'My open source projects',
		target: '_blank',
		content: 'Open source'
	},
	{
		rel: 'noopener noreferrer',
		href: 'music/',
		title: 'My music',
		target: '_blank',
		content: 'Music'
	}
];
