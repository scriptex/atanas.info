import { Routes } from './routes';

export type Project = Readonly<{
	description: string;
	index: number;
	title: string;
	url: string;
}>;

export type WebProject = Project &
	Readonly<{
		image: string;
		skip: boolean;
		text?: string;
	}>;

export type ExtendedProject = Project &
	Readonly<{
		adjustable?: boolean;
		details: string;
		imageHeight?: number;
		images: string[];
		imageWidth?: number;
	}>;

export type SubPage = Readonly<{
	image: string;
	index: number;
	text: string;
	url: Routes | string;
}>;

const withIndex = <T>(items: T[]) =>
	items.map((item, index) => ({
		...item,
		index
	}));

export const projects: WebProject[] = withIndex([
	{
		description:
			'Typescript, SCSS, SVG, Python, React, Redux, Django, NodeJS, Google Cloud Platform, Jest, React Testing Library, Cypress',
		image: '/images/web-apps/DMARC.io.jpg',
		skip: false,
		text: 'Built in collaboration with the dmarcian team',
		title: 'DMARC.io',
		url: 'https://dmarc.io/'
	},
	{
		description: 'TypeScript, SVG, Python, SCSS Modules, React, Django, Postgres, Vite, Sentry, Highcharts, ',
		image: '/images/web-apps/dmarcian-DMARC-Validator.jpg',
		skip: false,
		text: 'Built in collaboration with the dmarcian team',
		title: 'dmarcian DMARC Validator',
		url: 'https://us.dmarcian.com/dmarc-validator/'
	},
	{
		description: 'TypeScript, SVG, Python, SCSS Modules, React, Django, Postgres, Vite, Sentry, Highcharts, ',
		image: '/images/web-apps/dmarcian-DMARC-Wizard.jpg',
		skip: false,
		text: 'Built in collaboration with the dmarcian team',
		title: 'dmarcian DMARC Wizard',
		url: 'https://us.dmarcian.com/dmarc-wizard/'
	},
	{
		description: 'TypeScript, SVG, Python, SCSS Modules, React, Django, Postgres, Vite, Sentry, Highcharts, ',
		image: '/images/web-apps/dmarcian-DMARC-XML-to-Human-Converter.jpg',
		skip: false,
		text: 'Built in collaboration with the dmarcian team',
		title: 'dmarcian DMARC XML to Human Converter',
		url: 'https://us.dmarcian.com/dmarc-xml/'
	},
	{
		description: 'TypeScript, SVG, Python, SCSS Modules, React, Django, Postgres, Vite, Sentry, Highcharts, ',
		image: '/images/web-apps/dmarcian-TLS-Inspector.jpg',
		skip: false,
		text: 'Built in collaboration with the dmarcian team',
		title: 'dmarcian TLS Inspector',
		url: 'https://us.dmarcian.com/tls-inspector/'
	},
	{
		description: 'TypeScript, SVG, Python, SCSS Modules, React, Django, Postgres, Vite, Sentry, Highcharts, ',
		image: '/images/web-apps/dmarcian.jpg',
		skip: false,
		text: 'Built in collaboration with the dmarcian team',
		title: 'dmarcian',
		url: 'https://us.dmarcian.com/accounts/register/'
	},
	{
		description: 'TypeScript, SVG, Python, SCSS Modules, React, Django, Postgres, Vite, Sentry, Highcharts, ',
		image: '/images/web-apps/dmarcian-Login.jpg',
		skip: false,
		text: 'Built in collaboration with the dmarcian team',
		title: 'dmarcian Login',
		url: 'https://us.dmarcian.com/login/'
	},
	{
		description: 'Typescript, SCSS, React, Redux, MS Azure, AWS, NodeJS, Jest, React Testing Library, Cypress',
		image: '/images/web-apps/E.ON-Home.jpg',
		skip: false,
		title: 'E.ON Home',
		url: 'https://app.home.eon.com/'
	},
	{
		description: 'Typescript, SCSS, Angular, Redux, MS Azure, AWS, NodeJS, Cypress',
		image: '/images/web-apps/E.ON-H.E.M.S-(Home-Energy-Management-System).jpg',
		skip: false,
		title: 'E.ON H.E.M.S (Home Energy Management System)',
		url: 'https://admin.eonhome.eu/'
	},
	{
		description: 'PHP, Javascript, CSS, HTML, WordPress',
		image: '/images/web-apps/Mama-Culinar.jpg',
		skip: false,
		title: 'Mama Culinar',
		url: 'https://mama-culinar.com/'
	},
	{
		description: 'Typescript, SCSS, Angular, Redux, MS Azure, AWS, NodeJS, Jest, React Testing Library',
		image: '/images/web-apps/Foton-Home.jpg',
		skip: false,
		title: 'Foton Home',
		url: 'https://app.home.eonfoton.pl/'
	},
	{
		description: 'Typescript, SCSS, React, Redux, NodeJS, Jest, Enzyme',
		image: '/images/web-apps/XPND.jpg',
		skip: false,
		title: 'XPND',
		url: ''
	},
	{
		description: 'Typescript, SCSS, React, Redux, NodeJS',
		image: '/images/web-apps/XPND-Ebook.jpg',
		skip: false,
		title: 'XPND Ebook',
		url: ''
	},
	{
		description: 'Typescript, SCSS, React, Redux, NodeJS',
		image: '/images/web-apps/XPND-demo-application.jpg',
		skip: false,
		title: 'XPND demo application',
		url: 'https://xpnd.atanas.info/'
	},
	{
		description: 'Typescript, React, Next.js, MongoDB, MUI',
		image: '/images/web-apps/Freelance-Salary-Calculator.jpg',
		skip: false,
		title: 'Freelance Salary Calculator',
		url: 'https://salary.atanas.info/'
	},
	{
		description: 'CSS, Javascript, HTML',
		image: '/images/web-apps/Emailio-Landing.jpg',
		skip: false,
		title: 'Emailio Landing',
		url: 'https://www.emailio.com/'
	},
	{
		description: 'SCSS, Javascript, React, Redux, Redux Saga, Jest, Enzyme',
		image: '/images/web-apps/Emailio-Web-Application.jpg',
		skip: false,
		title: 'Emailio Web Application',
		url: 'https://emailio.vercel.app/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/Nulla-TV.jpg',
		skip: false,
		title: 'Nulla TV',
		url: 'https://www.nulla.tv/'
	},
	{
		description: 'HTML5, CSS3, Javascript, Fullpage JS, Vue, Nuxt, PHP, WordPress',
		image: '/images/web-apps/Kinetik-Automotive.jpg',
		skip: false,
		title: 'Kinetik Automotive',
		url: 'https://kinetikautomotive.com/'
	},
	{
		description: 'HTML5, SVG, CSS3, Javascript, React, Styled Components',
		image: '/images/web-apps/Kinetik-Electric-Karting-Championship.jpg',
		skip: true,
		title: 'Kinetik Electric Karting Championship',
		url: 'https://kinetik-championship.com/'
	},
	{
		description: 'TypeScript, CSS3, React, D3, NextJS, Vercel',
		image: '/images/web-apps/SOD-64-(СОД-64).jpg',
		skip: false,
		title: 'SOD 64 (СОД 64)',
		url: 'https://www.sod.bg/'
	},
	{
		description: 'CSS3, PHP',
		image: '/images/web-apps/At-the-Wall.jpg',
		skip: false,
		title: 'At the Wall',
		url: 'https://at-the-wall.atanas.info'
	},
	{
		description: 'Typescript, HTML, CSS3',
		image: '/images/web-apps/Material-Snake.jpg',
		skip: false,
		title: 'Material Snake',
		url: 'https://snake.atanas.info'
	},
	{
		description: 'Javascript, SCSS, React, Redux, Redux Saga',
		image: '/images/web-apps/Influencing-For-Good.jpg',
		skip: false,
		title: 'Influencing For Good',
		url: ''
	},
	{
		description: 'Typescript, HTML, CSS3',
		image: '/images/web-apps/Material-Tetris.jpg',
		skip: false,
		title: 'Material Tetris',
		url: 'https://tetris.atanas.info'
	},
	{
		description: 'Typescript, HTML, CSS3',
		image: '/images/web-apps/2048.jpg',
		skip: false,
		title: '2048',
		url: 'https://2048.atanas.info'
	},
	{
		description: 'Javascript, SCSS, Vue, Vuex, Chart JS',
		image: '/images/web-apps/Retirement-calculator.jpg',
		skip: false,
		title: 'Retirement calculator',
		url: 'https://retirement-calc.vercel.app/'
	},
	{
		description: 'Javascript, SCSS, React, Redux, Redux Saga',
		image: '/images/web-apps/Paternalism-For-Good.jpg',
		skip: false,
		title: 'Paternalism For Good',
		url: ''
	},
	{
		description: 'Typescript, SCSS, React, Redux, Redux Saga',
		image: '/images/web-apps/Fertility-tool.jpg',
		skip: false,
		title: 'Fertility tool',
		url: 'https://fertility-tool.vercel.app/'
	},
	{
		description: 'Typescript, SCSS, React, Redux, Redux Saga',
		image: '/images/web-apps/IMGN.jpg',
		skip: false,
		title: 'IMGN',
		url: 'https://imgn.vercel.app/'
	},
	{
		description: 'HTML5, CSS3, SVG, Javascript, D3',
		image: '/images/web-apps/Three-11.jpg',
		skip: false,
		title: 'Three 11',
		url: 'https://three-11.com/'
	},
	{
		description: 'Javascript, Stylus, VuePress, NodeJS',
		image: '/images/web-apps/Three-11-Company-Flows.jpg',
		skip: false,
		title: 'Three 11 Company Flows',
		url: 'https://flows.vercel.app/'
	},
	{
		description: 'HTML5, CSS3, Javascript',
		image: '/images/web-apps/HTML-Lab.jpg',
		skip: false,
		title: 'HTML Lab',
		url: 'https://html-lab.com/'
	},
	{
		description: 'HTML5, CSS3, Javascript, Fullpage JS, Shuffle JS, PHP, WordPress',
		image: '/images/web-apps/Malaika-Pictures.jpg',
		skip: false,
		title: 'Malaika Pictures',
		url: 'https://malaikapictures.com/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/Pascoe.jpg',
		skip: false,
		title: 'Pascoe',
		url: 'https://pascoe.de/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/Varna-Food-Tours.jpg',
		skip: false,
		title: 'Varna Food Tours',
		url: 'https://varnafoodtours.com/'
	},
	{
		description: 'HTML5, CSS3, Javascript',
		image: '/images/web-apps/F-Type-For-Sale.jpg',
		skip: false,
		title: 'F Type For Sale',
		url: 'https://ftypeforsale.com/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/zeevan.jpg',
		skip: false,
		title: 'Zeevan',
		url: 'https://www.zeevan.com/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/Mario-Pricken.jpg',
		skip: true,
		title: 'Mario Pricken',
		url: 'https://www.mariopricken.com/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/sqillinehealth.jpg',
		skip: false,
		title: 'Sqillinehealth',
		url: 'https://sqillinehealth.com/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/Kinetik-Fundraising.jpg',
		skip: true,
		title: 'Kinetik Fundraising',
		url: 'https://kinetik.bg/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/Dan-Ariely.jpg',
		skip: false,
		title: 'Dan Ariely',
		url: 'https://danariely.com/'
	},
	{
		description: 'Typescript, SCSS, React, Next.js, ShuffleJS, Swiper',
		image: '/images/web-apps/The-House-Z.jpg',
		skip: false,
		title: 'The House Z',
		url: 'https://housez-bg.com/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/one-logic.jpg',
		skip: false,
		title: 'One Logic',
		url: 'https://onelogic.de/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/hochzeitskiste.jpg',
		skip: false,
		title: 'Hochzeitskiste',
		url: 'https://hochzeitskiste.info/'
	},
	{
		description: 'React, SCSS, Parcel',
		image: '/images/web-apps/Social-Header.jpg',
		skip: false,
		title: 'Social Header',
		url: 'https://social-header.atanas.info/'
	},
	{
		description: 'HTML, Advanced CSS, SCSS, PostCSS, Javascript, Webpack',
		image: '/images/web-apps/Predictably-Irrational.jpg',
		skip: false,
		title: 'Predictably Irrational',
		url: 'https://www.predictablyirrational.com/'
	},
	{
		description: 'HTML, SVG, Sketch, SCSS, PostCSS, Javascript, Swiper, Webpack',
		image: '/images/web-apps/Payoff.jpg',
		skip: false,
		title: 'Payoff',
		url: 'https://payoffbook.com/'
	},
	{
		description: 'HTML, SVG, SCSS, PostCSS, Webpack',
		image: '/images/web-apps/The-(Honest)-Truth-About-Dishonesty.jpg',
		skip: false,
		title: 'The (Honest) Truth About Dishonesty',
		url: 'https://thehonesttruthaboutdishonesty.com/'
	},
	{
		description: 'HTML, SVG, SCSS, PostCSS, Javascript, Swiper, ShuffleJS, Webpack',
		image: '/images/web-apps/Irrationally-Yours.jpg',
		skip: false,
		title: 'Irrationally Yours',
		url: 'https://irrationallyyours.com/'
	},
	{
		description: 'HTML, SVG, SCSS, PostCSS, Javascript, Swiper, Webpack',
		image: '/images/web-apps/Amazing-Decisions.jpg',
		skip: false,
		title: 'Amazing Decisions',
		url: 'https://amazingdecisionsbook.com/'
	},
	{
		description: 'Vue, SVG, SCSS, PostCSS, Javascript, Swiper, Nuxt',
		image: '/images/web-apps/Kinetik-Prototype.jpg',
		skip: false,
		title: 'Kinetik Prototype',
		url: 'https://kinetik.atanas.info/'
	},
	{
		description: 'HTML, SVG, SCSS, PostCSS, WebComponents, Vite',
		image: '/images/web-apps/galaktika.jpg',
		skip: false,
		title: 'Galaktika',
		url: 'https://galaktika.bg/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/Dan-Ariely-(Hebrew-version).jpg',
		skip: false,
		title: 'Dan Ariely (Hebrew version)',
		url: 'https://danariely.co.il/'
	},
	{
		description: 'HTML, SVG, SCSS, PostCSS, Javascript, Swiper, ShuffleJS, Webpack',
		image: '/images/web-apps/Irrationally-Yours-(Hebrew-version).jpg',
		skip: false,
		title: 'Irrationally Yours (Hebrew version)',
		url: 'https://irrationallyyours.com/he/'
	},
	{
		description: 'HTML, Advanced CSS, SCSS, PostCSS, Javascript, Webpack',
		image: '/images/web-apps/Predictably-Irrational-(Hebrew-version).jpg',
		skip: false,
		title: 'Predictably Irrational (Hebrew version)',
		url: 'https://www.predictablyirrational.com/he/'
	},
	{
		description: 'HTML, SVG, SCSS, PostCSS, Javascript, Swiper, Webpack',
		image: '/images/web-apps/Amazing-Decisions-(Hebrew-version).jpg',
		skip: false,
		title: 'Amazing Decisions (Hebrew version)',
		url: 'https://amazingdecisionsbook.com/he/'
	},
	{
		description: 'HTML, SVG, SCSS, PostCSS, Javascript, Webpack',
		image: '/images/web-apps/The-(Honest)-Truth-About-Dishonesty-(Hebrew-version).jpg',
		skip: false,
		title: 'The (Honest) Truth About Dishonesty (Hebrew version)',
		url: 'https://thehonesttruthaboutdishonesty.com/he/'
	},
	{
		description: 'HTML, SVG, SCSS, PostCSS, Javascript, Swiper, Webpack',
		image: '/images/web-apps/Payoff-(Hebrew-version).jpg',
		skip: false,
		title: 'Payoff (Hebrew version)',
		url: 'https://payoffbook.com/he/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/Hàla.jpg',
		skip: false,
		title: 'Demetry',
		url: ''
	},
	{
		description: 'Typescript, React, SCSS, Next.js, React Query',
		image: '/images/web-apps/Dan-vs-ChatGPT.jpg',
		skip: false,
		title: 'Dan vs ChatGPT',
		url: 'https://dan-vs-chatgpt.vercel.app/'
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/atelier-coolinar.png',
		skip: false,
		title: 'Atelier Coolinar (Ателие Кулинар)',
		url: ''
	},
	{
		description: 'HTML5, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/x-form.png',
		skip: false,
		title: 'X Form',
		url: ''
	},
	{
		description: 'HTML5, CSS3, Javascript, jQuery, PHP',
		image: '/images/web-apps/faraon-bg.jpg',
		skip: true,
		title: 'Faraon (Фараон)',
		url: 'https://web.archive.org/web/20120614075704/http://www.faraon-bg.com/'
	},
	{
		description: 'HTML5, CSS3, Javascript, jQuery, PHP, WordPress',
		image: '/images/web-apps/sirius-real-estate.png',
		skip: true,
		title: 'Sirius Real Estate',
		url: 'https://web.archive.org/web/20140530071325/http://www.siriusbg.ru/'
	},
	{
		description: 'HTML5, CSS3, Javascript, jQuery, PHP, WordPress',
		image: '/images/web-apps/RoomGo-Blog.jpg',
		skip: true,
		title: 'RoomGo Blog',
		url: 'https://www.roomgo.com.ar/blog/'
	},
	{
		description: 'HTML5, CSS3, Javascript, jQuery, PHP, WordPress',
		image: '/images/web-apps/BMMC.jpg',
		skip: false,
		title: 'BMMC',
		url: 'https://bmmc.at/'
	},
	{
		description: 'HTML5, CSS3, Javascript, jQuery, AngularJS',
		image: '/images/web-apps/Issta.jpg',
		skip: false,
		title: 'Issta',
		url: 'https://www.issta.co.il/'
	},
	{
		description: 'Typescript, MJML, SCSS, SVG, React, Next.js, Auth.JS, MongoDB, NodeJS, Nodemailer',
		image: '/images/web-apps/Social-Capital.png',
		skip: false,
		title: 'Social Capital',
		url: 'https://social-capital.vercel.app/'
	},
	{
		description: 'Typescript, SCSS, SVG, React, Next.js, NodeJS, Swiper',
		image: '/images/web-apps/Misbelief.jpg',
		skip: false,
		title: 'Misbelief',
		url: 'https://misbeliefbook.com/'
	},
	{
		description: 'Typescript, SCSS, SVG, React, Next.js, NodeJS, Swiper',
		image: '/images/web-apps/Misbelief-(Hebrew-version).jpg',
		skip: false,
		title: 'Misbelief (Hebrew version)',
		url: 'https://misbeliefbook.com/hebrew'
	},
	{
		description: "Dan Ariely's MIT page - HTML, SVG, SCSS",
		image: '/images/web-apps/Dan-Ariely-MIT.jpg',
		skip: false,
		title: 'Dan Ariely MIT',
		url: 'https://web.mit.edu/ariely/www/MIT/index.html'
	},
	{
		description: 'Typescript, SVG, React, Next.js, Emotion',
		image: '/images/web-apps/Kinetik-STEAM-Education-Kit.jpg',
		skip: true,
		title: 'Kinetik STEAM Education Kit',
		url: 'https://edukartgo.com'
	},
	{
		description: 'HTML5, SVG, CSS3, Javascript, React, Styled Components',
		image: '/images/web-apps/Kinetik-Electric-Karting-Championship.jpg',
		skip: true,
		title: 'Kinetik Electric Karting Championship',
		url: 'https://kinetik-e.com/'
	},
	{
		description: 'HTML5, SVG, CSS3, Javascript, jQuery',
		image: '/images/web-apps/htmlBurger.jpg',
		skip: true,
		text: 'Built in collaboration with the htmlBurger team',
		title: 'htmlBurger',
		url: 'https://htmlburger.com/'
	},
	{
		description: 'HTML5, SVG, CSS3, Javascript, jQuery',
		image: '/images/web-apps/htmlBoutique.jpg',
		skip: true,
		text: 'Built in collaboration with the htmlBoutique team',
		title: 'htmlBoutique',
		url: 'https://htmlboutique.com/'
	},
	{
		description: 'HTML5, SVG, CSS3, Javascript, jQuery',
		image: '/images/web-apps/Graphic-Mama.jpeg',
		skip: true,
		text: 'Built in collaboration with the Graphic Mama team',
		title: 'Graphic Mama',
		url: 'https://graphicmama.com/'
	},
	{
		description: 'HTML5, SVG, CSS3, Javascript, jQuery',
		image: '/images/web-apps/Mail-Bakery.jpg',
		skip: true,
		text: 'Built in collaboration with the Mail Bakery team',
		title: 'Mail Bakery',
		url: 'https://mailbakery.com/'
	},
	{
		description: 'HTML5, SVG, CSS3, Javascript, PHP, WordPress',
		image: '/images/web-apps/Advanced-Hindsight.jpg',
		skip: false,
		title: 'Advanced Hindsight',
		url: 'https://advanced-hindsight.com/'
	}
]);

export const mobileApps: ExtendedProject[] = withIndex([
	{
		description: 'An award winning smart energy management application for iOS',
		details: 'Typescript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		imageHeight: 1299,
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
		title: 'E.ON Home for iPhone',
		url: 'https://apps.apple.com/gb/app/e-on-home-solar-and-heating/id1468486784#?platform=iphone'
	},
	{
		description: 'Smart energy management application for iOS',
		details: 'Typescript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		imageHeight: 1299,
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
		title: 'Foton Home for iPhone',
		url: 'https://apps.apple.com/us/app/foton-home/id1525688620#?platform=iphone'
	},
	{
		description: 'An award winning smart energy management application for Android',
		details: 'Typescript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		imageHeight: 620,
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
		title: 'E.ON Home for Android',
		url: 'https://play.google.com/store/apps/details?id=com.eon.home.eu'
	},
	{
		description: 'Smart energy management application for Android',
		details: 'Typescript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		imageHeight: 620,
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
		title: 'Foton Home for Android',
		url: 'https://play.google.com/store/apps/details?id=com.foton.home.eu'
	},
	{
		adjustable: true,
		description: 'An award winning smart energy management application for iPad',
		details: 'Typescript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		imageHeight: 1716,
		images: ['eon-home-ipad-dark.jpg', 'eon-home-ipad-light.jpg'],
		imageWidth: 1286,
		title: 'E.ON Home for iPad',
		url: 'https://apps.apple.com/gb/app/e-on-home-solar-and-heating/id1468486784#?platform=ipad'
	},
	{
		adjustable: true,
		description: 'Smart energy management application for iPad',
		details: 'Typescript, React, React Native, Redux, MS Azure, AWS, NodeJS',
		imageHeight: 1716,
		images: ['foton-home-ipad-light.jpg', 'foton-home-ipad-dark.jpg'],
		imageWidth: 1286,
		title: 'Foton Home for iPad',
		url: 'https://apps.apple.com/us/app/foton-home/id1525688620#?platform=ipad'
	},
	{
		adjustable: true,
		description: 'Notes, Reminders and Todos App for Android and iOS',
		details: 'AngularJS, Ionic 1, Cordova, Firebase, JavaScript, CSS',
		imageHeight: 1357,
		images: [
			'notabene-1.jpeg',
			'notabene-2.jpeg',
			'notabene-3.jpeg',
			'notabene-4.jpeg',
			'notabene-5.jpeg',
			'notabene-6.jpeg',
			'notabene-7.jpeg',
			'notabene-8.jpeg',
			'notabene-9.jpeg',
			'notabene-10.jpeg'
		],
		imageWidth: 678,
		title: 'Notabene',
		url: 'https://github.com/scriptex/Notabene'
	},
	{
		adjustable: true,
		description: 'A game based on the popular 2048 game',
		details: 'AngularJS, Ionic 1, Cordova, Firebase, JavaScript, CSS',
		imageHeight: 1357,
		images: ['evolution-1.jpeg', 'evolution-2.jpeg', 'evolution-3.jpeg', 'evolution-4.jpeg'],
		imageWidth: 678,
		title: 'Evolution',
		url: 'https://github.com/scriptex/Evolution'
	}
]);

export const automotiveProjects: ExtendedProject[] = withIndex([
	{
		description: 'Dashboard and infotainment system for the Kinetik Model 27 electric kart',
		details: 'Typescript, SCSS, SVG, React, Redux, NodeJS, Express, WebSocket, Electron',
		imageHeight: 1440,
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
		title: 'Kinetik Infotainment',
		url: 'https://gokart-ui.atanas.info/'
	},
	{
		description: 'Dashboard system for the Volvo P1800 custom hybrid automobile',
		details: 'Typescript, SCSS, SVG, React, Redux, NodeJS, Express, WebSocket',
		imageHeight: 411,
		images: [
			'volvo-dashboard-1.jpg',
			'volvo-dashboard-2.jpg',
			'volvo-dashboard-3.jpg',
			'volvo-dashboard-4.jpg',
			'volvo-dashboard-5.jpg'
		],
		imageWidth: 1536,
		title: 'Volvo Dashboard',
		url: 'https://volvo-dashboard.atanas.info/'
	},
	{
		description: 'Dashboard for the electric motorcycle built by Kinetik Automotive',
		details: 'Typescript, SCSS, SVG, React, Redux, NodeJS, Express, WebSocket',
		imageHeight: 960,
		images: [
			'motorcycle-dashboard01.jpg',
			'motorcycle-dashboard02.jpg',
			'motorcycle-dashboard03.jpg',
			'motorcycle-dashboard04.jpg'
		],
		imageWidth: 1600,
		// url: 'https://telemetry2-go-ui.vercel.app/',
		title: 'Motorcycle Dashboard',
		url: ''
	},
	{
		description: "Cloud-based telemetry system built for the Kinetik's E-Go-Kart",
		details: 'Typescript, SCSS, SVG, React, React Query, NodeJS, Express, WebSocket, NextJS, Google Maps',
		imageHeight: 960,
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
		title: 'GoKart Telemetry',
		url: ''
	}
]);

export const statsItems: SubPage[] = withIndex([
	{
		image: '/images/temp/github.jpg',
		text: 'Github',
		url: Routes.STATS_GITHUB
	},
	{
		image: '/images/temp/gitlab.jpg',
		text: 'Gitlab',
		url: Routes.STATS_GITLAB
	},
	{
		image: '/images/temp/npm.jpg',
		text: 'NPM',
		url: Routes.STATS_NPM
	}
]);

export const portfolioItems: SubPage[] = withIndex([
	{
		image: '/images/temp/web-apps.jpg',
		text: 'Web applications',
		url: Routes.PORTFOLIO_WEB_APPS
	},
	{
		image: '/images/temp/mobile-apps.jpg',
		text: 'Mobile applications',
		url: Routes.PORTFOLIO_MOBILE_APPS
	},
	{
		image: '/images/temp/automotive-apps.jpg',
		text: 'Automotive applications',
		url: Routes.PORTFOLIO_AUTOMOTIVE_APPS
	},
	{
		image: '/images/temp/email-templates.jpeg',
		text: 'Email templates',
		url: Routes.PORTFOLIO_EMAIL_TEMPLATES
	},
	{
		image: '/images/temp/personal-apps.jpg',
		text: 'Personal projects',
		url: Routes.PORTFOLIO_PERSONAL_PROJECTS
	},
	{
		image: '/images/temp/open-source.jpg',
		text: 'Open source',
		url: Routes.PORTFOLIO_OPEN_SOURCE_PROJECTS
	}
]);

export const personalProjects: SubPage[] = withIndex([
	{
		text: '2048 Game',
		url: 'https://2048.atanas.info'
	},
	{
		text: 'attr-i18n',
		url: 'https://attr-i18n.atanas.info'
	},
	{
		text: 'AnimateMe',
		url: 'https://animate-me.atanas.info'
	},
	{
		text: 'At the Wall',
		url: 'https://at-the-wall.atanas.info'
	},
	{
		text: 'Calendar Widget',
		url: 'https://calendar-widget.atanas.info'
	},
	{
		text: '(Vali) Dator',
		url: 'https://dator.atanas.info'
	},
	{
		text: 'Combined API Docs Gateway for E.ON Home',
		url: 'https://eonhome.atanas.info'
	},
	{
		text: 'Energo Pro Alerts',
		url: 'https://energo-pro-alerts.atanas.info'
	},
	{
		text: 'GA Beacon',
		url: 'https://ga-beacon.atanas.info'
	},
	{
		text: 'Github Insights (beta)',
		url: 'https://github-insights.atanas.info'
	},
	{
		text: 'Gitlab Calendar',
		url: 'https://gitlab-calendar.atanas.info'
	},
	{
		text: 'HTML5 Form Validator',
		url: 'https://html5-form-validator.atanas.info'
	},
	{
		text: 'Intro Scroll',
		url: 'https://intro-scroll.atanas.info'
	},
	{
		text: 'ITCSS',
		url: 'https://itcss.atanas.info'
	},
	{
		text: 'ITSCSS',
		url: 'https://itscss.atanas.info'
	},
	{
		text: 'Kinetik',
		url: 'https://kinetik.atanas.info'
	},
	{
		text: 'No HTML',
		url: 'https://no-html.atanas.info'
	},
	{
		text: 'NPM Maintainer',
		url: 'https://npm-maintainer.atanas.info'
	},
	{
		text: 'Pass Score',
		url: 'https://pass-score.atanas.info'
	},
	{
		text: 'React Accordion TS',
		url: 'https://react-accordion-ts.atanas.info'
	},
	{
		text: 'React Carousel',
		url: 'https://react-carousel.atanas.info'
	},
	{
		text: 'React Dropper',
		url: 'https://react-dropper.atanas.info'
	},
	{
		text: 'React Round Carousel',
		url: 'https://react-round-carousel.atanas.info'
	},
	{
		text: 'React SVG Donuts',
		url: 'https://react-svg-donuts.atanas.info'
	},
	{
		text: 'Round Carousel Component',
		url: 'https://round-carousel-component.atanas.info'
	},
	{
		text: 'Freelance Salary Calculator',
		url: 'https://salary.atanas.info'
	},
	{
		text: 'Scriptex',
		url: 'https://scriptex.js.org'
	},
	{
		text: 'SCSS Goodies',
		url: 'https://scss-goodies.atanas.info'
	},
	{
		text: 'URL Shortener',
		url: 'https://shortener.atanas.info'
	},
	{
		text: 'Snake Game',
		url: 'https://snake.atanas.info'
	},
	{
		text: 'Social Header',
		url: 'https://social-header.atanas.info'
	},
	{
		text: "Scriptex's Socials",
		url: 'https://socials.atanas.info'
	},
	{
		text: 'SVG64',
		url: 'https://svg64.atanas.info'
	},
	{
		text: 'Tetris Game',
		url: 'https://tetris.atanas.info'
	},
	{
		text: 'Touchsweep',
		url: 'https://touchsweep.atanas.info'
	},
	{
		text: 'TS Helpers',
		url: 'https://ts-helpers.atanas.info'
	},
	{
		text: 'Uptime',
		url: 'https://scriptex.js.org/uptime/'
	},
	{
		text: 'ViK Varna Alerts',
		url: 'https://vik-varna-alerts.atanas.info'
	}
]).map(item => ({
	...item,
	image: `/images/unsplash/${(item.index % 25) + 1}.jpeg`
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
