export interface Link {
	rel?: string;
	href: string;
	title: string;
	target?: '_blank';
	content: string;
}

export const links: Array<Readonly<Link>> = [
	{
		href: '#about',
		title: 'About me',
		content: 'About'
	},
	{
		href: '#skills',
		title: 'My skills',
		content: 'Skills'
	},
	{
		href: '#stats',
		title: 'My stats',
		content: 'Stats'
	},
	{
		href: '#portfolio',
		title: 'My portfolio',
		content: 'Portfolio'
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
