import { Routes } from './routes';

export type Project = {
	readonly url: string;
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
};

export type SubPage = {
	readonly url: Routes | string;
	readonly text: string;
	readonly image: string;
};

export const projects: WebProject[] = [
	{
		url: 'https://app.home.eon.com/',
		image: '/images/temp/E.ON-Home.png',
		title: 'E.ON Home',
		description: 'Typescript, SCSS, React, Redux, MS Azure, AWS, NodeJS, Jest, React Testing Library, Cypress',
		skip: false
	},
	{
		url: 'https://admin.eonhome.eu/',
		image: '/images/temp/E.ON-H.E.M.S-(Home-Energy-Management-System).jpg',
		title: 'E.ON H.E.M.S (Home Energy Management System)',
		description: 'Typescript, SCSS, Angular, Redux, MS Azure, AWS, NodeJS, Cypress',
		skip: false
	},
	{
		url: 'https://mama-culinar.com/',
		image: '/images/temp/mama-culinar.jpg',
		title: 'Mama Culinar',
		description: 'PHP, Javascript, CSS, HTML, WordPress',
		skip: false
	},
	{
		url: 'https://app.home.eonfoton.pl/',
		image: '/images/temp/foton-home.png',
		title: 'Foton Home',
		description: 'Typescript, SCSS, Angular, Redux, MS Azure, AWS, NodeJS, Jest, React Testing Library',
		skip: false
	},
	{
		url: 'https://xpndnow.com/',
		image: '/images/temp/xpnd.jpg',
		title: 'XPND',
		description: 'Typescript, SCSS, React, Redux, NodeJS, Jest, Enzyme',
		skip: false
	},
	{
		url: 'https://xpndnow.com/ebook',
		image: '/images/temp/xpnd-ebook.jpg',
		title: 'XPND Ebook',
		description: 'Typescript, SCSS, React, Redux, NodeJS',
		skip: false
	},
	{
		url: 'https://demo.xpndnow.com/',
		image: '/images/temp/XPND-demo-application.jpg',
		title: 'XPND demo application',
		description: 'Typescript, SCSS, React, Redux, NodeJS',
		skip: false
	},
	{
		url: 'https://salary.atanas.info/',
		image: '/images/temp/salary-calculator.png',
		title: 'Freelance Salary Calculator',
		description: 'Typescript, React, Next.js, MongoDB, MUI',
		skip: false
	},
	{
		url: 'https://emailio.com/',
		image: '/images/temp/Emailio-Landing.jpg',
		title: 'Emailio Landing',
		description: 'CSS, Javascript, HTML',
		skip: false
	},
	{
		url: 'https://emailio.vercel.app/',
		image: '/images/temp/Emailio-Web-Application.png',
		title: 'Emailio Web Application',
		description: 'SCSS, Javascript, React, Redux, Redux Saga, Jest, Enzyme',
		skip: false
	},
	{
		url: 'https://www.nulla.tv/',
		image: '/images/temp/nulla-tv.jpg',
		title: 'Nulla TV',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://kinetikautomotive.com/',
		image: '/images/temp/kinetik-automotive.jpg',
		title: 'Kinetik Automotive',
		description: 'HTML5, CSS3, Javascript, Fullpage JS, Vue, Nuxt, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://kinetik-e.com/',
		image: '/images/temp/Kinetik-Electric-Karting-Championship.jpg',
		title: 'Kinetik Electric Karting Championship',
		description: 'HTML5, SVG, CSS3, Javascript, React, Styled Components',
		skip: true
	},
	{
		url: 'https://www.sod.bg/',
		image: '/images/temp/SOD-64-(СОД-64).jpg',
		title: 'SOD 64 (СОД 64)',
		description: 'HTML5, CSS3, Javascript, jQuery, PHP',
		skip: false
	},
	{
		url: 'https://at-the-wall.atanas.info',
		image: '/images/temp/at-the-wall.jpg',
		title: 'At the Wall',
		description: 'CSS3, PHP',
		skip: false
	},
	{
		url: 'https://snake.atanas.info',
		image: '/images/temp/material-snake.png',
		title: 'Material Snake',
		description: 'Typescript, HTML, CSS3',
		skip: false
	},
	{
		url: 'https://influencingforgood.com/',
		image: '/images/temp/Influencing-For-Good.png',
		title: 'Influencing For Good',
		description: 'Javascript, SCSS, React, Redux, Redux Saga',
		skip: false
	},
	{
		url: 'https://tetris.atanas.info',
		image: '/images/temp/material-tetris.png',
		title: 'Material Tetris',
		description: 'Typescript, HTML, CSS3',
		skip: false
	},
	{
		url: 'https://2048.atanas.info',
		image: '/images/temp/2048.png',
		title: '2048',
		description: 'Typescript, HTML, CSS3',
		skip: false
	},
	{
		url: 'https://retirement-calc.vercel.app/',
		image: '/images/temp/retirement-calculator.jpg',
		title: 'Retirement calculator',
		description: 'Javascript, SCSS, Vue, Vuex, Chart JS',
		skip: false
	},
	{
		url: 'https://paternalismforgood.com/',
		image: '/images/temp/Paternalism-For-Good.png',
		title: 'Paternalism For Good',
		description: 'Javascript, SCSS, React, Redux, Redux Saga',
		skip: false
	},
	{
		url: 'https://fertility-tool.vercel.app/',
		image: '/images/temp/fertility-tool.png',
		title: 'Fertility tool',
		description: 'Typescript, SCSS, React, Redux, Redux Saga',
		skip: false
	},
	{
		url: 'https://imgn.vercel.app/',
		image: '/images/temp/imgn.png',
		title: 'IMGN',
		description: 'Typescript, SCSS, React, Redux, Redux Saga',
		skip: false
	},
	{
		url: 'https://three-11.com/',
		image: '/images/temp/three-11.png',
		title: 'Three 11',
		description: 'HTML5, CSS3, SVG, Javascript, D3',
		skip: false
	},
	{
		url: 'https://flows.vercel.app/',
		image: '/images/temp/Three-11-Company-Flows.png',
		title: 'Three 11 Company Flows',
		description: 'Javascript, Stylus, VuePress, NodeJS',
		skip: false
	},
	{
		url: 'https://html-lab.com/',
		image: '/images/temp/html-lab.jpg',
		title: 'HTML Lab',
		description: 'HTML5, CSS3, Javascript',
		skip: false
	},
	{
		url: 'https://malaikapictures.com/',
		image: '/images/temp/malaika-pictures.jpg',
		title: 'Malaika Pictures',
		description: 'HTML5, CSS3, Javascript, Fullpage JS, Shuffle JS, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://pascoe.cn/',
		image: '/images/temp/pascoe.jpg',
		title: 'Pascoe',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://varnafoodtours.com/',
		image: '/images/temp/Varna-Food-Tours.jpg',
		title: 'Varna Food Tours',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: true
	},
	{
		url: 'https://ftypeforsale.com/',
		image: '/images/temp/F-Type-For-Sale.jpg',
		title: 'F Type For Sale',
		description: 'HTML5, CSS3, Javascript',
		skip: true
	},
	{
		url: 'https://www.zeevan.com/',
		image: '/images/temp/zeevan.jpg',
		title: 'Zeevan',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: true
	},
	{
		url: 'https://www.mariopricken.com/',
		image: '/images/temp/mario-pricken.jpg',
		title: 'Mario Pricken',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: true
	},
	{
		url: 'https://sqillinehealth.com/',
		image: '/images/temp/sqillinehealth.jpg',
		title: 'Sqillinehealth',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: true
	},
	{
		url: 'https://kinetik.bg/',
		image: '/images/temp/kinetik.jpg',
		title: 'Kinetik',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: true
	},
	{
		url: 'https://danariely.com/',
		image: '/images/temp/Dan-Ariely.jpg',
		title: 'Dan Ariely',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://housez-bg.com/',
		image: '/images/temp/housez.jpg',
		title: 'The House Z',
		description: 'Typescript, SCSS, React, Next.js, ShuffleJS, Swiper',
		skip: false
	},
	{
		url: 'https://shortwhale.com/',
		image: '/images/temp/shortwhale.jpg',
		title: 'Shortwhale',
		description: 'Typescript, SCSS, React, Redux, Redux Saga, NodeJS, PostgreSQL',
		skip: true
	},
	{
		url: 'https://onelogic.de/',
		image: '/images/temp/one-logic.jpg',
		title: 'One Logic',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: true
	},
	{
		url: 'https://hochzeitskiste.info/',
		image: '/images/temp/hochzeitskiste.jpg',
		title: 'Hochzeitskiste',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: true
	},
	{
		url: 'https://social-header.atanas.info/',
		image: '/images/temp/social-header.png',
		title: 'Social Header',
		description: 'React, SCSS, Parcel',
		skip: false
	},
	{
		url: 'https://www.predictablyirrational.com/',
		image: '/images/temp/Predictably-Irrational.jpg',
		title: 'Predictably Irrational',
		description: 'HTML, Advanced CSS, SCSS, PostCSS, Javascript, Webpack',
		skip: false
	},
	{
		url: 'https://payoffbook.com/',
		image: '/images/temp/Payoff.jpg',
		title: 'Payoff',
		description: 'HTML, SVG, Sketch, SCSS, PostCSS, Javascript, Swiper, Webpack',
		skip: false
	},
	{
		url: 'https://thehonesttruthaboutdishonesty.com/',
		image: '/images/temp/The-(Honest)-Truth-About-Dishonesty.jpg',
		title: 'The (Honest) Truth About Dishonesty',
		description: 'HTML, SVG, SCSS, PostCSS, Webpack',
		skip: false
	},
	{
		url: 'https://irrationallyyours.com/',
		image: '/images/temp/Irrationally-Yours.jpg',
		title: 'Irrationally Yours',
		description: 'HTML, SVG, SCSS, PostCSS, Javascript, Swiper, ShuffleJS, Webpack',
		skip: false
	},
	{
		url: 'https://amazingdecisionsbook.com/',
		image: '/images/temp/Amazing-Decisions.jpg',
		title: 'Amazing Decisions',
		description: 'HTML, SVG, SCSS, PostCSS, Javascript, Swiper, Webpack',
		skip: false
	},
	{
		url: 'https://kinetik.atanas.info/',
		image: '/images/temp/kinetik-nuxt.jpg',
		title: 'Kinetik',
		description: 'Vue, SVG, SCSS, PostCSS, Javascript, Swiper, Nuxt',
		skip: true
	},
	{
		url: 'https://galaktika.bg/',
		image: '/images/temp/galaktika.jpg',
		title: 'Galaktika',
		description: 'HTML, SVG, SCSS, PostCSS, WebComponents, Vite',
		skip: true
	},
	{
		url: 'https://danariely.co.il/',
		image: '/images/temp/Dan-Ariely-(Hebrew-version).jpg',
		title: 'Dan Ariely (Hebrew version)',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://irrationallyyours.com/he/',
		image: '/images/temp/Irrationally-Yours-(Hebrew-version).jpg',
		title: 'Irrationally Yours (Hebrew version)',
		description: 'HTML, SVG, SCSS, PostCSS, Javascript, Swiper, ShuffleJS, Webpack',
		skip: false
	},
	{
		url: 'https://www.predictablyirrational.com/he/',
		image: '/images/temp/Predictably-Irrational-(Hebrew-version).jpg',
		title: 'Predictably Irrational (Hebrew version)',
		description: 'HTML, Advanced CSS, SCSS, PostCSS, Javascript, Webpack',
		skip: false
	},
	{
		url: 'https://amazingdecisionsbook.com/he/',
		image: '/images/temp/Amazing-Decisions-(Hebrew-version).jpg',
		title: 'Amazing Decisions (Hebrew version)',
		description: 'HTML, SVG, SCSS, PostCSS, Javascript, Swiper, Webpack',
		skip: false
	},
	{
		url: 'https://hala.film/',
		image: '/images/temp/Hàla.jpg',
		title: 'Hàla',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://dan-vs-chatgpt.vercel.app/',
		image: '/images/temp/dan-vs-chatgpt.jpeg',
		title: 'Dan vs ChatGPT',
		description: 'Typescript, React, SCSS, Next.js, React Query',
		skip: false
	},
	{
		url: '',
		image: '/images/temp/atelier-coolinar.png',
		title: 'Atelier Coolinar (Ателие Кулинар)',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: false
	},
	{
		url: '',
		image: '/images/temp/x-form.png',
		title: 'X Form',
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		skip: false
	},
	{
		url: '',
		image: '/images/temp/faraon-bg.jpg',
		title: 'Faraon (Фараон)',
		description: 'HTML5, CSS3, Javascript, jQuery, PHP',
		skip: false
	},
	{
		url: '',
		image: '/images/temp/sirius-real-estate.png',
		title: 'Sirius Real Estate',
		description: 'HTML5, CSS3, Javascript, jQuery, PHP, WordPress',
		skip: false
	}
];

export const mobileApps: ExtendedProject[] = [
	{
		url: 'https://apps.apple.com/gb/app/e-on-home-solar-and-heating/id1468486784#?platform=iphone',
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
		]
	},
	{
		url: 'https://apps.apple.com/us/app/foton-home/id1525688620#?platform=iphone',
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
		]
	},
	{
		url: 'https://play.google.com/store/apps/details?id=com.eon.home.eu',
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
		]
	},
	{
		url: 'https://play.google.com/store/apps/details?id=com.foton.home.eu',
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
		]
	},
	{
		url: 'https://apps.apple.com/gb/app/e-on-home-solar-and-heating/id1468486784#?platform=ipad',
		title: 'E.ON Home for iPad',
		description: 'An award winning smart energy management application for iPad',
		details: 'Typescript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		images: ['eon-home-ipad-dark.jpg', 'eon-home-ipad-light.jpg'],
		adjustable: true
	},
	{
		url: 'https://apps.apple.com/us/app/foton-home/id1525688620#?platform=ipad',
		title: 'Foton Home for iPad',
		description: 'Smart energy management application for iPad',
		details: 'Typescript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		images: ['foton-home-ipad-light.jpg', 'foton-home-ipad-dark.jpg'],
		adjustable: true
	}
];

export const automotiveProjects: ExtendedProject[] = [
	{
		url: 'https://kinetik-infotainment.netlify.app/',
		title: 'Kinetik Infotainment',
		description: 'Dashboard and infotainment system for the Kinetik Model 27 electric kart',
		details: 'Typescript, SCSS, SVG, React, Redux, NodeJS, Express, WebSocket',
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
		]
	},
	{
		url: 'https://volvo-dashboard.netlify.app/',
		title: 'Volvo Dashboard',
		description: 'Dashboard system for the Volvo P1800 custom hybrid automobile',
		details: 'Typescript, SCSS, SVG, React, Redux, NodeJS, Express, WebSocket',
		images: [
			'volvo-dashboard-1.jpg',
			'volvo-dashboard-2.jpg',
			'volvo-dashboard-3.jpg',
			'volvo-dashboard-4.jpg',
			'volvo-dashboard-5.jpg'
		]
	}
];

export const statsItems: SubPage[] = [
	{
		url: Routes.STATS_GITHUB,
		text: 'Github',
		image: '/images/temp/github.jpg'
	},
	{
		url: Routes.STATS_GITLAB,
		text: 'Gitlab',
		image: '/images/temp/gitlab.jpg'
	},
	{
		url: Routes.STATS_NPM,
		text: 'NPM',
		image: '/images/temp/npm.jpg'
	}
];

export const portfolioItems: SubPage[] = [
	{
		url: Routes.PORTFOLIO_WEB_APPS,
		text: 'Web applications',
		image: '/images/temp/web-apps.jpg'
	},
	{
		url: Routes.PORTFOLIO_MOBILE_APPS,
		text: 'Mobile applications',
		image: '/images/temp/mobile-apps.jpg'
	},
	{
		url: Routes.PORTFOLIO_AUTOMOTIVE_APPS,
		text: 'Automotive applications',
		image: '/images/temp/automotive-apps.jpg'
	},
	{
		url: Routes.PORTFOLIO_EMAIL_TEMPLATES,
		text: 'Email templates',
		image: '/images/temp/email-templates.jpeg'
	},
	{
		url: Routes.PORTFOLIO_PERSONAL_PROJECTS,
		text: 'Personal projects',
		image: '/images/temp/personal-apps.jpg'
	},
	{
		url: Routes.PORTFOLIO_OPEN_SOURCE_PROJECTS,
		text: 'Open source',
		image: '/images/temp/open-source.jpg'
	}
];

export const personalProjects: SubPage[] = [
	{
		url: 'https://2048.atanas.info',
		text: '2048 Game'
	},
	{
		url: 'https://attr-i18n.atanas.info',
		text: 'attr-i18n'
	},
	{
		url: 'https://animate-me.atanas.info',
		text: 'AnimateMe'
	},
	{
		url: 'https://at-the-wall.atanas.info',
		text: 'At the Wall'
	},
	{
		url: 'https://calendar-widget.atanas.info',
		text: 'Calendar Widget'
	},
	{
		url: 'https://dator.atanas.info',
		text: '(Vali) Dator'
	},
	{
		url: 'https://eonhome.atanas.info',
		text: 'Combined API Docs Gateway for E.ON Home'
	},
	{
		url: 'https://ga-beacon.atanas.info',
		text: 'GA Beacon'
	},
	{
		url: 'https://github-insights.atanas.info',
		text: 'Github Insights (beta)'
	},
	{
		url: 'https://gitlab-calendar.atanas.info',
		text: 'Gitlab Calendar'
	},
	{
		url: 'https://html5-form-validator.atanas.info',
		text: 'HTML5 Form Validator'
	},
	{
		url: 'https://intro-scroll.atanas.info',
		text: 'Intro Scroll'
	},
	{
		url: 'https://itcss.atanas.info',
		text: 'ITCSS'
	},
	{
		url: 'https://itscss.atanas.info',
		text: 'ITSCSS'
	},
	{
		url: 'https://kinetik.atanas.info',
		text: 'Kinetik'
	},
	{
		url: 'https://no-html.atanas.info',
		text: 'No HTML'
	},
	{
		url: 'https://npm-maintainer.atanas.info',
		text: 'NPM Maintainer'
	},
	{
		url: 'https://pass-score.atanas.info',
		text: 'Pass Score'
	},
	{
		url: 'https://react-accordion-ts.atanas.info',
		text: 'React Accordion TS'
	},
	{
		url: 'https://react-carousel.atanas.info',
		text: 'React Carousel'
	},
	{
		url: 'https://react-dropper.atanas.info',
		text: 'React Dropper'
	},
	{
		url: 'https://react-round-carousel.atanas.info',
		text: 'React Round Carousel'
	},
	{
		url: 'https://react-svg-donuts.atanas.info',
		text: 'React SVG Donuts'
	},
	{
		url: 'https://round-carousel-component.atanas.info',
		text: 'Round Carousel Component'
	},
	{
		url: 'https://salary.atanas.info',
		text: 'Freelance Salary Calculator'
	},
	{
		url: 'https://scriptex.js.org',
		text: 'Scriptex'
	},
	{
		url: 'https://scss-goodies.atanas.info',
		text: 'SCSS Goodies'
	},
	{
		url: 'https://shortener.atanas.info',
		text: 'URL Shortener'
	},
	{
		url: 'https://snake.atanas.info',
		text: 'Snake Game'
	},
	{
		url: 'https://social-header.atanas.info',
		text: 'Social Header'
	},
	{
		url: 'https://socials.atanas.info',
		text: "Scriptex's Socials"
	},
	{
		url: 'https://sod.atanas.info',
		text: 'SOD64'
	},
	{
		url: 'https://svg64.atanas.info',
		text: 'SVG64'
	},
	{
		url: 'https://tetris.atanas.info',
		text: 'Tetris Game'
	},
	{
		url: 'https://touchsweep.atanas.info',
		text: 'Touchsweep'
	},
	{
		url: 'https://ts-helpers.atanas.info',
		text: 'TS Helpers'
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
