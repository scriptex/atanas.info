export interface Social {
	readonly url: string;
	readonly icon: string;
	readonly title: string;
}

export const socials: Social[] = [
	{
		url: 'mailto:hi@atanas.info',
		icon: 'email',
		title: 'Send me an email'
	},
	{
		url: 'https://www.linkedin.com/in/scriptex/',
		icon: 'linkedin',
		title: 'Find me on LinkedIn'
	},
	{
		url: 'https://github.com/scriptex',
		icon: 'github',
		title: 'See my projects on Github'
	},
	{
		url: 'https://gitlab.com/scriptex',
		icon: 'gitlab',
		title: 'See my projects on Gitlab'
	},
	{
		url: 'https://twitter.com/scriptexbg',
		icon: 'twitter',
		title: 'Follow me on Twitter'
	},
	{
		url: 'https://www.npmjs.com/~scriptex',
		icon: 'npm',
		title: 'See my packages on NPM'
	},
	{
		url: 'https://www.youtube.com/user/scriptex',
		icon: 'youtube',
		title: 'See my videos on YouTube'
	},
	{
		url: 'https://stackoverflow.com/users/4140082/atanas-atanasov',
		icon: 'stackoverflow',
		title: 'See my profile on StackOverflow'
	},
	{
		url: 'https://codepen.io/scriptex/',
		icon: 'codepen',
		title: 'See my work on Codepen'
	},
	{
		url: 'https://profile.codersrank.io/user/scriptex',
		icon: 'codersrank',
		title: 'See my profile on Codersrank'
	}
];
