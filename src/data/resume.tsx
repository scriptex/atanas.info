export type ResumeLinkItem = {
	icon: string;
	text: string;
	index: number;
};

export const resumeLinks: ResumeLinkItem[] = [
	{
		icon: 'icon-mail',
		text: 'hi@atanas.info',
		index: 0
	},
	{
		icon: 'icon-link',
		text: 'atanas.info',
		index: 1
	},
	{
		icon: 'icon-link',
		text: 'linkedin.com/in/scriptex',
		index: 2
	},
	{
		icon: 'icon-link',
		text: 'github.com/scriptex',
		index: 3
	},
	{
		icon: 'icon-location',
		text: 'Varna, Bulgaria',
		index: 4
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
	index: number;
};

export const resumeExperience: ResumeExperienceItem[] = [
	{
		position: 'Frontend Team Lead',
		project: (
			<>
				E.ON, E.ON Home project, <em>contract</em>
				<br />
				<span>https://app.home.eon.com | https://admin.eonhome.eu</span>
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
			'Implementing and maintaining the frontend of E.ON Home - an award winning web and hybrid mobile application. Technologies used: React, React Native, Redux, Typescript, SCSS, SVG, MJML, NodeJS, MS Azure, AWS, Jest, Cypress, Sketch and many more.',
			'Designing, implementing and maintaining the frontend of E.ON H.E.M.S - the administration application behind E.ON Home. Technologies used: Angular, Redux, Typescript, SCSS, SVG, NodeJS, MS Azure, AWS and many more.',
			'Leading a team of several front-end developers working on all aspects of the front-end.',
			'Participating in the hiring process and evaluation of candidates.'
		],
		index: 0
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
			'Working with clients such as Kinetik Automotive, Duke University, E.ON and many more.',
			'Utilizing technologies such as: Javascript, Typescript, SCSS, MJML, NodeJS, React, Redux, NextJS, MongoDB, Jest, Cypress, Mocha, Tape, Chai and many many more.',
			'Participating in the hiring process and evaluation of candidates.'
		],
		index: 1
	},
	{
		position: 'Senior Web Developer',
		project: (
			<>
				Kinetik Automotive, <em>part-time</em>
				<br />
				<span>https://kinetik-automotive.com | https://kinetik-e.com</span>
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
			'Implementing and maintaining of the website of the company.',
			'Implementing and maintaining of several web apps related to eKart championships.',
			'Implemeting the dashboard of the first bulgarian eKart.',
			'Implemeting the dashboard of the inhouse-customized hybrid Volvo P1800.',
			'Working closely with embedded developers to produce the web application for the Telemetry service - complex telemetry system that offers drivers, mechanics, engineers and coaches all the information they may need to perform their duties.'
		],
		index: 2
	},
	{
		position: 'Senior Frontend Developer',
		project: (
			<>
				2create, <em>full-time</em>
				<br />
				<span>https://htmlburger.com | https://htmlboutique.com | https://mailbakery.com</span>
				<br />
				<small>
					Highlights: <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>Javascript</strong>,{' '}
					<strong>SCSS</strong>, <strong>React</strong>, <strong>Angular</strong>, <strong>NodeJS</strong>,{' '}
					<strong>Webpack</strong>
				</small>
			</>
		),
		meta: {
			place: 'Varna, Bulgaria',
			period: 'May 2012 - Jan 2018'
		},
		details: [
			'Worked for brands such as "htmlBurger", "htmlBoutique" and "Mail Bakery" - leaders in the outsourced web and mobile development.',
			'Designed, implemented, maintained and taught the internal coding standards used in tens of thousands of projects.',
			'Designed, implemented and maintained the internal frontend build system used in tens of thousands of projects.',
			'Mentored and led several front-end developer teams throughout the years.',
			'Published several articles.'
		],
		index: 3
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
