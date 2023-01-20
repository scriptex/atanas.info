export type MetaTag = {
	tag: string;
	name?: string;
	content: string;
	property?: string;
	'http-equiv'?: string;
};

export const metaTags: MetaTag[] = [
	{
		tag: 'meta',
		name: 'description',
		content:
			'Atanas Atanasov - Senior Javascript/Typescript Engineer: Single Page Applications, Vue, React, Angular, NodeJS'
	},
	{
		tag: 'meta',
		name: 'keywords',
		content:
			'React Development, NodeJS Development, Typescript Development, Web Development, WordPress Development, HTML Development, Website Development, Javascript Development, WordPress, WP, JS, Javascript, Vue, Vue.js, VueJS, Nuxt, React, ReactJS, React JS, Node, NodeJS, Single Page Apps, Single Page Application, CSS, CSS3, ES5, ES6, ES7, Website, Development'
	},
	{ tag: 'meta', name: 'copyright', content: 'Atanas Atanasov' },
	{ tag: 'meta', name: 'language', content: 'EN' },
	{ tag: 'meta', name: 'robots', content: 'index,follow' },
	{ tag: 'meta', name: 'author', content: 'Atanas Atanasov, hi@atanas.info' },
	{ tag: 'meta', name: 'designer', content: 'Atanas Atanasov' },
	{ tag: 'meta', name: 'coverage', content: 'Worldwide' },
	{ tag: 'meta', name: 'distribution', content: 'Worldwide' },
	{ tag: 'meta', name: 'rating', content: 'General' },
	{ tag: 'meta', name: 'revisit-after', content: '7 days' },
	{ tag: 'meta', 'http-equiv': 'Expires', content: '0' },
	{ tag: 'meta', 'http-equiv': 'Pragma', content: 'no-cache' },
	{ tag: 'meta', 'http-equiv': 'Cache-Control', content: 'no-cache' },
	{ tag: 'meta', property: 'og:url', content: 'https://atanas.info' },
	{ tag: 'meta', property: 'og:type', content: 'website' },
	{ tag: 'meta', property: 'og:title', content: 'Atanas Atanasov | Senior Javascript/Typescript Engineer' },
	{ tag: 'meta', property: 'og:image', content: 'https://atanas.info/images/temp/atanas.jpg' },
	{
		tag: 'meta',
		property: 'og:description',
		content:
			'Single Page Applications: Vue, React, Angular, NodeJS, PHP. Frontend master: HTML, SVG, CSS, SCSS, PostCSS, Javascript, Typescript, etc.'
	},
	{ tag: 'meta', name: 'application-name', content: 'Atanas Atanasov' },
	{ tag: 'meta', name: 'mobile-web-app-capable', content: 'yes' },
	{ tag: 'meta', name: 'apple-mobile-web-app-capable', content: 'yes' },
	{ tag: 'meta', name: 'apple-mobile-web-app-title', content: 'Atanas Atanasov' },
	{ tag: 'meta', name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
	{ tag: 'meta', name: 'format-detection', content: 'telephone=no' },
	{ tag: 'meta', name: 'msapplication-config', content: 'config.xml' },
	{ tag: 'meta', name: 'msapplication-TileColor', content: '#ef4c23' },
	{ tag: 'meta', name: 'msapplication-TileImage', content: '/images/favicon/ms-tile-144x144.png' },
	{ tag: 'meta', name: 'msapplication-square70x70logo', content: '/images/favicon/ms-tile-70x70.png' },
	{ tag: 'meta', name: 'msapplication-square150x150logo', content: '/images/favicon/ms-tile-150x150.png' },
	{ tag: 'meta', name: 'msapplication-wide310x150logo', content: '/images/favicon/ms-tile-310x150.png' },
	{ tag: 'meta', name: 'msapplication-square310x310logo', content: '/images/favicon/ms-tile-310x310.png' },
	{ tag: 'meta', name: 'theme-color', content: '#ef4c23' },

	{ tag: 'meta', name: 'twitter:card', content: 'summary' },
	{ tag: 'meta', name: 'twitter:url', content: 'https://atanas.info' },
	{ tag: 'meta', name: 'twitter:title', content: 'Atanas Atanasov' },
	{
		tag: 'meta',
		name: 'twitter:description',
		content: 'Senior Javascript/Typescript Engineer: Single Page Applications, Vue, React, Angular, NodeJS'
	},
	{ tag: 'meta', name: 'twitter:image', content: 'https://atanas.info/images/temp/atanas.jpg' },
	{ tag: 'meta', name: 'twitter:creator', content: '@scriptexbg' },
	{ tag: 'meta', property: 'og:type', content: 'website' },
	{ tag: 'meta', property: 'og:title', content: 'Atanas Atanasov' },
	{
		tag: 'meta',
		property: 'og:description',
		content: 'Senior Javascript/Typescript Engineer: Single Page Applications, Vue, React, Angular, NodeJS'
	},
	{ tag: 'meta', property: 'og:site_name', content: 'Atanas Atanasov' },
	{ tag: 'meta', property: 'og:url', content: 'https://atanas.info' },
	{ tag: 'meta', property: 'og:image', content: 'https://atanas.info/images/temp/atanas.jpg' }
];

export type LinkTag = {
	tag: string;
	rel: string;
	href: string;
	type?: string;
	media?: string;
	sizes?: string;
};

export const linkTags: LinkTag[] = [
	{
		tag: 'link',
		rel: 'apple-touch-icon',
		sizes: '57x57',
		href: '/images/favicon/apple-touch-icon-57x57.png'
	},
	{
		tag: 'link',
		rel: 'apple-touch-icon',
		sizes: '114x114',
		href: '/images/favicon/apple-touch-icon-114x114.png'
	},
	{
		tag: 'link',
		rel: 'apple-touch-icon',
		sizes: '72x72',
		href: '/images/favicon/apple-touch-icon-72x72.png'
	},
	{
		tag: 'link',
		rel: 'apple-touch-icon',
		sizes: '144x144',
		href: '/images/favicon/apple-touch-icon-144x144.png'
	},
	{
		tag: 'link',
		rel: 'apple-touch-icon',
		sizes: '60x60',
		href: '/images/favicon/apple-touch-icon-60x60.png'
	},
	{
		tag: 'link',
		rel: 'apple-touch-icon',
		sizes: '120x120',
		href: '/images/favicon/apple-touch-icon-120x120.png'
	},
	{
		tag: 'link',
		rel: 'apple-touch-icon',
		sizes: '76x76',
		href: '/images/favicon/apple-touch-icon-76x76.png'
	},
	{
		tag: 'link',
		rel: 'apple-touch-icon',
		sizes: '152x152',
		href: '/images/favicon/apple-touch-icon-152x152.png'
	},
	{
		tag: 'link',
		rel: 'icon',
		type: 'image/png',
		href: '/images/favicon/favicon-196x196.png',
		sizes: '196x196'
	},
	{
		tag: 'link',
		rel: 'icon',
		type: 'image/png',
		href: '/images/favicon/favicon-96x96.png',
		sizes: '96x96'
	},
	{
		tag: 'link',
		rel: 'icon',
		type: 'image/png',
		href: '/images/favicon/favicon-32x32.png',
		sizes: '32x32'
	},
	{
		tag: 'link',
		rel: 'icon',
		type: 'image/png',
		href: '/images/favicon/favicon-16x16.png',
		sizes: '16x16'
	},
	{
		tag: 'link',
		rel: 'icon',
		type: 'image/png',
		href: '/images/favicon/favicon-128x128.png',
		sizes: '128x128'
	},
	{ tag: 'link', rel: 'shortcut icon', type: 'image/x-icon', href: '/images/favicon/favicon.ico' },
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2048x2732.png',
		media: '(device-width: 2048px) and (device-height: 2732px},and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2732x2048.png',
		media: '(device-width: 2732px) and (device-height: 2048px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1668x2388.png',
		media: '(device-width: 1668px) and (device-height: 2388px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2388x1668.png',
		media: '(device-width: 2388px) and (device-height: 1668px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1668x2224.png',
		media: '(device-width: 1668px) and (device-height: 2224px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2224x1668.png',
		media: '(device-width: 2224px) and (device-height: 1668px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1536x2048.png',
		media: '(device-width: 1536px) and (device-height: 2048px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2048x1536.png',
		media: '(device-width: 2048px) and (device-height: 1536px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1536x2048.png',
		media: '(device-width: 1536px) and (device-height: 2048px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2048x1536.png',
		media: '(device-width: 2048px and (device-height: 1536px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1242x2688.png',
		media: '(device-width: 1242px and (device-height: 2688px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2688x1242.png',
		media: '(device-width: 2688px) and (device-height: 142px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1125x2436.png',
		media: '(device-width: 1125px) and (device-height: 236px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2436x1125.png',
		media: '(device-width: 2436px) and (device-height: 1125px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-828x1792.png',
		media: '(device-width: 828px) and (device-height: 192px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1792x828.png',
		media: '(device-width: 1792px) and (device-height: 28px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1125x2436.png',
		media: '(device-width: 1125px) and (device-height: 236px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2436x1125.png',
		media: '(device-width: 2436px and (device-height: 1125px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1242x2208.png',
		media: '(device-width: 1242px and (device-height: 2208px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2208x1242.png',
		media: '(device-width: 2208px) and (device-height: 1242px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-750x1334.png',
		media: '(device-width: 750px) and (device-height: 134px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1334x750.png',
		media: '(device-width: 1334px and (device-height: 750px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1242x2208.png',
		media: '(device-width: 1242px and (device-height: 2208px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2208x1242.png',
		media: '(device-width: 2208px) and (device-height: 1242px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-750x1334.png',
		media: '(device-width: 750px) and (device-height: 134px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1334x750.png',
		media: '(device-width: 1334px and (device-height: 750px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1242x2208.png',
		media: '(device-width: 1242px and (device-height: 2208px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2208x1242.png',
		media: '(device-width: 2208px) and (device-height: 1242px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-750x1334.png',
		media: '(device-width: 750px) and (device-height: 134px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1334x750.png',
		media: '(device-width: 1334px) and (device-height: 50px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-640x1136.png',
		media: '(device-width: 640px) and (device-height: 136px) and  (orientation: portrait)'
	},
	{
		tag: 'link',
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1136x640.png',
		media: '(device-width: 1136px) and (device-height: 640px) and  (orientation: landscape)'
	},
	{
		tag: 'link',
		rel: 'manifest',
		href: '/manifest.json'
	}
];
