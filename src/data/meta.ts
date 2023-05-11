export type MetaTag = {
	tag: string;
	name?: string;
	index: number;
	content: string;
	property?: string;
	'http-equiv'?: string;
};

export const metaTags: MetaTag[] = [
	{
		tag: 'meta',
		name: 'description',
		index: 0,
		content:
			'Atanas Atanasov - Senior Javascript/Typescript Engineer: Single Page Applications, Vue, React, Angular, NodeJS'
	},
	{
		tag: 'meta',
		name: 'keywords',
		index: 1,
		content:
			'React Development, NodeJS Development, Typescript Development, Web Development, WordPress Development, HTML Development, Website Development, Javascript Development, WordPress, WP, JS, Javascript, Vue, Vue.js, VueJS, Nuxt, React, ReactJS, React JS, Node, NodeJS, Single Page Apps, Single Page Application, CSS, CSS3, ES5, ES6, ES7, Website, Development'
	},
	{
		tag: 'meta',
		name: 'copyright',
		index: 2,
		content: 'Atanas Atanasov'
	},
	{
		tag: 'meta',
		name: 'language',
		index: 3,
		content: 'EN'
	},
	{
		tag: 'meta',
		name: 'robots',
		index: 4,
		content: 'index,follow'
	},
	{
		tag: 'meta',
		name: 'author',
		index: 5,
		content: 'Atanas Atanasov, hi@atanas.info'
	},
	{
		tag: 'meta',
		name: 'designer',
		index: 6,
		content: 'Atanas Atanasov'
	},
	{
		tag: 'meta',
		name: 'coverage',
		index: 7,
		content: 'Worldwide'
	},
	{
		tag: 'meta',
		name: 'distribution',
		index: 8,
		content: 'Worldwide'
	},
	{
		tag: 'meta',
		name: 'rating',
		index: 9,
		content: 'General'
	},
	{
		tag: 'meta',
		name: 'revisit-after',
		index: 10,
		content: '7 days'
	},
	{
		tag: 'meta',
		index: 11,
		content: '0',
		'http-equiv': 'Expires'
	},
	{
		tag: 'meta',
		index: 12,
		content: 'no-cache',
		'http-equiv': 'Pragma'
	},
	{
		tag: 'meta',
		index: 13,
		content: 'no-cache',
		'http-equiv': 'Cache-Control'
	},
	{
		tag: 'meta',
		index: 14,
		content: 'https://atanas.info',
		property: 'og:url'
	},
	{
		tag: 'meta',
		index: 15,
		content: 'website',
		property: 'og:type'
	},
	{
		tag: 'meta',
		index: 16,
		content: 'Atanas Atanasov | Senior Javascript/Typescript Engineer',
		property: 'og:title'
	},
	{
		tag: 'meta',
		index: 17,
		content: 'https://atanas.info/images/temp/atanas.jpg',
		property: 'og:image'
	},
	{
		tag: 'meta',
		index: 18,
		property: 'og:description',
		content:
			'Single Page Applications: Vue, React, Angular, NodeJS, PHP. Frontend master: HTML, SVG, CSS, SCSS, PostCSS, Javascript, Typescript, etc.'
	},
	{
		tag: 'meta',
		name: 'application-name',
		index: 19,
		content: 'Atanas Atanasov'
	},
	{
		tag: 'meta',
		name: 'mobile-web-app-capable',
		index: 20,
		content: 'yes'
	},
	{
		tag: 'meta',
		name: 'apple-mobile-web-app-capable',
		index: 21,
		content: 'yes'
	},
	{
		tag: 'meta',
		name: 'apple-mobile-web-app-title',
		index: 22,
		content: 'Atanas Atanasov'
	},
	{
		tag: 'meta',
		name: 'apple-mobile-web-app-status-bar-style',
		index: 23,
		content: 'default'
	},
	{
		tag: 'meta',
		name: 'format-detection',
		index: 24,
		content: 'telephone=no'
	},
	{
		tag: 'meta',
		name: 'msapplication-config',
		index: 25,
		content: 'config.xml'
	},
	{
		tag: 'meta',
		name: 'msapplication-TileColor',
		index: 26,
		content: '#ef4c23'
	},
	{
		tag: 'meta',
		name: 'msapplication-TileImage',
		index: 27,
		content: '/images/favicon/ms-tile-144x144.png'
	},
	{
		tag: 'meta',
		name: 'msapplication-square70x70logo',
		index: 28,
		content: '/images/favicon/ms-tile-70x70.png'
	},
	{
		tag: 'meta',
		name: 'msapplication-square150x150logo',
		index: 29,
		content: '/images/favicon/ms-tile-150x150.png'
	},
	{
		tag: 'meta',
		name: 'msapplication-wide310x150logo',
		index: 30,
		content: '/images/favicon/ms-tile-310x150.png'
	},
	{
		tag: 'meta',
		name: 'msapplication-square310x310logo',
		index: 31,
		content: '/images/favicon/ms-tile-310x310.png'
	},
	{
		tag: 'meta',
		name: 'theme-color',
		index: 32,
		content: '#ef4c23'
	},
	{
		tag: 'meta',
		name: 'twitter:card',
		index: 33,
		content: 'summary'
	},
	{
		tag: 'meta',
		name: 'twitter:url',
		index: 34,
		content: 'https://atanas.info'
	},
	{
		tag: 'meta',
		name: 'twitter:title',
		index: 35,
		content: 'Atanas Atanasov'
	},
	{
		tag: 'meta',
		index: 36,
		name: 'twitter:description',
		content: 'Senior Javascript/Typescript Engineer: Single Page Applications, Vue, React, Angular, NodeJS'
	},
	{
		tag: 'meta',
		name: 'twitter:image',
		index: 37,
		content: 'https://atanas.info/images/temp/atanas.jpg'
	},
	{
		tag: 'meta',
		name: 'twitter:creator',
		index: 38,
		content: '@scriptexbg'
	},
	{
		tag: 'meta',
		property: 'og:type',
		index: 39,
		content: 'website'
	},
	{
		tag: 'meta',
		property: 'og:title',
		index: 40,
		content: 'Atanas Atanasov'
	},
	{
		tag: 'meta',
		index: 41,
		property: 'og:description',
		content: 'Senior Javascript/Typescript Engineer: Single Page Applications, Vue, React, Angular, NodeJS'
	},
	{
		tag: 'meta',
		index: 42,
		property: 'og:site_name',
		content: 'Atanas Atanasov'
	},
	{
		tag: 'meta',
		index: 43,
		property: 'og:url',
		content: 'https://atanas.info'
	},
	{
		tag: 'meta',
		index: 44,
		property: 'og:image',
		content: 'https://atanas.info/images/temp/atanas.jpg'
	}
];

export type LinkTag = {
	tag: string;
	rel: string;
	href: string;
	type?: string;
	index: number;
	media?: string;
	sizes?: string;
};

export const linkTags: LinkTag[] = [
	{
		tag: 'link',
		rel: 'apple-touch-icon',
		href: '/images/favicon/apple-touch-icon-57x57.png',
		index: 0,
		sizes: '57x57'
	},
	{
		tag: 'link',
		rel: 'apple-touch-icon',
		href: '/images/favicon/apple-touch-icon-114x114.png',
		index: 1,
		sizes: '114x114'
	},
	{
		tag: 'link',
		rel: 'apple-touch-icon',
		href: '/images/favicon/apple-touch-icon-72x72.png',
		index: 2,
		sizes: '72x72'
	},
	{
		tag: 'link',
		rel: 'apple-touch-icon',
		href: '/images/favicon/apple-touch-icon-144x144.png',
		index: 3,
		sizes: '144x144'
	},
	{
		tag: 'link',
		rel: 'apple-touch-icon',
		href: '/images/favicon/apple-touch-icon-60x60.png',
		index: 4,
		sizes: '60x60'
	},
	{
		tag: 'link',
		rel: 'apple-touch-icon',
		href: '/images/favicon/apple-touch-icon-120x120.png',
		index: 5,
		sizes: '120x120'
	},
	{
		tag: 'link',
		rel: 'apple-touch-icon',
		href: '/images/favicon/apple-touch-icon-76x76.png',
		index: 6,
		sizes: '76x76'
	},
	{
		tag: 'link',
		rel: 'apple-touch-icon',
		href: '/images/favicon/apple-touch-icon-152x152.png',
		index: 7,
		sizes: '152x152'
	},
	{
		tag: 'link',
		rel: 'icon',
		type: 'image/png',
		href: '/images/favicon/favicon-196x196.png',
		index: 8,
		sizes: '196x196'
	},
	{
		tag: 'link',
		rel: 'icon',
		type: 'image/png',
		href: '/images/favicon/favicon-96x96.png',
		index: 9,
		sizes: '96x96'
	},
	{
		tag: 'link',
		rel: 'icon',
		type: 'image/png',
		href: '/images/favicon/favicon-32x32.png',
		index: 10,
		sizes: '32x32'
	},
	{
		tag: 'link',
		rel: 'icon',
		type: 'image/png',
		href: '/images/favicon/favicon-16x16.png',
		index: 11,
		sizes: '16x16'
	},
	{
		tag: 'link',
		rel: 'icon',
		type: 'image/png',
		href: '/images/favicon/favicon-128x128.png',
		index: 12,
		sizes: '128x128'
	},
	{
		tag: 'link',
		rel: 'shortcut icon',
		type: 'image/x-icon',
		href: '/images/favicon/favicon.ico',
		index: 13
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2048x2732.png',
		index: 14,
		media: '(device-width: 2048px) and (device-height: 2732px},and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2732x2048.png',
		index: 15,
		media: '(device-width: 2732px) and (device-height: 2048px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1668x2388.png',
		index: 16,
		media: '(device-width: 1668px) and (device-height: 2388px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2388x1668.png',
		index: 17,
		media: '(device-width: 2388px) and (device-height: 1668px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1668x2224.png',
		index: 18,
		media: '(device-width: 1668px) and (device-height: 2224px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2224x1668.png',
		index: 19,
		media: '(device-width: 2224px) and (device-height: 1668px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1536x2048.png',
		index: 20,
		media: '(device-width: 1536px) and (device-height: 2048px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2048x1536.png',
		index: 21,
		media: '(device-width: 2048px) and (device-height: 1536px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1536x2048.png',
		index: 22,
		media: '(device-width: 1536px) and (device-height: 2048px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2048x1536.png',
		index: 23,
		media: '(device-width: 2048px and (device-height: 1536px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1242x2688.png',
		index: 24,
		media: '(device-width: 1242px and (device-height: 2688px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2688x1242.png',
		index: 25,
		media: '(device-width: 2688px) and (device-height: 142px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1125x2436.png',
		index: 26,
		media: '(device-width: 1125px) and (device-height: 236px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2436x1125.png',
		index: 27,
		media: '(device-width: 2436px) and (device-height: 1125px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-828x1792.png',
		index: 28,
		media: '(device-width: 828px) and (device-height: 192px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1792x828.png',
		index: 29,
		media: '(device-width: 1792px) and (device-height: 28px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1125x2436.png',
		index: 30,
		media: '(device-width: 1125px) and (device-height: 236px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2436x1125.png',
		index: 31,
		media: '(device-width: 2436px and (device-height: 1125px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1242x2208.png',
		index: 32,
		media: '(device-width: 1242px and (device-height: 2208px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2208x1242.png',
		index: 33,
		media: '(device-width: 2208px) and (device-height: 1242px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-750x1334.png',
		index: 34,
		media: '(device-width: 750px) and (device-height: 134px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1334x750.png',
		index: 35,
		media: '(device-width: 1334px and (device-height: 750px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1242x2208.png',
		index: 36,
		media: '(device-width: 1242px and (device-height: 2208px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2208x1242.png',
		index: 37,
		media: '(device-width: 2208px) and (device-height: 1242px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-750x1334.png',
		index: 38,
		media: '(device-width: 750px) and (device-height: 134px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1334x750.png',
		index: 39,
		media: '(device-width: 1334px and (device-height: 750px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1242x2208.png',
		index: 40,
		media: '(device-width: 1242px and (device-height: 2208px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2208x1242.png',
		index: 41,
		media: '(device-width: 2208px) and (device-height: 1242px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-750x1334.png',
		index: 42,
		media: '(device-width: 750px) and (device-height: 134px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1334x750.png',
		index: 43,
		media: '(device-width: 1334px) and (device-height: 50px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-640x1136.png',
		index: 44,
		media: '(device-width: 640px) and (device-height: 136px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1136x640.png',
		index: 45,
		media: '(device-width: 1136px) and (device-height: 640px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'manifest',
		href: '/manifest.json',
		index: 46
	}
];
