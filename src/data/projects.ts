import { Routes } from './routes';

export type Project = {
	readonly description: string;
	readonly index: number;
	readonly title: string;
	readonly url: string;
};

export type WebProject = Project & {
	readonly image: string;
	readonly skip: boolean;
};

export type ExtendedProject = Project & {
	readonly adjustable?: boolean;
	readonly details: string;
	readonly imageHeight?: number;
	readonly imageWidth?: number;
	readonly images: string[];
};

export type SubPage = {
	readonly image: string;
	readonly index: number;
	readonly text: string;
	readonly url: Routes | string;
};

export const projects: WebProject[] = [
	{
		description: 'Typescript, SCSS, React, Redux, MS Azure, AWS, NodeJS, Jest, React Testing Library, Cypress',
		image: '/images/web-apps/E.ON-Home.jpg',
		index: 0,
		skip: false,
		title: 'E.ON Home',
		url: 'https://app.home.eon.com/'
	},
	{
		description: 'Typescript, SCSS, Angular, Redux, MS Azure, AWS, NodeJS, Cypress',
		image: '/images/web-apps/E.ON-H.E.M.S-(Home-Energy-Management-System).jpg',
		index: 1,
		skip: false,
		title: 'E.ON H.E.M.S (Home Energy Management System)',
		url: 'https://admin.eonhome.eu/'
	},
	{
		description: 'PHP, Javascript, CSS, HTML, WordPress',
		image: '/images/web-apps/Mama-Culinar.jpg',
		index: 2,
		skip: false,
		title: 'Mama Culinar',
		url: ''
	},
	{
		description: 'Typescript, SCSS, Angular, Redux, MS Azure, AWS, NodeJS, Jest, React Testing Library',
		image: '/images/web-apps/Foton-Home.jpg',
		index: 3,
		skip: false,
		title: 'Foton Home',
		url: 'https://app.home.eonfoton.pl/'
	},
	{
		description: 'Typescript, SCSS, React, Redux, NodeJS, Jest, Enzyme',
		image: '/images/web-apps/XPND.jpg',
		index: 4,
		skip: false,
		title: 'XPND',
		url: ''
	},
	{
		description: 'Typescript, SCSS, React, Redux, NodeJS',
		image: '/images/web-apps/XPND-Ebook.jpg',
		index: 5,
		skip: false,
		title: 'XPND Ebook',
		url: ''
	},
	{
		description: 'Typescript, SCSS, React, Redux, NodeJS',
		image: '/images/web-apps/XPND-demo-application.jpg',
		index: 6,
		skip: false,
		title: 'XPND demo application',
		url: 'https://xpnd.atanas.info/'
	},
	{
		description: 'Typescript, React, Next.js, MongoDB, MUI',
		image: '/images/web-apps/Freelance-Salary-Calculator.jpg',
		index: 7,
		skip: false,
		title: 'Freelance Salary Calculator',
		url: 'https://salary.atanas.info/'
	},
	{
		description: 'CSS, Javascript, HTML',
		image: '/images/web-apps/Emailio-Landing.jpg',
		index: 8,
		skip: false,
		title: 'Emailio Landing',
		url: 'https://emailio.com/'
	},
	{
		description: 'SCSS, Javascript, React, Redux, Redux Saga, Jest, Enzyme',
		image: '/images/web-apps/Emailio-Web-Application.jpg',
		index: 9,
		skip: false,
		title: 'Emailio Web Application',
		url: 'https://emailio.vercel.app/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/Nulla-TV.jpg',
		index: 10,
		skip: false,
		title: 'Nulla TV',
		url: 'https://www.nulla.tv/'
	},
	{
		description: 'HTML5, CSS3, Javascript, Fullpage JS, Vue, Nuxt, PHP, WordPress',
		image: '/images/web-apps/Kinetik-Automotive.jpg',
		index: 11,
		skip: false,
		title: 'Kinetik Automotive',
		url: 'https://kinetikautomotive.com/'
	},
	{
		description: 'HTML5, SVG, CSS3, Javascript, React, Styled Components',
		image: '/images/web-apps/Kinetik-Electric-Karting-Championship.jpg',
		index: 12,
		skip: false,
		title: 'Kinetik Electric Karting Championship',
		url: 'https://kinetik-championship.com/'
	},
	{
		description: 'HTML5, CSS3, Javascript, jQuery, PHP',
		image: '/images/web-apps/SOD-64-(СОД-64).jpg',
		index: 13,
		skip: false,
		title: 'SOD 64 (СОД 64)',
		url: 'https://www.sod.bg/'
	},
	{
		description: 'CSS3, PHP',
		image: '/images/web-apps/At-the-Wall.jpg',
		index: 14,
		skip: false,
		title: 'At the Wall',
		url: 'https://at-the-wall.atanas.info'
	},
	{
		description: 'Typescript, HTML, CSS3',
		image: '/images/web-apps/Material-Snake.jpg',
		index: 15,
		skip: false,
		title: 'Material Snake',
		url: 'https://snake.atanas.info'
	},
	{
		description: 'Javascript, SCSS, React, Redux, Redux Saga',
		image: '/images/web-apps/Influencing-For-Good.jpg',
		index: 16,
		skip: false,
		title: 'Influencing For Good',
		url: 'https://influencingforgood.com/'
	},
	{
		description: 'Typescript, HTML, CSS3',
		image: '/images/web-apps/Material-Tetris.jpg',
		index: 17,
		skip: false,
		title: 'Material Tetris',
		url: 'https://tetris.atanas.info'
	},
	{
		description: 'Typescript, HTML, CSS3',
		image: '/images/web-apps/2048.jpg',
		index: 18,
		skip: false,
		title: '2048',
		url: 'https://2048.atanas.info'
	},
	{
		description: 'Javascript, SCSS, Vue, Vuex, Chart JS',
		image: '/images/web-apps/Retirement-calculator.jpg',
		index: 19,
		skip: false,
		title: 'Retirement calculator',
		url: 'https://retirement-calc.vercel.app/'
	},
	{
		description: 'Javascript, SCSS, React, Redux, Redux Saga',
		image: '/images/web-apps/Paternalism-For-Good.jpg',
		index: 20,
		skip: false,
		title: 'Paternalism For Good',
		url: ''
	},
	{
		description: 'Typescript, SCSS, React, Redux, Redux Saga',
		image: '/images/web-apps/Fertility-tool.jpg',
		index: 21,
		skip: false,
		title: 'Fertility tool',
		url: 'https://fertility-tool.vercel.app/'
	},
	{
		description: 'Typescript, SCSS, React, Redux, Redux Saga',
		image: '/images/web-apps/IMGN.jpg',
		index: 22,
		skip: false,
		title: 'IMGN',
		url: 'https://imgn.vercel.app/'
	},
	{
		description: 'HTML5, CSS3, SVG, Javascript, D3',
		image: '/images/web-apps/Three-11.jpg',
		index: 23,
		skip: false,
		title: 'Three 11',
		url: 'https://three-11.com/'
	},
	{
		description: 'Javascript, Stylus, VuePress, NodeJS',
		image: '/images/web-apps/Three-11-Company-Flows.jpg',
		index: 24,
		skip: false,
		title: 'Three 11 Company Flows',
		url: 'https://flows.vercel.app/'
	},
	{
		description: 'HTML5, CSS3, Javascript',
		image: '/images/web-apps/HTML-Lab.jpg',
		index: 25,
		skip: false,
		title: 'HTML Lab',
		url: 'https://html-lab.com/'
	},
	{
		description: 'HTML5, CSS3, Javascript, Fullpage JS, Shuffle JS, PHP, WordPress',
		image: '/images/web-apps/Malaika-Pictures.jpg',
		index: 26,
		skip: false,
		title: 'Malaika Pictures',
		url: 'https://malaikapictures.com/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/Pascoe.jpg',
		index: 27,
		skip: false,
		title: 'Pascoe',
		url: 'https://pascoe.de/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/Varna-Food-Tours.jpg',
		index: 28,
		skip: false,
		title: 'Varna Food Tours',
		url: 'https://varnafoodtours.com/'
	},
	{
		description: 'HTML5, CSS3, Javascript',
		image: '/images/web-apps/F-Type-For-Sale.jpg',
		index: 29,
		skip: false,
		title: 'F Type For Sale',
		url: 'https://ftypeforsale.com/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/zeevan.jpg',
		index: 30,
		skip: false,
		title: 'Zeevan',
		url: 'https://www.zeevan.com/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/mario-pricken.jpg',
		index: 31,
		skip: false,
		title: 'Mario Pricken',
		url: 'https://www.mariopricken.com/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/sqillinehealth.jpg',
		index: 32,
		skip: false,
		title: 'Sqillinehealth',
		url: 'https://sqillinehealth.com/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/kinetik.jpg',
		index: 33,
		skip: false,
		title: 'Kinetik Fundraising',
		url: 'https://kinetik.bg/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/Dan-Ariely.jpg',
		index: 34,
		skip: false,
		title: 'Dan Ariely',
		url: 'https://danariely.com/'
	},
	{
		description: 'Typescript, SCSS, React, Next.js, ShuffleJS, Swiper',
		image: '/images/web-apps/The-House-Z.jpg',
		index: 35,
		skip: false,
		title: 'The House Z',
		url: 'https://housez-bg.com/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/one-logic.jpg',
		index: 36,
		skip: false,
		title: 'One Logic',
		url: 'https://onelogic.de/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/hochzeitskiste.jpg',
		index: 37,
		skip: false,
		title: 'Hochzeitskiste',
		url: 'https://hochzeitskiste.info/'
	},
	{
		description: 'React, SCSS, Parcel',
		image: '/images/web-apps/Social-Header.jpg',
		index: 38,
		skip: false,
		title: 'Social Header',
		url: 'https://social-header.atanas.info/'
	},
	{
		description: 'HTML, Advanced CSS, SCSS, PostCSS, Javascript, Webpack',
		image: '/images/web-apps/Predictably-Irrational.jpg',
		index: 39,
		skip: false,
		title: 'Predictably Irrational',
		url: 'https://www.predictablyirrational.com/'
	},
	{
		description: 'HTML, SVG, Sketch, SCSS, PostCSS, Javascript, Swiper, Webpack',
		image: '/images/web-apps/Payoff.jpg',
		index: 40,
		skip: false,
		title: 'Payoff',
		url: 'https://payoffbook.com/'
	},
	{
		description: 'HTML, SVG, SCSS, PostCSS, Webpack',
		image: '/images/web-apps/The-(Honest)-Truth-About-Dishonesty.jpg',
		index: 41,
		skip: false,
		title: 'The (Honest) Truth About Dishonesty',
		url: 'https://thehonesttruthaboutdishonesty.com/'
	},
	{
		description: 'HTML, SVG, SCSS, PostCSS, Javascript, Swiper, ShuffleJS, Webpack',
		image: '/images/web-apps/Irrationally-Yours.jpg',
		index: 42,
		skip: false,
		title: 'Irrationally Yours',
		url: 'https://irrationallyyours.com/'
	},
	{
		description: 'HTML, SVG, SCSS, PostCSS, Javascript, Swiper, Webpack',
		image: '/images/web-apps/Amazing-Decisions.jpg',
		index: 43,
		skip: false,
		title: 'Amazing Decisions',
		url: 'https://amazingdecisionsbook.com/'
	},
	{
		description: 'Vue, SVG, SCSS, PostCSS, Javascript, Swiper, Nuxt',
		image: '/images/web-apps/kinetik-nuxt.jpg',
		index: 44,
		skip: false,
		title: 'Kinetik Prototype',
		url: 'https://kinetik.atanas.info/'
	},
	{
		description: 'HTML, SVG, SCSS, PostCSS, WebComponents, Vite',
		image: '/images/web-apps/galaktika.jpg',
		index: 45,
		skip: false,
		title: 'Galaktika',
		url: 'https://galaktika.bg/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/Dan-Ariely-(Hebrew-version).jpg',
		index: 46,
		skip: false,
		title: 'Dan Ariely (Hebrew version)',
		url: 'https://danariely.co.il/'
	},
	{
		description: 'HTML, SVG, SCSS, PostCSS, Javascript, Swiper, ShuffleJS, Webpack',
		image: '/images/web-apps/Irrationally-Yours-(Hebrew-version).jpg',
		index: 47,
		skip: false,
		title: 'Irrationally Yours (Hebrew version)',
		url: 'https://irrationallyyours.com/he/'
	},
	{
		description: 'HTML, Advanced CSS, SCSS, PostCSS, Javascript, Webpack',
		image: '/images/web-apps/Predictably-Irrational-(Hebrew-version).jpg',
		index: 48,
		skip: false,
		title: 'Predictably Irrational (Hebrew version)',
		url: 'https://www.predictablyirrational.com/he/'
	},
	{
		description: 'HTML, SVG, SCSS, PostCSS, Javascript, Swiper, Webpack',
		image: '/images/web-apps/Amazing-Decisions-(Hebrew-version).jpg',
		index: 49,
		skip: false,
		title: 'Amazing Decisions (Hebrew version)',
		url: 'https://amazingdecisionsbook.com/he/'
	},
	{
		description: 'HTML, SVG, SCSS, PostCSS, Javascript, Swiper, Webpack',
		image: '/images/web-apps/Payoff-(Hebrew-version).jpg',
		index: 50,
		skip: false,
		title: 'Payoff (Hebrew version)',
		url: 'https://payoffbook.com/he/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/Hàla.jpg',
		index: 51,
		skip: false,
		title: 'Demetry',
		url: 'https://demetry.film/'
	},
	{
		description: 'Typescript, React, SCSS, Next.js, React Query',
		image: '/images/web-apps/Dan-vs-ChatGPT.jpg',
		index: 52,
		skip: false,
		title: 'Dan vs ChatGPT',
		url: 'https://dan-vs-chatgpt.vercel.app/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/atelier-coolinar.png',
		index: 53,
		skip: false,
		title: 'Atelier Coolinar (Ателие Кулинар)',
		url: ''
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/x-form.png',
		index: 54,
		skip: false,
		title: 'X Form',
		url: ''
	},
	{
		description: 'HTML5, CSS3, Javascript, jQuery, PHP',
		image: '/images/web-apps/faraon-bg.jpg',
		index: 55,
		skip: false,
		title: 'Faraon (Фараон)',
		url: ''
	},
	{
		description: 'HTML5, CSS3, Javascript, jQuery, PHP, WordPress',
		image: '/images/web-apps/sirius-real-estate.png',
		index: 56,
		skip: false,
		title: 'Sirius Real Estate',
		url: ''
	},
	{
		description: 'HTML5, CSS3, Javascript, jQuery, PHP, WordPress',
		image: '/images/web-apps/RoomGo-Blog.jpg',
		index: 57,
		skip: false,
		title: 'RoomGo Blog',
		url: 'https://www.roomgo.com.ar/blog/'
	},
	{
		description: 'HTML5, CSS3, Javascript, jQuery, PHP, WordPress',
		image: '/images/web-apps/BMMC.jpg',
		index: 58,
		skip: false,
		title: 'BMMC',
		url: 'https://bmmc.at/'
	},
	{
		description: 'HTML5, CSS3, Javascript, jQuery, AngularJS',
		image: '/images/web-apps/Issta.jpg',
		index: 59,
		skip: false,
		title: 'Issta',
		url: 'https://www.issta.co.il/'
	},
	{
		description: 'Typescript, MJML, SCSS, SVG, React, Next.js, Auth.JS, MongoDB, NodeJS, Nodemailer',
		image: '/images/web-apps/Social-Capital.png',
		index: 60,
		skip: false,
		title: 'Social Capital',
		url: 'https://social-capital.vercel.app/'
	},
	{
		description: 'Typescript, SCSS, SVG, React, Next.js, NodeJS, Swiper',
		image: '/images/web-apps/Misbelief.jpg',
		index: 61,
		skip: false,
		title: 'Misbelief',
		url: 'https://misbeliefbook.com/'
	},
	{
		description: "Dan Ariely's MIT page - HTML, SVG, SCSS",
		image: '/images/web-apps/Dan-Ariely-MIT.jpg',
		index: 62,
		skip: false,
		title: 'Dan Ariely MIT',
		url: 'https://web.mit.edu/ariely/www/MIT/index.html'
	},
	{
		description: 'Typescript, SVG, React, Next.js, Emotion',
		image: '/images/web-apps/Kinetik-STEAM-Education-Kit.jpg',
		index: 63,
		skip: false,
		title: 'Kinetik STEAM Education Kit',
		url: 'https://edukartgo.com'
	},
	{
		description: 'HTML5, SVG, CSS3, Javascript, React, Styled Components',
		image: '/images/web-apps/Kinetik-Electric-Karting-Championship.jpg',
		index: 12,
		skip: false,
		title: 'Kinetik Electric Karting Championship',
		url: 'https://kinetik-e.com/'
	}
];

export const mobileApps: ExtendedProject[] = [
	{
		description: 'An award winning smart energy management application for iOS',
		details: 'Typescript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		imageHeight: 1299,
		imageWidth: 600,
		images: [
			'eon-home-iphone-dark1.jpg',
			'eon-home-iphone-dark2.jpg',
			'eon-home-iphone-dark3.jpg',
			'eon-home-iphone-dark4.jpg',
			'eon-home-iphone-light1.jpg',
			'eon-home-iphone-light2.jpg',
			'eon-home-iphone-light3.jpg',
			'eon-home-iphone-light4.jpg'
		],
		index: 0,
		title: 'E.ON Home for iPhone',
		url: 'https://apps.apple.com/gb/app/e-on-home-solar-and-heating/id1468486784#?platform=iphone'
	},
	{
		description: 'Smart energy management application for iOS',
		details: 'Typescript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		imageHeight: 1299,
		imageWidth: 600,
		images: [
			'foton-home-iphone-light1.jpg',
			'foton-home-iphone-light2.jpg',
			'foton-home-iphone-light3.jpg',
			'foton-home-iphone-light4.jpg',
			'foton-home-iphone-dark1.jpg',
			'foton-home-iphone-dark2.jpg',
			'foton-home-iphone-dark3.jpg',
			'foton-home-iphone-dark4.jpg'
		],
		index: 1,
		title: 'Foton Home for iPhone',
		url: 'https://apps.apple.com/us/app/foton-home/id1525688620#?platform=iphone'
	},
	{
		description: 'An award winning smart energy management application for Android',
		details: 'Typescript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		imageHeight: 620,
		imageWidth: 310,
		images: [
			'eon-home-android1.jpg',
			'eon-home-android2.jpg',
			'eon-home-android3.jpg',
			'eon-home-android4.jpg',
			'eon-home-android5.jpg',
			'eon-home-android6.jpg',
			'eon-home-android7.jpg',
			'eon-home-android8.jpg'
		],
		index: 2,
		title: 'E.ON Home for Android',
		url: 'https://play.google.com/store/apps/details?id=com.eon.home.eu'
	},
	{
		description: 'Smart energy management application for Android',
		details: 'Typescript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		imageHeight: 620,
		imageWidth: 310,
		images: [
			'foton-home-android5.jpg',
			'foton-home-android6.jpg',
			'foton-home-android7.jpg',
			'foton-home-android8.jpg',
			'foton-home-android1.jpg',
			'foton-home-android2.jpg',
			'foton-home-android3.jpg',
			'foton-home-android4.jpg'
		],
		index: 3,
		title: 'Foton Home for Android',
		url: 'https://play.google.com/store/apps/details?id=com.foton.home.eu'
	},
	{
		adjustable: true,
		description: 'An award winning smart energy management application for iPad',
		details: 'Typescript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		imageHeight: 1716,
		imageWidth: 1286,
		images: ['eon-home-ipad-dark.jpg', 'eon-home-ipad-light.jpg'],
		index: 4,
		title: 'E.ON Home for iPad',
		url: 'https://apps.apple.com/gb/app/e-on-home-solar-and-heating/id1468486784#?platform=ipad'
	},
	{
		adjustable: true,
		description: 'Smart energy management application for iPad',
		details: 'Typescript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		imageHeight: 1716,
		imageWidth: 1286,
		images: ['foton-home-ipad-light.jpg', 'foton-home-ipad-dark.jpg'],
		index: 5,
		title: 'Foton Home for iPad',
		url: 'https://apps.apple.com/us/app/foton-home/id1525688620#?platform=ipad'
	}
];

export const automotiveProjects: ExtendedProject[] = [
	{
		description: 'Dashboard and infotainment system for the Kinetik Model 27 electric kart',
		details: 'Typescript, SCSS, SVG, React, Redux, NodeJS, Express, WebSocket, Electron',
		imageHeight: 1440,
		imageWidth: 2400,
		images: [
			'kinetik-infotainment-1.jpg',
			'kinetik-infotainment-2.jpg',
			'kinetik-infotainment-3.jpg',
			'kinetik-infotainment-4.jpg',
			'kinetik-infotainment-5.jpg',
			'kinetik-infotainment-6.jpg',
			'kinetik-infotainment-7.jpg',
			'kinetik-infotainment-8.jpg',
			'kinetik-infotainment-9.jpg'
		],
		index: 0,
		title: 'Kinetik Infotainment',
		url: 'https://gokart-ui.atanas.info/'
	},
	{
		description: 'Dashboard system for the Volvo P1800 custom hybrid automobile',
		details: 'Typescript, SCSS, SVG, React, Redux, NodeJS, Express, WebSocket',
		imageHeight: 411,
		imageWidth: 1536,
		images: [
			'volvo-dashboard-1.jpg',
			'volvo-dashboard-2.jpg',
			'volvo-dashboard-3.jpg',
			'volvo-dashboard-4.jpg',
			'volvo-dashboard-5.jpg'
		],
		index: 1,
		title: 'Volvo Dashboard',
		url: 'https://volvo-dashboard.atanas.info/'
	},
	{
		description: 'Dashboard for the electric motorcycle built by Kinetik Automotive',
		details: 'Typescript, SCSS, SVG, React, Redux, NodeJS, Express, WebSocket',
		imageHeight: 960,
		imageWidth: 1600,
		images: [
			'motorcycle-dashboard01.jpg',
			'motorcycle-dashboard02.jpg',
			'motorcycle-dashboard03.jpg',
			'motorcycle-dashboard04.jpg'
		],
		// url: 'https://telemetry2-go-ui.vercel.app/',
		index: 2,
		title: 'Motorcycle Dashboard',
		url: ''
	},
	{
		description: "Cloud-based telemetry system built for the Kinetik's E-Go-Kart",
		details: 'Typescript, SCSS, SVG, React, React Query, NodeJS, Express, WebSocket, NextJS, Google Maps',
		imageHeight: 960,
		imageWidth: 1600,
		images: [
			'telemetry1.png',
			'telemetry2.jpg',
			'telemetry3.jpg',
			'telemetry4.jpg',
			'telemetry5.jpg',
			'telemetry6.jpg',
			'telemetry7.jpg',
			'telemetry8.jpg',
			'telemetry9.jpg',
			'telemetry10.jpg',
			'telemetry11.jpg',
			'telemetry12.jpg',
			'telemetry13.jpg',
			'telemetry14.jpg',
			'telemetry15.jpg',
			'telemetry16.jpg'
		],
		index: 3,
		title: 'GoKart Telemetry',
		url: ''
	}
];

export const statsItems: SubPage[] = [
	{
		image: '/images/temp/github.jpg',
		index: 0,
		text: 'Github',
		url: Routes.STATS_GITHUB
	},
	{
		image: '/images/temp/gitlab.jpg',
		index: 1,
		text: 'Gitlab',
		url: Routes.STATS_GITLAB
	},
	{
		image: '/images/temp/npm.jpg',
		index: 2,
		text: 'NPM',
		url: Routes.STATS_NPM
	}
];

export const portfolioItems: SubPage[] = [
	{
		image: '/images/temp/web-apps.jpg',
		index: 0,
		text: 'Web applications',
		url: Routes.PORTFOLIO_WEB_APPS
	},
	{
		image: '/images/temp/mobile-apps.jpg',
		index: 1,
		text: 'Mobile applications',
		url: Routes.PORTFOLIO_MOBILE_APPS
	},
	{
		image: '/images/temp/automotive-apps.jpg',
		index: 2,
		text: 'Automotive applications',
		url: Routes.PORTFOLIO_AUTOMOTIVE_APPS
	},
	{
		image: '/images/temp/email-templates.jpeg',
		index: 3,
		text: 'Email templates',
		url: Routes.PORTFOLIO_EMAIL_TEMPLATES
	},
	{
		image: '/images/temp/personal-apps.jpg',
		index: 4,
		text: 'Personal projects',
		url: Routes.PORTFOLIO_PERSONAL_PROJECTS
	},
	{
		image: '/images/temp/open-source.jpg',
		index: 5,
		text: 'Open source',
		url: Routes.PORTFOLIO_OPEN_SOURCE_PROJECTS
	}
];

export const personalProjects: SubPage[] = [
	{
		index: 0,
		text: '2048 Game',
		url: 'https://2048.atanas.info'
	},
	{
		index: 1,
		text: 'attr-i18n',
		url: 'https://attr-i18n.atanas.info'
	},
	{
		index: 2,
		text: 'AnimateMe',
		url: 'https://animate-me.atanas.info'
	},
	{
		index: 3,
		text: 'At the Wall',
		url: 'https://at-the-wall.atanas.info'
	},
	{
		index: 4,
		text: 'Calendar Widget',
		url: 'https://calendar-widget.atanas.info'
	},
	{
		index: 5,
		text: '(Vali) Dator',
		url: 'https://dator.atanas.info'
	},
	{
		index: 6,
		text: 'Combined API Docs Gateway for E.ON Home',
		url: 'https://eonhome.atanas.info'
	},
	{
		index: 7,
		text: 'GA Beacon',
		url: 'https://ga-beacon.atanas.info'
	},
	{
		index: 8,
		text: 'Github Insights (beta)',
		url: 'https://github-insights.atanas.info'
	},
	{
		index: 9,
		text: 'Gitlab Calendar',
		url: 'https://gitlab-calendar.atanas.info'
	},
	{
		index: 10,
		text: 'HTML5 Form Validator',
		url: 'https://html5-form-validator.atanas.info'
	},
	{
		index: 11,
		text: 'Intro Scroll',
		url: 'https://intro-scroll.atanas.info'
	},
	{
		index: 12,
		text: 'ITCSS',
		url: 'https://itcss.atanas.info'
	},
	{
		index: 13,
		text: 'ITSCSS',
		url: 'https://itscss.atanas.info'
	},
	{
		index: 14,
		text: 'Kinetik',
		url: 'https://kinetik.atanas.info'
	},
	{
		index: 15,
		text: 'No HTML',
		url: 'https://no-html.atanas.info'
	},
	{
		index: 16,
		text: 'NPM Maintainer',
		url: 'https://npm-maintainer.atanas.info'
	},
	{
		index: 17,
		text: 'Pass Score',
		url: 'https://pass-score.atanas.info'
	},
	{
		index: 18,
		text: 'React Accordion TS',
		url: 'https://react-accordion-ts.atanas.info'
	},
	{
		index: 19,
		text: 'React Carousel',
		url: 'https://react-carousel.atanas.info'
	},
	{
		index: 20,
		text: 'React Dropper',
		url: 'https://react-dropper.atanas.info'
	},
	{
		index: 21,
		text: 'React Round Carousel',
		url: 'https://react-round-carousel.atanas.info'
	},
	{
		index: 22,
		text: 'React SVG Donuts',
		url: 'https://react-svg-donuts.atanas.info'
	},
	{
		index: 23,
		text: 'Round Carousel Component',
		url: 'https://round-carousel-component.atanas.info'
	},
	{
		index: 24,
		text: 'Freelance Salary Calculator',
		url: 'https://salary.atanas.info'
	},
	{
		index: 25,
		text: 'Scriptex',
		url: 'https://scriptex.js.org'
	},
	{
		index: 26,
		text: 'SCSS Goodies',
		url: 'https://scss-goodies.atanas.info'
	},
	{
		index: 27,
		text: 'URL Shortener',
		url: 'https://shortener.atanas.info'
	},
	{
		index: 28,
		text: 'Snake Game',
		url: 'https://snake.atanas.info'
	},
	{
		index: 29,
		text: 'Social Header',
		url: 'https://social-header.atanas.info'
	},
	{
		index: 30,
		text: "Scriptex's Socials",
		url: 'https://socials.atanas.info'
	},
	{
		index: 31,
		text: 'SOD64',
		url: 'https://sod.atanas.info'
	},
	{
		index: 32,
		text: 'SVG64',
		url: 'https://svg64.atanas.info'
	},
	{
		index: 33,
		text: 'Tetris Game',
		url: 'https://tetris.atanas.info'
	},
	{
		index: 34,
		text: 'Touchsweep',
		url: 'https://touchsweep.atanas.info'
	},
	{
		index: 35,
		text: 'TS Helpers',
		url: 'https://ts-helpers.atanas.info'
	},
	{
		index: 35,
		text: 'ViK Varna Alerts',
		url: 'https://vik-varna-alerts.atanas.info'
	}
].map((item, index) => ({
	...item,
	image: `/images/unsplash/${(index % 25) + 1}.jpeg`
}));

export const emailTemplates = [
	'/email-templates/template1.html',
	'/email-templates/template2.html',
	'/email-templates/template3.html',
	'/email-templates/template4.html',
	'/email-templates/template5.html',
	'/email-templates/template6.html',
	'/email-templates/template7.html',
	'/email-templates/template8.html',
	'/email-templates/template9.html',
	'/email-templates/template10.html',
	'/email-templates/template11.html',
	'/email-templates/template12.html',
	'/email-templates/template13.html'
];
