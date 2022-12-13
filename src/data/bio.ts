export interface BioEntry {
	readonly title: string;
	readonly content: string[];
}

export const bio: BioEntry[] = [
	{
		title: '2010',
		content: [
			'My name is Atanas and I am a Senior Javascript/Typescript engineer.',
			"I am currently located in Varna, Bulgaria. That's on the south-east side of Europe, on the Black Sea.",
			'I started my web development career in 2010 as a freelance apprentice to a hardcore fullstack web developer and pretty fast learned the basics of HTML and CSS.',
			'We even had our own small web development company. In "HTML Lab" I was doing the front-end part and was mainly focused on slicing design files and turning them into static HTML pages.'
		]
	},
	{
		title: '2012',
		content: [
			'Between 2012 and 2018 I was employed in one of the largest web development companies in Varna, Bulgaria - 2create. In this company I worked for some of the biggest PSD-to-HTML brands out there - htmlBurger and htmlBoutique. I developed thousands (yes thousands) of different projects for clients from all over the globe and was focused on the front-end part of all projects.',
			'In the last 3 years of my employment there I was a direct assistant to several project managers and I also mentored several junior and intermediate front-end developers.',
			'During the period I participated in defining, integrating and teaching the internal coding standards in the company and co-authored the internal front-end projects starter template which was based on Webpack, Babel, PostCSS, SCSS and many more. The coding standards and Jarvis - that was the name of the front-end template - were (and are) used in tens of thousands of projects for clients from around the world.'
		]
	},
	{
		title: '2014',
		content: [
			'During my employment between 2012 and 2018 I developed, integrated and maintained the internal build systems for the company. This included mastering CSS pre- and post-processors such as LESS, SASS/SCSS and PostCSS, task runners such as Gulp and Grunt, module bundlers such as Webpack and Rollup, and NodeJS which I used as a runtime.',
			'Along these technologies I mastered Javascript and it became my preferred coding language. I also presented a keynote on the features introduced in 2015 with the 6th version of ECMAScript (the Javascript standard).',
			'In 2017 I started learning Typescript which later became the number one tool in my utilities belt. I prefer starting new projects entirely in Typescript regardless of the targeted platform or end - Web/Native or front-end/back-end.'
		]
	},
	{
		title: '2018',
		content: [
			'Since the beginning of 2018 I am working as a Javascript/Typescript engineer in a small startup located in Varna and operating internationally.',
			'At Three 11 we are focused on providing the best possible quality while using bleeding edge technologies. We are working on several in-house projects along with some interesting client websites and applications.',
			'We prefer Javascript and Typescript and utilize their power when building applications using React, Angular, Vue, React Native and even static web sites or WordPress powered CMS websites and blogs.'
		]
	},
	{
		title: 'Today',
		content: [
			'Now I am a Javascript and Typescript engineer with more than 10 years of professional experience. I am focused on the front-end but using a lot of back-end technologies as well. My daily tasks include coding HTML, CSS, Javascript, Typescript, PHP, Bash and many more.',
			"The latest project I worked on is an award-winning, large, international IoT application for one of the world's largest investor-owned electric utility service providers which aims to provide users from all over Europe with the ability to control their homes' smart appliances and energy consumption."
		]
	}
];
