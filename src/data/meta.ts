export type MetaTag = {
	name: string;
	content: string;
};

export const metaTags = [
	{
		name: 'application-name',
		content: 'Atanas Atanasov'
	},
	{
		name: 'msapplication-config',
		content: 'config.xml'
	},
	{
		name: 'msapplication-TileColor',
		content: '#ef4c23'
	},
	{
		name: 'msapplication-TileImage',
		content: '/images/favicon/ms-tile-144x144.png'
	},
	{
		name: 'msapplication-square70x70logo',
		content: '/images/favicon/ms-tile-70x70.png'
	},
	{
		name: 'msapplication-square150x150logo',
		content: '/images/favicon/ms-tile-150x150.png'
	},
	{
		name: 'msapplication-wide310x150logo',
		content: '/images/favicon/ms-tile-310x150.png'
	},
	{
		name: 'msapplication-square310x310logo',
		content: '/images/favicon/ms-tile-310x310.png'
	},
	{
		name: 'theme-color',
		content: '#ef4c23'
	}
];

export type LinkTag = {
	rel: string;
	href: string;
	type?: string;
	media?: string;
	sizes?: string;
};

export const linkTags: LinkTag[] = [
	{ rel: 'apple-touch-icon', sizes: '57x57', href: '/images/favicon/apple-touch-icon-57x57.png' },
	{ rel: 'apple-touch-icon', sizes: '114x114', href: '/images/favicon/apple-touch-icon-114x114.png' },
	{ rel: 'apple-touch-icon', sizes: '72x72', href: '/images/favicon/apple-touch-icon-72x72.png' },
	{ rel: 'apple-touch-icon', sizes: '144x144', href: '/images/favicon/apple-touch-icon-144x144.png' },
	{ rel: 'apple-touch-icon', sizes: '60x60', href: '/images/favicon/apple-touch-icon-60x60.png' },
	{ rel: 'apple-touch-icon', sizes: '120x120', href: '/images/favicon/apple-touch-icon-120x120.png' },
	{ rel: 'apple-touch-icon', sizes: '76x76', href: '/images/favicon/apple-touch-icon-76x76.png' },
	{ rel: 'apple-touch-icon', sizes: '152x152', href: '/images/favicon/apple-touch-icon-152x152.png' },
	{ rel: 'icon', sizes: '196x196', href: '/images/favicon/favicon-196x196.png', type: 'image/png' },
	{ rel: 'icon', sizes: '96x96', href: '/images/favicon/favicon-96x96.png', type: 'image/png' },
	{ rel: 'icon', sizes: '32x32', href: '/images/favicon/favicon-32x32.png', type: 'image/png' },
	{ rel: 'icon', sizes: '16x16', href: '/images/favicon/favicon-16x16.png', type: 'image/png' },
	{ rel: 'icon', sizes: '128x128', href: '/images/favicon/favicon-128x128.png', type: 'image/png' },
	{ rel: 'shortcut icon', type: 'image/x-icon', href: '/images/favicon/favicon.ico' },
	{ rel: 'manifest', href: '/manifest.webmanifest' },
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2048x2732.png',
		media: '(device-width: 2048px) and (device-height: 2732px) and (orientation: portrait)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2732x2048.png',
		media: '(device-width: 2732px) and (device-height: 2048px) and (orientation: landscape)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1668x2388.png',
		media: '(device-width: 1668px) and (device-height: 2388px) and (orientation: portrait)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2388x1668.png',
		media: '(device-width: 2388px) and (device-height: 1668px) and (orientation: landscape)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1668x2224.png',
		media: '(device-width: 1668px) and (device-height: 2224px) and (orientation: portrait)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2224x1668.png',
		media: '(device-width: 2224px) and (device-height: 1668px) and (orientation: landscape)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1536x2048.png',
		media: '(device-width: 1536px) and (device-height: 2048px) and (orientation: portrait)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2048x1536.png',
		media: '(device-width: 2048px) and (device-height: 1536px) and (orientation: landscape)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1536x2048.png',
		media: '(device-width: 1536px) and (device-height: 2048px) and (orientation: portrait)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2048x1536.png',
		media: '(device-width: 2048px and (device-height: 1536px) and (orientation: landscape)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1242x2688.png',
		media: '(device-width: 1242px and (device-height: 2688px) and (orientation: portrait)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2688x1242.png',
		media: '(device-width: 2688px) and (device-height: 142px) and (orientation: landscape)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1125x2436.png',
		media: '(device-width: 1125px) and (device-height: 236px) and (orientation: portrait)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2436x1125.png',
		media: '(device-width: 2436px) and (device-height: 1125px) and (orientation: landscape)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-828x1792.png',
		media: '(device-width: 828px) and (device-height: 192px) and (orientation: portrait)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1792x828.png',
		media: '(device-width: 1792px) and (device-height: 28px) and (orientation: landscape)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1125x2436.png',
		media: '(device-width: 1125px) and (device-height: 236px) and (orientation: portrait)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2436x1125.png',
		media: '(device-width: 2436px and (device-height: 1125px) and (orientation: landscape)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1242x2208.png',
		media: '(device-width: 1242px and (device-height: 2208px) and (orientation: portrait)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2208x1242.png',
		media: '(device-width: 2208px) and (device-height: 1242px) and (orientation: landscape)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-750x1334.png',
		media: '(device-width: 750px) and (device-height: 134px) and (orientation: portrait)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1334x750.png',
		media: '(device-width: 1334px and (device-height: 750px) and (orientation: landscape)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1242x2208.png',
		media: '(device-width: 1242px and (device-height: 2208px) and (orientation: portrait)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2208x1242.png',
		media: '(device-width: 2208px) and (device-height: 1242px) and (orientation: landscape)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-750x1334.png',
		media: '(device-width: 750px) and (device-height: 134px) and (orientation: portrait)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1334x750.png',
		media: '(device-width: 1334px and (device-height: 750px) and (orientation: landscape)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1242x2208.png',
		media: '(device-width: 1242px and (device-height: 2208px) and (orientation: portrait)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-2208x1242.png',
		media: '(device-width: 2208px) and (device-height: 1242px) and (orientation: landscape)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-750x1334.png',
		media: '(device-width: 750px) and (device-height: 134px) and (orientation: portrait)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1334x750.png',
		media: '(device-width: 1334px) and (device-height: 50px) and (orientation: landscape)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-640x1136.png',
		media: '(device-width: 640px) and (device-height: 136px) and (orientation: portrait)'
	},
	{
		rel: 'apple-touch-startup-image',
		href: '/images/launch-screens/launch-screen-1136x640.png',
		media: '(device-width: 1136px) and (device-height: 640px) and (orientation: landscape)'
	}
];
