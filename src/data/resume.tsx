import * as React from 'react';

export type ResumeLinkItem = {
	icon: string;
	text: string;
};

export const resumeLinks: ResumeLinkItem[] = [
	{
		icon: 'icon-mail',
		text: 'hi@atanas.info'
	},
	{
		icon: 'icon-link',
		text: 'https://atanas.info'
	},
	{
		icon: 'icon-link',
		text: 'https://linkedin.com/in/scriptex'
	},
	{
		icon: 'icon-link',
		text: 'https://github.com/scriptex'
	},
	{
		icon: 'icon-location',
		text: 'Varna, Bulgaria'
	}
];

export type ResumeExperienceItem = {
	meta: {
		place: string;
		period: string;
	};
	details: string[];
	project: JSX.Element;
	position: string;
};

export const resumeExperience: ResumeExperienceItem[] = [
	{
		position: 'Frontend Team Lead',
		project: (
			<>
				E.ON, E.ON Home project, <em>contract</em>
			</>
		),
		meta: {
			place: 'Remote',
			period: 'Jul 2018 - Present'
		},
		details: [
			'Implementing and maintaining the frontend of E.ON Home. Technologies used: React, React Native, Redux, Typescript, SCSS, SVG, NodeJS, MS Azure, AWS and many more.',
			'Designing, implementing and maintaining the frontend of E.ON H.E.M.S. Technologies used: Angular, Redux, Typescript, SCSS, SVG, NodeJS, MS Azure, AWS and many more.',
			'Leading a team of four front-end developers'
		]
	},
	{
		position: 'Senior Frontend Developer',
		project: (
			<>
				3-11, <em>full-time</em>
			</>
		),
		meta: {
			place: 'Varna, Bulgaria',
			period: 'Jan 2018 - Present'
		},
		details: [
			'Leading a team of several senior front-end and full-stack developers in delivering high-end enterprise applications such as Emailio, XPND, Mbrella and others. Technologies used: React, Redux, Typescript, SCSS, WordPress, NodeJS and many more.',
			'Implementing and maintaining the website for the first bulgarian electric sports car - Kinetik 07.',
			'Implementing the dashboard of the first bulgarian electric kart - Kinetik Model 27',
			'Implementing the dashboard of the hybrid Volvo P1800'
		]
	},
	{
		position: 'Senior UI Developer',
		project: (
			<>
				Toptal, <em>freelance</em>
			</>
		),
		meta: {
			place: 'Remote',
			period: 'Jun 2018 - Present'
		},
		details: [
			'Working on closed-source client applications for companies from around the globe. Technologies used: Vue, React, Redux, Typescript, SCSS, NodeJS,',
			'Part of the top 3% in the world.'
		]
	},
	{
		position: 'Senior Frontend Developer',
		project: (
			<>
				2create, <em>full-time</em>
			</>
		),
		meta: {
			place: 'Varna, Bulgaria',
			period: 'May 2012 - Jan 2018'
		},
		details: [
			'Worked for brands such as htmlBurger and htmlBoutique.',
			'Designed, implemented, maintained and taught the internal coding standards used in tens of thousands of projects.',
			'Designed, implemented and maintained the internal frontend build system used in tens of thousands of projects.',
			'Mentored and led several front-end developer teams throughout the years.',
			'Published several articles.'
		]
	}
];

export const resumeSkills: Array<string[]> = [
	['Javascript', 'Typescript', 'CSS', 'SCSS', 'HTML', 'SVG', 'MJML'],
	['React', 'Redux', 'Angular', 'Vue', 'NodeJS', 'D3', 'Chart JS', 'Highcharts'],
	['NPM / Yarn', 'Webpack', 'Rollup', 'Parcel', 'Vite'],
	['Jest', 'Cypress', 'React Testing Library', 'Mocha', 'Tape', 'Chai'],
	['UI/UX', 'SEO', 'Accessibility (a11y)', 'Internationalization (i18n)'],
	['Azure DevOps', 'Github Actions', 'Gitlab CI'],
	['Scrum', 'Agile', 'Git']
];

export type ResumeStrengthItem = {
	icon: string;
	title: string;
	content: string;
};

export const resumeStrengths: ResumeStrengthItem[] = [
	{
		icon: 'icon-share',
		title: 'Collaborative',
		content:
			'I am always keen to share knowledge, help, discuss, teach and learn from others. I am able to collaborate with cross-functional teams to create a high-quality end product.'
	},
	{
		icon: 'icon-star',
		title: 'Result-oriented',
		content:
			'Many confuse progress with moving in the right direction. I always make sure to check if the team is on the right path.'
	},
	{
		icon: 'icon-brush',
		title: 'Detail-oriented',
		content: 'Continuously focused on how to improve my work and do it the best way I can.'
	},
	{
		icon: 'icon-clock',
		title: 'Project management and prioritization',
		content:
			'I am always making sure that project deadlines are met and the required results are delivered on time.'
	}
];
