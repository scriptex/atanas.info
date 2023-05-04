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
				<br />
				<small>
					Highlights: <strong>Typescript</strong>, <strong>React</strong>, <strong>React Native</strong>,{' '}
					<strong>TDD</strong>
				</small>
			</>
		),
		meta: {
			place: 'Remote',
			period: 'Jul 2018 - Present'
		},
		details: [
			'Implementing and maintaining the frontend of E.ON Home. Technologies used: React, React Native, Redux, Typescript, SCSS, SVG, MJML, NodeJS, MS Azure, AWS, Jest, Cypress, Sketch and many more.',
			'Designing, implementing and maintaining the frontend of E.ON H.E.M.S. Technologies used: Angular, Redux, Typescript, SCSS, SVG, NodeJS, MS Azure, AWS and many more.',
			'Leading a team of several front-end developers working on all aspects of the front-end',
			'Participating in the hiring process and evaluation of candidates'
		]
	},
	{
		position: 'Senior Frontend Developer',
		project: (
			<>
				3-11, <em>full-time</em>
				<br />
				<small>
					Highlights: <strong>React</strong>, <strong>Redux</strong>, <strong>NodeJS</strong>,{' '}
					<strong>NextJS</strong>, <strong>TDD</strong>
				</small>
			</>
		),
		meta: {
			place: 'Varna, Bulgaria',
			period: 'Jan 2018 - Present'
		},
		details: [
			'Leading a team of several senior front-end and full-stack developers in delivering high-end closed-source enterprise applications',
			'Working with clients such as Kinetik Automotive, Duke University, E.ON and many more',
			'Utilizing technologies used: Javascript, Typescript, SCSS, MJML, NodeJS, React, Redux, Angular, MongoDB and many many more.'
		]
	},
	{
		position: 'Senior Web Developer',
		project: (
			<>
				Kinetik Automotive, <em>part-time</em>
				<br />
				<small>
					Highlights: <strong>React</strong>, <strong>Redux</strong>, <strong>NodeJS</strong>,{' '}
					<strong>MS Azure</strong>, <strong>CosmosDB</strong>, <strong>WebSockets</strong>
				</small>
			</>
		),
		meta: {
			place: 'Varna, Bulgaria',
			period: 'Nov 2019 - Present'
		},
		details: [
			'Implementing and maintaining of the website of the company',
			'Implementing and maintaining of several web apps related to e-go-kart championships',
			'Implemeting the dashboard of the first bulgarian eKart',
			'Implemeting the dashboard of the inhouse-customized hybrid Volvo P1800',
			'Working closely with embedded developers to produce the web application for the Telemetry service - complex telemetry system that offers drivers, mechanics, engineers and coaches all the information they may need to perform their duties'
		]
	},
	{
		position: 'Senior Frontend Developer',
		project: (
			<>
				2create, <em>full-time</em>
				<br />
				<small>
					Highlights: <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>Javascript</strong>,{' '}
					<strong>NodeJS</strong>, <strong>Webpack</strong>
				</small>
			</>
		),
		meta: {
			place: 'Varna, Bulgaria',
			period: 'May 2012 - Jan 2018'
		},
		details: [
			'Worked for brands such as htmlBurger, htmlBoutique and Mail Bakery.',
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

export const resumeMore: string[] = [
	'I am an open-source software maintainer. My open-source projects are available on NPM. They have been downloaded more than a million times and can be seen on my Github profile.',
	'I have published several articles including guides on how to use Cypress to test authenticated Websockets, how to run multiple Webpack-based applications simultaneously, and how to put a watermark on multiple images using NodeJS. All of my articles and blog posts are available on my personal website.'
];
