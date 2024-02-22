import { Routes } from './routes';

export type Project = {
	readonly url: string;
	readonly index: number;
	readonly title: string;
	readonly description: string;
};

export type WebProject = Project & {
	readonly skip: boolean;
	readonly image: string;
};

export type ExtendedProject = Project & {
	readonly details: string;
	readonly images: string[];
	readonly adjustable?: boolean;
	readonly imageWidth?: number;
	readonly imageHeight?: number;
};

export type SubPage = {
	readonly url: Routes | string;
	readonly text: string;
	readonly image: string;
	readonly index: number;
};

export const projects: WebProject[] = [
	{
		url: 'https://app.home.eon.com/',
		image: '/images/web-apps/E.ON-Home.jpg',
		index: 0,
		title: 'E.ON Home',
		description: 'Typescript, SCSS, React, Redux, MS Azure, AWS, NodeJS, Jest, React Testing Library, Cypress',
		skip: false
	},
	{
		url: 'https://admin.eonhome.eu/',
		image: '/images/web-apps/E.ON-H.E.M.S-(Home-Energy-Management-System).jpg',
		index: 1,
		title: 'E.ON H.E.M.S (Home Energy Management System)',
		description: 'Typescript, SCSS, Angular, Redux, MS Azure, AWS, NodeJS, Cypress',
		skip: false
	},
	{
		url: 'https://mama-culinar.com/',
		image: '/images/web-apps/Mama-Culinar.jpg',
		index: 2,
		title: 'Mama Culinar',
		description: 'PHP, Javascript, CSS, HTML, WordPress',
		skip: false
	},
	{
		url: 'https://app.home.eonfoton.pl/',
		image: '/images/web-apps/Foton-Home.jpg',
		index: 3,
		title: 'Foton Home',
		description: 'Typescript, SCSS, Angular, Redux, MS Azure, AWS, NodeJS, Jest, React Testing Library',
		skip: false
	},
	{
		url: '',
		image: '/images/web-apps/XPND.jpg',
		index: 4,
		title: 'XPND',
		description: 'Typescript, SCSS, React, Redux, NodeJS, Jest, Enzyme',
		skip: false
	},
	{
		url: '',
		image: '/images/web-apps/XPND-Ebook.jpg',
		index: 5,
		title: 'XPND Ebook',
		description: 'Typescript, SCSS, React, Redux, NodeJS',
		skip: false
	},
	{
		url: 'https://xpnd.atanas.info/',
		image: '/images/web-apps/XPND-demo-application.jpg',
		index: 6,
		title: 'XPND demo application',
		description: 'Typescript, SCSS, React, Redux, NodeJS',
		skip: false
	},
	{
		url: 'https://salary.atanas.info/',
		image: '/images/web-apps/Freelance-Salary-Calculator.jpg',
		index: 7,
		title: 'Freelance Salary Calculator',
		description: 'Typescript, React, Next.js, MongoDB, MUI',
		skip: false
	},
	{
		url: 'https://emailio.com/',
		image: '/images/web-apps/Emailio-Landing.jpg',
		index: 8,
		title: 'Emailio Landing',
		description: 'CSS, Javascript, HTML',
		skip: false
	},
	{
		url: 'https://emailio.vercel.app/',
		image: '/images/web-apps/Emailio-Web-Application.jpg',
		index: 9,
		title: 'Emailio Web Application',
		description: 'SCSS, Javascript, React, Redux, Redux Saga, Jest, Enzyme',
		skip: false
	},
	{
		url: 'https://www.nulla.tv/',
		image: '/images/web-apps/Nulla-TV.jpg',
		index: 10,
		title: 'Nulla TV',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://kinetikautomotive.com/',
		image: '/images/web-apps/Kinetik-Automotive.jpg',
		index: 11,
		title: 'Kinetik Automotive',
		description: 'HTML5, CSS3, Javascript, Fullpage JS, Vue, Nuxt, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://kinetik-championship.com/',
		image: '/images/web-apps/Kinetik-Electric-Karting-Championship.jpg',
		index: 12,
		title: 'Kinetik Electric Karting Championship',
		description: 'HTML5, SVG, CSS3, Javascript, React, Styled Components',
		skip: false
	},
	{
		url: 'https://www.sod.bg/',
		image: '/images/web-apps/SOD-64-(СОД-64).jpg',
		index: 13,
		title: 'SOD 64 (СОД 64)',
		description: 'HTML5, CSS3, Javascript, jQuery, PHP',
		skip: false
	},
	{
		url: 'https://at-the-wall.atanas.info',
		image: '/images/web-apps/At-the-Wall.jpg',
		index: 14,
		title: 'At the Wall',
		description: 'CSS3, PHP',
		skip: false
	},
	{
		url: 'https://snake.atanas.info',
		image: '/images/web-apps/Material-Snake.jpg',
		index: 15,
		title: 'Material Snake',
		description: 'Typescript, HTML, CSS3',
		skip: false
	},
	{
		url: 'https://influencingforgood.com/',
		image: '/images/web-apps/Influencing-For-Good.jpg',
		index: 16,
		title: 'Influencing For Good',
		description: 'Javascript, SCSS, React, Redux, Redux Saga',
		skip: false
	},
	{
		url: 'https://tetris.atanas.info',
		image: '/images/web-apps/Material-Tetris.jpg',
		index: 17,
		title: 'Material Tetris',
		description: 'Typescript, HTML, CSS3',
		skip: false
	},
	{
		url: 'https://2048.atanas.info',
		image: '/images/web-apps/2048.jpg',
		index: 18,
		title: '2048',
		description: 'Typescript, HTML, CSS3',
		skip: false
	},
	{
		url: 'https://retirement-calc.vercel.app/',
		image: '/images/web-apps/Retirement-calculator.jpg',
		index: 19,
		title: 'Retirement calculator',
		description: 'Javascript, SCSS, Vue, Vuex, Chart JS',
		skip: false
	},
	{
		url: '',
		image: '/images/web-apps/Paternalism-For-Good.jpg',
		index: 20,
		title: 'Paternalism For Good',
		description: 'Javascript, SCSS, React, Redux, Redux Saga',
		skip: false
	},
	{
		url: 'https://fertility-tool.vercel.app/',
		image: '/images/web-apps/Fertility-tool.jpg',
		index: 21,
		title: 'Fertility tool',
		description: 'Typescript, SCSS, React, Redux, Redux Saga',
		skip: false
	},
	{
		url: 'https://imgn.vercel.app/',
		image: '/images/web-apps/IMGN.jpg',
		index: 22,
		title: 'IMGN',
		description: 'Typescript, SCSS, React, Redux, Redux Saga',
		skip: false
	},
	{
		url: 'https://three-11.com/',
		image: '/images/web-apps/Three-11.jpg',
		index: 23,
		title: 'Three 11',
		description: 'HTML5, CSS3, SVG, Javascript, D3',
		skip: false
	},
	{
		url: 'https://flows.vercel.app/',
		image: '/images/web-apps/Three-11-Company-Flows.jpg',
		index: 24,
		title: 'Three 11 Company Flows',
		description: 'Javascript, Stylus, VuePress, NodeJS',
		skip: false
	},
	{
		url: 'https://html-lab.com/',
		image: '/images/web-apps/HTML-Lab.jpg',
		index: 25,
		title: 'HTML Lab',
		description: 'HTML5, CSS3, Javascript',
		skip: false
	},
	{
		url: 'https://malaikapictures.com/',
		image: '/images/web-apps/Malaika-Pictures.jpg',
		index: 26,
		title: 'Malaika Pictures',
		description: 'HTML5, CSS3, Javascript, Fullpage JS, Shuffle JS, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://pascoe.de/',
		image: '/images/web-apps/Pascoe.jpg',
		index: 27,
		title: 'Pascoe',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://varnafoodtours.com/',
		image: '/images/web-apps/Varna-Food-Tours.jpg',
		index: 28,
		title: 'Varna Food Tours',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://ftypeforsale.com/',
		image: '/images/web-apps/F-Type-For-Sale.jpg',
		index: 29,
		title: 'F Type For Sale',
		description: 'HTML5, CSS3, Javascript',
		skip: false
	},
	{
		url: 'https://www.zeevan.com/',
		image: '/images/web-apps/zeevan.jpg',
		index: 30,
		title: 'Zeevan',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://www.mariopricken.com/',
		image: '/images/web-apps/mario-pricken.jpg',
		index: 31,
		title: 'Mario Pricken',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://sqillinehealth.com/',
		image: '/images/web-apps/sqillinehealth.jpg',
		index: 32,
		title: 'Sqillinehealth',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://kinetik.bg/',
		image: '/images/web-apps/kinetik.jpg',
		index: 33,
		title: 'Kinetik Fundraising',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://danariely.com/',
		image: '/images/web-apps/Dan-Ariely.jpg',
		index: 34,
		title: 'Dan Ariely',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://housez-bg.com/',
		image: '/images/web-apps/The-House-Z.jpg',
		index: 35,
		title: 'The House Z',
		description: 'Typescript, SCSS, React, Next.js, ShuffleJS, Swiper',
		skip: false
	},
	{
		url: 'https://onelogic.de/',
		image: '/images/web-apps/one-logic.jpg',
		index: 36,
		title: 'One Logic',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://hochzeitskiste.info/',
		image: '/images/web-apps/hochzeitskiste.jpg',
		index: 37,
		title: 'Hochzeitskiste',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://social-header.atanas.info/',
		image: '/images/web-apps/Social-Header.jpg',
		index: 38,
		title: 'Social Header',
		description: 'React, SCSS, Parcel',
		skip: false
	},
	{
		url: 'https://www.predictablyirrational.com/',
		image: '/images/web-apps/Predictably-Irrational.jpg',
		index: 39,
		title: 'Predictably Irrational',
		description: 'HTML, Advanced CSS, SCSS, PostCSS, Javascript, Webpack',
		skip: false
	},
	{
		url: 'https://payoffbook.com/',
		image: '/images/web-apps/Payoff.jpg',
		index: 40,
		title: 'Payoff',
		description: 'HTML, SVG, Sketch, SCSS, PostCSS, Javascript, Swiper, Webpack',
		skip: false
	},
	{
		url: 'https://thehonesttruthaboutdishonesty.com/',
		image: '/images/web-apps/The-(Honest)-Truth-About-Dishonesty.jpg',
		index: 41,
		title: 'The (Honest) Truth About Dishonesty',
		description: 'HTML, SVG, SCSS, PostCSS, Webpack',
		skip: false
	},
	{
		url: 'https://irrationallyyours.com/',
		image: '/images/web-apps/Irrationally-Yours.jpg',
		index: 42,
		title: 'Irrationally Yours',
		description: 'HTML, SVG, SCSS, PostCSS, Javascript, Swiper, ShuffleJS, Webpack',
		skip: false
	},
	{
		url: 'https://amazingdecisionsbook.com/',
		image: '/images/web-apps/Amazing-Decisions.jpg',
		index: 43,
		title: 'Amazing Decisions',
		description: 'HTML, SVG, SCSS, PostCSS, Javascript, Swiper, Webpack',
		skip: false
	},
	{
		url: 'https://kinetik.atanas.info/',
		image: '/images/web-apps/kinetik-nuxt.jpg',
		index: 44,
		title: 'Kinetik Prototype',
		description: 'Vue, SVG, SCSS, PostCSS, Javascript, Swiper, Nuxt',
		skip: false
	},
	{
		url: 'https://galaktika.bg/',
		image: '/images/web-apps/galaktika.jpg',
		index: 45,
		title: 'Galaktika',
		description: 'HTML, SVG, SCSS, PostCSS, WebComponents, Vite',
		skip: false
	},
	{
		url: 'https://danariely.co.il/',
		image: '/images/web-apps/Dan-Ariely-(Hebrew-version).jpg',
		index: 46,
		title: 'Dan Ariely (Hebrew version)',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://irrationallyyours.com/he/',
		image: '/images/web-apps/Irrationally-Yours-(Hebrew-version).jpg',
		index: 47,
		title: 'Irrationally Yours (Hebrew version)',
		description: 'HTML, SVG, SCSS, PostCSS, Javascript, Swiper, ShuffleJS, Webpack',
		skip: false
	},
	{
		url: 'https://www.predictablyirrational.com/he/',
		image: '/images/web-apps/Predictably-Irrational-(Hebrew-version).jpg',
		index: 48,
		title: 'Predictably Irrational (Hebrew version)',
		description: 'HTML, Advanced CSS, SCSS, PostCSS, Javascript, Webpack',
		skip: false
	},
	{
		url: 'https://amazingdecisionsbook.com/he/',
		image: '/images/web-apps/Amazing-Decisions-(Hebrew-version).jpg',
		index: 49,
		title: 'Amazing Decisions (Hebrew version)',
		description: 'HTML, SVG, SCSS, PostCSS, Javascript, Swiper, Webpack',
		skip: false
	},
	{
		url: 'https://payoffbook.com/he/',
		image: '/images/web-apps/Payoff-(Hebrew-version).jpg',
		index: 50,
		title: 'Payoff (Hebrew version)',
		description: 'HTML, SVG, SCSS, PostCSS, Javascript, Swiper, Webpack',
		skip: false
	},
	{
		url: 'https://demetry.film/',
		image: '/images/web-apps/Hàla.jpg',
		index: 51,
		title: 'Demetry',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://dan-vs-chatgpt.vercel.app/',
		image: '/images/web-apps/Dan-vs-ChatGPT.jpg',
		index: 52,
		title: 'Dan vs ChatGPT',
		description: 'Typescript, React, SCSS, Next.js, React Query',
		skip: false
	},
	{
		url: '',
		image: '/images/web-apps/atelier-coolinar.png',
		index: 53,
		title: 'Atelier Coolinar (Ателие Кулинар)',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: false
	},
	{
		url: '',
		image: '/images/web-apps/x-form.png',
		index: 54,
		title: 'X Form',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: false
	},
	{
		url: '',
		image: '/images/web-apps/faraon-bg.jpg',
		index: 55,
		title: 'Faraon (Фараон)',
		description: 'HTML5, CSS3, Javascript, jQuery, PHP',
		skip: false
	},
	{
		url: '',
		image: '/images/web-apps/sirius-real-estate.png',
		index: 56,
		title: 'Sirius Real Estate',
		description: 'HTML5, CSS3, Javascript, jQuery, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://www.roomgo.com.ar/blog/',
		image: '/images/web-apps/RoomGo-Blog.jpg',
		index: 57,
		title: 'RoomGo Blog',
		description: 'HTML5, CSS3, Javascript, jQuery, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://bmmc.at/',
		image: '/images/web-apps/BMMC.jpg',
		index: 58,
		title: 'BMMC',
		description: 'HTML5, CSS3, Javascript, jQuery, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://www.issta.co.il/',
		image: '/images/web-apps/Issta.jpg',
		index: 59,
		title: 'Issta',
		description: 'HTML5, CSS3, Javascript, jQuery, AngularJS',
		skip: false
	},
	{
		url: 'https://social-capital.vercel.app/',
		image: '/images/web-apps/Social-Capital.png',
		index: 60,
		title: 'Social Capital',
		description: 'Typescript, MJML, SCSS, SVG, React, Next.js, Auth.JS, MongoDB, NodeJS, Nodemailer',
		skip: false
	},
	{
		url: 'https://misbeliefbook.com/',
		image: '/images/web-apps/Misbelief.jpg',
		index: 61,
		title: 'Misbelief',
		description: 'Typescript, SCSS, SVG, React, Next.js, NodeJS, Swiper',
		skip: false
	},
	{
		url: 'https://web.mit.edu/ariely/www/MIT/index.html',
		image: '/images/web-apps/Dan-Ariely-MIT.jpg',
		index: 62,
		title: 'Dan Ariely MIT',
		description: "Dan Ariely's MIT page - HTML, SVG, SCSS",
		skip: false
	},
	{
		url: 'https://edukartgo.com',
		image: '/images/web-apps/Kinetik-STEAM-Education-Kit.jpg',
		index: 63,
		title: 'Kinetik STEAM Education Kit',
		description: 'Typescript, SVG, React, Next.js, Emotion',
		skip: false
	}
];

export const mobileApps: ExtendedProject[] = [
	{
		url: 'https://apps.apple.com/gb/app/e-on-home-solar-and-heating/id1468486784#?platform=iphone',
		index: 0,
		title: 'E.ON Home for iPhone',
		description: 'An award winning smart energy management application for iOS',
		details: 'Typescript, React, React Native, Redux, MS Azure, AWS, NodeJS',
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
		imageWidth: 600,
		imageHeight: 1299
	},
	{
		url: 'https://apps.apple.com/us/app/foton-home/id1525688620#?platform=iphone',
		index: 1,
		title: 'Foton Home for iPhone',
		description: 'Smart energy management application for iOS',
		details: 'Typescript, React, React Native, Redux, MS Azure, AWS, NodeJS',
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
		imageWidth: 600,
		imageHeight: 1299
	},
	{
		url: 'https://play.google.com/store/apps/details?id=com.eon.home.eu',
		index: 2,
		title: 'E.ON Home for Android',
		description: 'An award winning smart energy management application for Android',
		details: 'Typescript, React, React Native, Redux, MS Azure, AWS, NodeJS',
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
		imageWidth: 310,
		imageHeight: 620
	},
	{
		url: 'https://play.google.com/store/apps/details?id=com.foton.home.eu',
		index: 3,
		title: 'Foton Home for Android',
		description: 'Smart energy management application for Android',
		details: 'Typescript, React, React Native, Redux, MS Azure, AWS, NodeJS',
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
		imageWidth: 310,
		imageHeight: 620
	},
	{
		url: 'https://apps.apple.com/gb/app/e-on-home-solar-and-heating/id1468486784#?platform=ipad',
		index: 4,
		title: 'E.ON Home for iPad',
		description: 'An award winning smart energy management application for iPad',
		details: 'Typescript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		images: ['eon-home-ipad-dark.jpg', 'eon-home-ipad-light.jpg'],
		adjustable: true,
		imageWidth: 1286,
		imageHeight: 1716
	},
	{
		url: 'https://apps.apple.com/us/app/foton-home/id1525688620#?platform=ipad',
		index: 5,
		title: 'Foton Home for iPad',
		description: 'Smart energy management application for iPad',
		details: 'Typescript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		images: ['foton-home-ipad-light.jpg', 'foton-home-ipad-dark.jpg'],
		adjustable: true,
		imageWidth: 1286,
		imageHeight: 1716
	}
];

export const automotiveProjects: ExtendedProject[] = [
	{
		url: 'https://gokart-ui.atanas.info/',
		index: 0,
		title: 'Kinetik Infotainment',
		description: 'Dashboard and infotainment system for the Kinetik Model 27 electric kart',
		details: 'Typescript, SCSS, SVG, React, Redux, NodeJS, Express, WebSocket, Electron',
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
		imageWidth: 2400,
		imageHeight: 1440
	},
	{
		url: 'https://volvo-dashboard.atanas.info/',
		index: 1,
		title: 'Volvo Dashboard',
		description: 'Dashboard system for the Volvo P1800 custom hybrid automobile',
		details: 'Typescript, SCSS, SVG, React, Redux, NodeJS, Express, WebSocket',
		images: [
			'volvo-dashboard-1.jpg',
			'volvo-dashboard-2.jpg',
			'volvo-dashboard-3.jpg',
			'volvo-dashboard-4.jpg',
			'volvo-dashboard-5.jpg'
		],
		imageWidth: 1536,
		imageHeight: 411
	},
	{
		url: '',
		// url: 'https://telemetry2-go-ui.vercel.app/',
		index: 2,
		title: 'Motorcycle Dashboard',
		description: 'Dashboard for the electric motorcycle built by Kinetik Automotive',
		details: 'Typescript, SCSS, SVG, React, Redux, NodeJS, Express, WebSocket',
		images: [
			'motorcycle-dashboard01.jpg',
			'motorcycle-dashboard02.jpg',
			'motorcycle-dashboard03.jpg',
			'motorcycle-dashboard04.jpg'
		],
		imageWidth: 1600,
		imageHeight: 960
	},
	{
		url: '',
		index: 3,
		title: 'GoKart Telemetry',
		description: "Cloud-based telemetry system built for the Kinetik's E-Go-Kart",
		details: 'Typescript, SCSS, SVG, React, React Query, NodeJS, Express, WebSocket, NextJS, Google Maps',
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
		imageWidth: 1600,
		imageHeight: 960
	}
];

export const statsItems: SubPage[] = [
	{
		url: Routes.STATS_GITHUB,
		text: 'Github',
		image: '/images/temp/github.jpg',
		index: 0
	},
	{
		url: Routes.STATS_GITLAB,
		text: 'Gitlab',
		image: '/images/temp/gitlab.jpg',
		index: 1
	},
	{
		url: Routes.STATS_NPM,
		text: 'NPM',
		image: '/images/temp/npm.jpg',
		index: 2
	}
];

export const portfolioItems: SubPage[] = [
	{
		url: Routes.PORTFOLIO_WEB_APPS,
		text: 'Web applications',
		image: '/images/temp/web-apps.jpg',
		index: 0
	},
	{
		url: Routes.PORTFOLIO_MOBILE_APPS,
		text: 'Mobile applications',
		image: '/images/temp/mobile-apps.jpg',
		index: 1
	},
	{
		url: Routes.PORTFOLIO_AUTOMOTIVE_APPS,
		text: 'Automotive applications',
		image: '/images/temp/automotive-apps.jpg',
		index: 2
	},
	{
		url: Routes.PORTFOLIO_EMAIL_TEMPLATES,
		text: 'Email templates',
		image: '/images/temp/email-templates.jpeg',
		index: 3
	},
	{
		url: Routes.PORTFOLIO_PERSONAL_PROJECTS,
		text: 'Personal projects',
		image: '/images/temp/personal-apps.jpg',
		index: 4
	},
	{
		url: Routes.PORTFOLIO_OPEN_SOURCE_PROJECTS,
		text: 'Open source',
		image: '/images/temp/open-source.jpg',
		index: 5
	}
];

export const personalProjects: SubPage[] = [
	{
		url: 'https://2048.atanas.info',
		text: '2048 Game',
		index: 0
	},
	{
		url: 'https://attr-i18n.atanas.info',
		text: 'attr-i18n',
		index: 1
	},
	{
		url: 'https://animate-me.atanas.info',
		text: 'AnimateMe',
		index: 2
	},
	{
		url: 'https://at-the-wall.atanas.info',
		text: 'At the Wall',
		index: 3
	},
	{
		url: 'https://calendar-widget.atanas.info',
		text: 'Calendar Widget',
		index: 4
	},
	{
		url: 'https://dator.atanas.info',
		text: '(Vali) Dator',
		index: 5
	},
	{
		url: 'https://eonhome.atanas.info',
		text: 'Combined API Docs Gateway for E.ON Home',
		index: 6
	},
	{
		url: 'https://ga-beacon.atanas.info',
		text: 'GA Beacon',
		index: 7
	},
	{
		url: 'https://github-insights.atanas.info',
		text: 'Github Insights (beta)',
		index: 8
	},
	{
		url: 'https://gitlab-calendar.atanas.info',
		text: 'Gitlab Calendar',
		index: 9
	},
	{
		url: 'https://html5-form-validator.atanas.info',
		text: 'HTML5 Form Validator',
		index: 10
	},
	{
		url: 'https://intro-scroll.atanas.info',
		text: 'Intro Scroll',
		index: 11
	},
	{
		url: 'https://itcss.atanas.info',
		text: 'ITCSS',
		index: 12
	},
	{
		url: 'https://itscss.atanas.info',
		text: 'ITSCSS',
		index: 13
	},
	{
		url: 'https://kinetik.atanas.info',
		text: 'Kinetik',
		index: 14
	},
	{
		url: 'https://no-html.atanas.info',
		text: 'No HTML',
		index: 15
	},
	{
		url: 'https://npm-maintainer.atanas.info',
		text: 'NPM Maintainer',
		index: 16
	},
	{
		url: 'https://pass-score.atanas.info',
		text: 'Pass Score',
		index: 17
	},
	{
		url: 'https://react-accordion-ts.atanas.info',
		text: 'React Accordion TS',
		index: 18
	},
	{
		url: 'https://react-carousel.atanas.info',
		text: 'React Carousel',
		index: 19
	},
	{
		url: 'https://react-dropper.atanas.info',
		text: 'React Dropper',
		index: 20
	},
	{
		url: 'https://react-round-carousel.atanas.info',
		text: 'React Round Carousel',
		index: 21
	},
	{
		url: 'https://react-svg-donuts.atanas.info',
		text: 'React SVG Donuts',
		index: 22
	},
	{
		url: 'https://round-carousel-component.atanas.info',
		text: 'Round Carousel Component',
		index: 23
	},
	{
		url: 'https://salary.atanas.info',
		text: 'Freelance Salary Calculator',
		index: 24
	},
	{
		url: 'https://scriptex.js.org',
		text: 'Scriptex',
		index: 25
	},
	{
		url: 'https://scss-goodies.atanas.info',
		text: 'SCSS Goodies',
		index: 26
	},
	{
		url: 'https://shortener.atanas.info',
		text: 'URL Shortener',
		index: 27
	},
	{
		url: 'https://snake.atanas.info',
		text: 'Snake Game',
		index: 28
	},
	{
		url: 'https://social-header.atanas.info',
		text: 'Social Header',
		index: 29
	},
	{
		url: 'https://socials.atanas.info',
		text: "Scriptex's Socials",
		index: 30
	},
	{
		url: 'https://sod.atanas.info',
		text: 'SOD64',
		index: 31
	},
	{
		url: 'https://svg64.atanas.info',
		text: 'SVG64',
		index: 32
	},
	{
		url: 'https://tetris.atanas.info',
		text: 'Tetris Game',
		index: 33
	},
	{
		url: 'https://touchsweep.atanas.info',
		text: 'Touchsweep',
		index: 34
	},
	{
		url: 'https://ts-helpers.atanas.info',
		text: 'TS Helpers',
		index: 35
	},
	{
		url: 'https://vik-varna-alerts.atanas.info',
		text: 'ViK Varna Alerts',
		index: 35
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
