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
		rel: 'noopener noreferrer',
		href: './resume.pdf',
		title: 'My CV',
		target: '_blank',
		content: 'Resume (pdf)'
	},
	{
		href: '#music',
		title: 'My music',
		content: 'Music'
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
		href: 'https://at-the-wall.atanas.info/',
		title: 'At the Wall - A Game of Thrones scene',
		target: '_blank',
		content: 'At the Wall'
	},
	{
		rel: 'noopener noreferrer',
		href: 'https://scriptex.js.org/2048/',
		title: 'Join the numbers and get to the 2048 tile!',
		target: '_blank',
		content: '2048'
	},
	{
		rel: 'noopener noreferrer',
		href: 'https://material-tetris.atanas.info/',
		title: 'Material Tetris. Play here!',
		target: '_blank',
		content: 'Material Tetris'
	},
	{
		rel: 'noopener noreferrer',
		href: 'https://material-snake.atanas.info/',
		title: 'Material Snake. Play here!',
		target: '_blank',
		content: 'Material Snake'
	}
];
