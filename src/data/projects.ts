import { Routes } from './routes';

export interface Project {
	readonly url: string;
	readonly title: string;
	readonly description: string;
}

export interface WebProject extends Project {
	readonly skip: boolean;
	readonly image: string;
}

export interface ExtendedProject extends Project {
	readonly details: string;
	readonly images: string[];
	readonly adjustable?: boolean;
}

export interface SubPage {
	readonly url: Routes;
	readonly text: string;
	readonly image: string;
}

export const projects: WebProject[] = [
	{
		url: 'https://app.home.eon.com/',
		image: '/images/temp/E.ON-Home.png',
		title: 'E.ON Home',
		description: 'TypeScript, SCSS, React, Redux, MS Azure, AWS, NodeJS, Jest, React Testing Library',
		skip: false
	},
	{
		url: 'https://admin.eonhome.eu/',
		image: '/images/temp/E.ON-H.E.M.S-(Home-Energy-Management-System).png',
		title: 'E.ON H.E.M.S (Home Energy Management System)',
		description: 'TypeScript, SCSS, Angular, Redux, MS Azure, AWS, NodeJS, Cypress',
		skip: false
	},
	{
		url: 'https://mama-culinar.com/',
		image: '/images/temp/mama-culinar.png',
		title: 'Mama Culinar',
		description: 'PHP, JavaScript, CSS, HTML, WordPress',
		skip: false
	},
	{
		url: 'https://app.home.eonfoton.pl/',
		image: '/images/temp/foton-home.png',
		title: 'Foton Home',
		description: 'TypeScript, SCSS, Angular, Redux, MS Azure, AWS, NodeJS, Jest, React Testing Library',
		skip: false
	},
	{
		url: 'https://xpndnow.com/',
		image: '/images/temp/xpnd.png',
		title: 'XPND',
		description: 'TypeScript, SCSS, React, Redux, NodeJS, Jest, Enzyme',
		skip: false
	},
	{
		url: 'https://xpndnow.com/ebook',
		image: '/images/temp/xpnd-ebook.png',
		title: 'XPND Ebook',
		description: 'TypeScript, SCSS, React, Redux, NodeJS',
		skip: false
	},
	{
		url: 'https://demo.xpndnow.com/',
		image: '/images/temp/XPND-demo-application.png',
		title: 'XPND demo application',
		description: 'TypeScript, SCSS, React, Redux, NodeJS',
		skip: false
	},
	{
		url: 'https://emailio.com/',
		image: '/images/temp/Emailio-Landing.png',
		title: 'Emailio Landing',
		description: 'CSS, JavaScript, HTML',
		skip: false
	},
	{
		url: 'https://emailio.vercel.app/',
		image: '/images/temp/Emailio-Web-Application.png',
		title: 'Emailio Web Application',
		description: 'SCSS, JavaScript, React, Redux, Redux Saga, Jest, Enzyme',
		skip: false
	},
	{
		url: 'https://www.nulla.tv/',
		image: '/images/temp/nulla-tv.png',
		title: 'Nulla TV',
		description: 'HTML5, CSS3, JavaScript, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://kinetikautomotive.com/',
		image: '/images/temp/kinetik-automotive.png',
		title: 'Kinetik Automotive',
		description: 'HTML5, CSS3, JavaScript, Fullpage JS, Vue, Nuxt, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://kinetik-e.com/',
		image: '/images/temp/Kinetik-Electric-Karting-Championship.png',
		title: 'Kinetik Electric Karting Championship',
		description: 'HTML5, SVG, CSS3, JavaScript, React, Styled Components',
		skip: true
	},
	{
		url: 'https://www.sod.bg/',
		image: '/images/temp/SOD-64-(СОД-64).png',
		title: 'SOD 64 (СОД 64)',
		description: 'HTML5, CSS3, JavaScript, jQuery, PHP',
		skip: false
	},
	{
		url: 'https://at-the-wall.atanas.info',
		image: '/images/temp/at-the-wall.png',
		title: 'At the Wall',
		description: 'CSS3, PHP',
		skip: false
	},
	{
		url: 'https://snake.atanas.info',
		image: '/images/temp/material-snake.png',
		title: 'Material Snake',
		description: 'TypeScript, HTML, CSS3',
		skip: false
	},
	{
		url: 'https://influencingforgood.com/',
		image: '/images/temp/Influencing-For-Good.png',
		title: 'Influencing For Good',
		description: 'JavaScript, SCSS, React, Redux, Redux Saga',
		skip: false
	},
	{
		url: 'https://tetris.atanas.info',
		image: '/images/temp/material-tetris.png',
		title: 'Material Tetris',
		description: 'TypeScript, HTML, CSS3',
		skip: false
	},
	{
		url: 'https://scriptex.js.org/2048',
		image: '/images/temp/2048.png',
		title: '2048',
		description: 'TypeScript, HTML, CSS3',
		skip: false
	},
	{
		url: 'https://retirement-calc.vercel.app/',
		image: '/images/temp/retirement-calculator.png',
		title: 'Retirement calculator',
		description: 'JavaScript, SCSS, Vue, Vuex, Chart JS',
		skip: false
	},
	{
		url: 'https://paternalismforgood.com/',
		image: '/images/temp/Paternalism-For-Good.png',
		title: 'Paternalism For Good',
		description: 'JavaScript, SCSS, React, Redux, Redux Saga',
		skip: false
	},
	{
		url: 'https://fertility-tool.vercel.app/',
		image: '/images/temp/fertility-tool.png',
		title: 'Fertility tool',
		description: 'TypeScript, SCSS, React, Redux, Redux Saga',
		skip: false
	},
	{
		url: 'https://imgn.vercel.app/',
		image: '/images/temp/imgn.png',
		title: 'IMGN',
		description: 'TypeScript, SCSS, React, Redux, Redux Saga',
		skip: false
	},
	{
		url: 'https://three-11.com/',
		image: '/images/temp/three-11.png',
		title: 'Three 11',
		description: 'HTML5, CSS3, SVG, JavaScript, D3',
		skip: false
	},
	{
		url: 'https://flows.vercel.app/',
		image: '/images/temp/Three-11-Company-Flows.png',
		title: 'Three 11 Company Flows',
		description: 'JavaScript, Stylus, VuePress, NodeJS',
		skip: false
	},
	{
		url: 'https://html-lab.com/',
		image: '/images/temp/html-lab.png',
		title: 'HTML Lab',
		description: 'HTML5, CSS3, JavaScript',
		skip: false
	},
	{
		url: 'https://malaikapictures.com/',
		image: '/images/temp/malaika-pictures.png',
		title: 'Malaika Pictures',
		description: 'HTML5, CSS3, JavaScript, Fullpage JS, Shuffle JS, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://pascoe.cn/',
		image: '/images/temp/pascoe.png',
		title: 'Pascoe',
		description: 'HTML5, CSS3, JavaScript, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://varnafoodtours.com/',
		image: '/images/temp/Varna-Food-Tours.png',
		title: 'Varna Food Tours',
		description: 'HTML5, CSS3, JavaScript, PHP, WordPress',
		skip: true
	},
	{
		url: 'https://ftypeforsale.com/',
		image: '/images/temp/F-Type-For-Sale.png',
		title: 'F Type For Sale',
		description: 'HTML5, CSS3, JavaScript',
		skip: true
	},
	{
		url: 'https://www.zeevan.com/',
		image: '/images/temp/zeevan.png',
		title: 'Zeevan',
		description: 'HTML5, CSS3, JavaScript, PHP, WordPress',
		skip: true
	},
	{
		url: 'https://www.mariopricken.com/',
		image: '/images/temp/mario-pricken.png',
		title: 'Mario Pricken',
		description: 'HTML5, CSS3, JavaScript, PHP, WordPress',
		skip: true
	},
	{
		url: 'https://sqillinehealth.com/',
		image: '/images/temp/sqillinehealth.png',
		title: 'Sqillinehealth',
		description: 'HTML5, CSS3, JavaScript, PHP, WordPress',
		skip: true
	},
	{
		url: 'https://kinetik.bg/',
		image: '/images/temp/kinetik.png',
		title: 'Kinetik',
		description: 'HTML5, CSS3, JavaScript, PHP, WordPress',
		skip: true
	},
	{
		url: 'https://danariely.com/',
		image: '/images/temp/Dan-Ariely.png',
		title: 'Dan Ariely',
		description: 'HTML5, CSS3, JavaScript, PHP, WordPress',
		skip: false
	},
	{
		url: 'https://shortwhale.com/',
		image: '/images/temp/shortwhale.png',
		title: 'Shortwhale',
		description: 'TypeScript, SCSS, React, Redux, Redux Saga, NodeJS, PostgreSQL',
		skip: true
	},
	{
		url: 'https://onelogic.de/',
		image: '/images/temp/one-logic.png',
		title: 'One Logic',
		description: 'HTML5, CSS3, JavaScript, PHP, WordPress',
		skip: true
	},
	{
		url: 'https://hochzeitskiste.info/',
		image: '/images/temp/hochzeitskiste.png',
		title: 'Hochzeitskiste',
		description: 'HTML5, CSS3, JavaScript, PHP, WordPress',
		skip: true
	},
	{
		url: 'https://social-header.tk/',
		image: '/images/temp/social-header.png',
		title: 'Social Header',
		description: 'React, SCSS, Parcel',
		skip: false
	},
	{
		url: 'https://www.predictablyirrational.com/',
		image: '/images/temp/Preditably-Irrational.png',
		title: 'Preditably Irrational',
		description: 'HTML, Advanced CSS, SCSS, PostCSS, JavaScript, Webpack',
		skip: false
	},
	{
		url: 'https://payoffbook.com/',
		image: '/images/temp/Payoff.png',
		title: 'Payoff',
		description: 'HTML, SVG, Sketch, SCSS, PostCSS, JavaScript, Swiper, Webpack',
		skip: false
	},
	{
		url: 'https://thehonesttruthaboutdishonesty.com/',
		image: '/images/temp/The-(Honest)-Truth-About-Dishonesty.png',
		title: 'The (Honest) Truth About Dishonesty',
		description: 'HTML, SVG, SCSS, PostCSS, Webpack',
		skip: false
	},
	{
		url: 'https://irrationallyyours.com/',
		image: '/images/temp/Irrationally-Yours.png',
		title: 'Irrationally Yours',
		description: 'HTML, SVG, SCSS, PostCSS, JavaScript, Swiper, ShuffleJS, Webpack',
		skip: false
	},
	{
		url: 'https://amazingdecisionsbook.com/',
		image: '/images/temp/Amazing-Decisions.png',
		title: 'Amazing Decisions',
		description: 'HTML, SVG, SCSS, PostCSS, JavaScript, Swiper, Webpack',
		skip: false
	},
	{
		url: 'https://kinetik.vercel.app/',
		image: '/images/temp/kinetik-nuxt.png',
		title: 'Kinetik',
		description: 'Vue, SVG, SCSS, PostCSS, JavaScript, Swiper, Nuxt',
		skip: true
	},
	{
		url: '',
		image: '/images/temp/atelier-coolinar.png',
		title: 'Atelier Coolinar (Ателие Кулинар)',
		description: 'HTML5, CSS3, JavaScript, PHP, WordPress',
		skip: false
	},
	{
		url: '',
		image: '/images/temp/x-form.png',
		title: 'X Form',
		description: 'HTML5, CSS3, JavaScript, PHP, WordPress',
		skip: false
	},
	{
		url: '',
		image: '/images/temp/faraon-bg.png',
		title: 'Faraon (Фараон)',
		description: 'HTML5, CSS3, JavaScript, jQuery, PHP',
		skip: false
	},
	{
		url: '',
		image: '/images/temp/sirius-real-estate.png',
		title: 'Sirius Real Estate',
		description: 'HTML5, CSS3, JavaScript, jQuery, PHP, WordPress',
		skip: false
	}
];

export const mobileApps: ExtendedProject[] = [
	{
		url: 'https://apps.apple.com/gb/app/e-on-home-solar-and-heating/id1468486784#?platform=iphone',
		title: 'E.ON Home for iPhone',
		description: 'An award winning smart energy management application for iOS',
		details: 'TypeScript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		images: [
			'eon-home-iphone-dark1.png',
			'eon-home-iphone-dark2.png',
			'eon-home-iphone-dark3.png',
			'eon-home-iphone-dark4.png',
			'eon-home-iphone-light1.png',
			'eon-home-iphone-light2.png',
			'eon-home-iphone-light3.png',
			'eon-home-iphone-light4.png'
		]
	},
	{
		url: 'https://apps.apple.com/us/app/foton-home/id1525688620#?platform=iphone',
		title: 'Foton Home for iPhone',
		description: 'Smart energy management application for iOS',
		details: 'TypeScript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		images: [
			'foton-home-iphone-light1.png',
			'foton-home-iphone-light2.png',
			'foton-home-iphone-light3.png',
			'foton-home-iphone-light4.png',
			'foton-home-iphone-dark1.png',
			'foton-home-iphone-dark2.png',
			'foton-home-iphone-dark3.png',
			'foton-home-iphone-dark4.png'
		]
	},
	{
		url: 'https://play.google.com/store/apps/details?id=com.eon.home.eu',
		title: 'E.ON Home for Android',
		description: 'An award winning smart energy management application for Android',
		details: 'TypeScript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		images: [
			'eon-home-android1.webp',
			'eon-home-android2.webp',
			'eon-home-android3.webp',
			'eon-home-android4.webp',
			'eon-home-android5.webp',
			'eon-home-android6.webp',
			'eon-home-android7.webp',
			'eon-home-android8.webp'
		]
	},
	{
		url: 'https://play.google.com/store/apps/details?id=com.foton.home.eu',
		title: 'Foton Home for Android',
		description: 'Smart energy management application for Android',
		details: 'TypeScript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		images: [
			'foton-home-android5.webp',
			'foton-home-android6.webp',
			'foton-home-android7.webp',
			'foton-home-android8.webp',
			'foton-home-android1.webp',
			'foton-home-android2.webp',
			'foton-home-android3.webp',
			'foton-home-android4.webp'
		]
	},
	{
		url: 'https://apps.apple.com/gb/app/e-on-home-solar-and-heating/id1468486784#?platform=ipad',
		title: 'E.ON Home for iPad',
		description: 'An award winning smart energy management application for iPad',
		details: 'TypeScript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		images: ['eon-home-ipad-dark.jpg', 'eon-home-ipad-light.jpg'],
		adjustable: true
	},
	{
		url: 'https://apps.apple.com/us/app/foton-home/id1525688620#?platform=ipad',
		title: 'Foton Home for iPad',
		description: 'Smart energy management application for iPad',
		details: 'TypeScript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		images: ['foton-home-ipad-light.png', 'foton-home-ipad-dark.png'],
		adjustable: true
	}
];

export const automotiveProjects: ExtendedProject[] = [
	{
		url: 'https://kinetik-infotainment.netlify.app/',
		title: 'Kinetik Infotainment',
		description: 'Dashboard and infotainment system for the Kinetik Model 27 electric kart',
		details: 'TypeScript, SCSS, SVG, React, Redux, NodeJS, Express, WebSocket',
		images: [
			'kinetik-infotainment-1.png',
			'kinetik-infotainment-2.png',
			'kinetik-infotainment-3.png',
			'kinetik-infotainment-4.png',
			'kinetik-infotainment-5.png',
			'kinetik-infotainment-6.png',
			'kinetik-infotainment-7.png',
			'kinetik-infotainment-8.png',
			'kinetik-infotainment-9.png'
		]
	},
	{
		url: 'https://volvo-dashboard.netlify.app/',
		title: 'Volvo Dashboard',
		description: 'Dashboard system for the Volvo P1800 custom hybrid automobile',
		details: 'TypeScript, SCSS, SVG, React, Redux, NodeJS, Express, WebSocket',
		images: [
			'volvo-dashboard-1.png',
			'volvo-dashboard-2.png',
			'volvo-dashboard-3.png',
			'volvo-dashboard-4.png',
			'volvo-dashboard-5.png'
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
		url: Routes.PORTFOLIO_MOBILE_APPS,
		text: 'Mobile',
		image: '/images/temp/mobile-apps.jpg'
	},
	{
		url: Routes.PORTFOLIO_AUTOMOTIVE_APPS,
		text: 'Automotive',
		image: '/images/temp/automotive-apps.jpg'
	},
	{
		url: Routes.PORTFOLIO_WEB_APPS,
		text: 'Web',
		image: '/images/temp/web-apps.jpg'
	}
];
