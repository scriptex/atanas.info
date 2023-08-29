export type ResumeStrengthItem = {
	icon: string;
	index: number;
	title: string;
	content: string;
};

export const resumeStrengths: ResumeStrengthItem[] = [
	{
		icon: 'icon-share',
		index: 0,
		title: 'Collaborative',
		content:
			'I am always keen to share knowledge, help, discuss, teach and learn from others. I am able to collaborate with cross-functional teams to create a high-quality end product.'
	},
	{
		icon: 'icon-star',
		index: 1,
		title: 'Result-oriented',
		content:
			'Many confuse progress with moving in the right direction. I always make sure to check if the team is on the right path.'
	},
	{
		icon: 'icon-brush',
		index: 2,
		title: 'Detail-oriented',
		content: 'Continuously focused on how to improve my work and do it the best way I can.'
	},
	{
		icon: 'icon-clock',
		index: 3,
		title: 'Project management and prioritization',
		content:
			'I am always making sure that project deadlines are met and the required results are delivered on time.'
	}
];

export const resumeMore: string[] = [
	'I am an open-source software maintainer. My open-source projects are available on NPM. They have been downloaded more than a million times and can be seen on my Github profile.',
	'I have published several articles including guides on how to use Cypress to test authenticated Websockets, how to run multiple Webpack-based applications simultaneously, and how to put a watermark on multiple images using NodeJS. All of my articles and blog posts are available on my personal website.'
];
