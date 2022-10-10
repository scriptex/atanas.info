import { resolve } from 'path';

import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import googleAnalyticsPlugin from '@vuepress/plugin-google-analytics';
import { config as dotenvConfig } from 'dotenv';

import openSource from '../../src/data/open-source';

dotenvConfig({
	path: resolve(process.cwd(), '../.env')
});

export default defineUserConfig({
	base: '/projects/',
	title: 'Atanas Atanasov',
	description: "Atanas Atanasov's open source projects",
	head: [
		[
			'meta',
			{
				name: 'description',
				content:
					'Atanas Atanasov - Senior Web Developer -== Custom WordPress themes, Single Page Applications -- Vue.js & React, Laravel, State of the art Web Development ==-'
			}
		],
		[
			'meta',
			{
				name: 'keywords',
				content:
					'Web Development, WordPress Development, HTML Development, Website Development, JavaScript Development, WordPress, Laravel, WP, JS, JavaScript, Vue, Vue.js, VueJS, Nuxt, Single Page Apps, Single Page Application, CSS, CSS3, ES5, ES6, ES7, Website, Development'
			}
		],
		[
			'meta',
			{
				name: 'copyright',
				content: 'Atanas Atanasov'
			}
		],
		[
			'meta',
			{
				name: 'language',
				content: 'EN'
			}
		],
		[
			'meta',
			{
				name: 'robots',
				content: 'index,follow'
			}
		],
		[
			'meta',
			{
				name: 'author',
				content: 'Atanas Atanasov, hi@atanas.info'
			}
		],
		[
			'meta',
			{
				name: 'designer',
				content: 'Atanas Atanasov'
			}
		],
		[
			'meta',
			{
				name: 'coverage',
				content: 'Worldwide'
			}
		],
		[
			'meta',
			{
				name: 'distribution',
				content: 'Worldwide'
			}
		],
		[
			'meta',
			{
				name: 'rating',
				content: 'General'
			}
		],
		[
			'meta',
			{
				name: 'revisit-after',
				content: '7 days'
			}
		],
		[
			'meta',
			{
				'http-equiv': 'Expires',
				content: '0'
			}
		],
		[
			'meta',
			{
				'http-equiv': 'Pragma',
				content: 'no-cache'
			}
		],
		[
			'meta',
			{
				'http-equiv': 'Cache-Control',
				content: 'no-cache'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '57x57',
				href: '../images/favicon/apple-touch-icon-57x57.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '114x114',
				href: '../images/favicon/apple-touch-icon-114x114.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '72x72',
				href: '../images/favicon/apple-touch-icon-72x72.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '144x144',
				href: '../images/favicon/apple-touch-icon-144x144.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '60x60',
				href: '../images/favicon/apple-touch-icon-60x60.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '120x120',
				href: '../images/favicon/apple-touch-icon-120x120.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '76x76',
				href: '../images/favicon/apple-touch-icon-76x76.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '152x152',
				href: '../images/favicon/apple-touch-icon-152x152.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				sizes: '196x196',
				type: 'image/png',
				href: '../images/favicon/favicon-196x196.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				sizes: '96x96',
				type: 'image/png',
				href: '../images/favicon/favicon-96x96.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				sizes: '32x32',
				type: 'image/png',
				href: '../images/favicon/favicon-32x32.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				sizes: '16x16',
				type: 'image/png',
				href: '../images/favicon/favicon-16x16.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				sizes: '128x128',
				type: 'image/png',
				href: '../images/favicon/favicon-128x128.png'
			}
		],
		[
			'link',
			{
				rel: 'shortcut icon',
				type: 'image/x-icon',
				href: '../images/favicon/favicon.ico'
			}
		],
		[
			'meta',
			{
				name: 'application-name',
				content: 'Atanas Atanasov'
			}
		],
		[
			'meta',
			{
				name: 'msapplication-TileColor',
				content: '#ef4c23'
			}
		],
		[
			'meta',
			{
				name: 'msapplication-TileImage',
				content: '../images/favicon/mstile-144x144.png'
			}
		],
		[
			'meta',
			{
				name: 'msapplication-square70x70logo',
				content: '../images/favicon/mstile-70x70.png'
			}
		],
		[
			'meta',
			{
				name: 'msapplication-square150x150logo',
				content: '../images/favicon/mstile-150x150.png'
			}
		],
		[
			'meta',
			{
				name: 'msapplication-wide310x150logo',
				content: '../images/favicon/mstile-310x150.png'
			}
		],
		[
			'meta',
			{
				name: 'msapplication-square310x310logo',
				content: '../images/favicon/mstile-310x310.png'
			}
		],
		[
			'meta',
			{
				name: 'theme-color',
				content: '#ef4c23'
			}
		]
	],
	dest: '../dist/projects',
	port: 1234,
	plugins: [
		googleAnalyticsPlugin({
			id: process.env.GTM_ID
		})
	],
	theme: defaultTheme({
		sidebar: openSource.projects.sort().map(item => {
			const text = item.split('/').pop() || '';

			return {
				link: `/${text}`,
				text
			};
		}),
		repo: 'https://atanas.info',
		repoLabel: 'Back to atanas.info',
		editLink: false
	})
});
