import { readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import alias from '@rollup/plugin-alias';
import dotenv from 'dotenv';
import prerender from 'vite-plugin-prerender';
import markdownIt from 'markdown-it';
import md, { Mode } from 'vite-plugin-markdown';
import markdownItPrism from 'markdown-it-prism';
import { defineConfig } from 'vite';
import { VitePWA as pwa } from 'vite-plugin-pwa';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

import { Routes } from './src/data/routes';
import dynamicRoutes from './src/data/dynamic-routes.json';

let localConfig = '';

try {
	localConfig = readFileSync(join(__dirname, '.env'), 'utf-8');
} catch (e) {
	localConfig = '';
}

const env = dotenv.parse(localConfig);
const prerenderRoutes = [...dynamicRoutes, ...Object.values(Routes)];

export default defineConfig({
	css: {
		postcss: resolve(__dirname, 'config')
	},

	define: {
		'process.env': {
			...process.env,
			...env
		}
	},
	plugins: [
		md({
			mode: [Mode.HTML],
			markdownIt: markdownIt({
				html: true
			}).use(markdownItPrism)
		}),
		react(),
		pwa({
			registerType: 'autoUpdate',
			manifest: {
				lang: 'en',
				dir: 'ltr',
				name: 'Atanas Atanasov',
				short_name: 'Atanas',
				description:
					'Atanas Atanasov - Senior Javascript/Typescript Engineer: Single Page Applications, Vue, React, Angular, NodeJS',
				theme_color: '#ef4c23',
				background_color: '#ef4c23',
				display: 'standalone',
				orientation: 'portrait',
				scope: '/',
				start_url: '/',
				icons: [
					{
						src: '/images/icons/icon-72x72.png',
						sizes: '72x72',
						type: 'image/png'
					},
					{
						src: '/images/icons/icon-96x96.png',
						sizes: '96x96',
						type: 'image/png'
					},
					{
						src: '/images/icons/icon-128x128.png',
						sizes: '128x128',
						type: 'image/png'
					},
					{
						src: '/images/icons/icon-144x144.png',
						sizes: '144x144',
						type: 'image/png'
					},
					{
						src: '/images/icons/icon-152x152.png',
						sizes: '152x152',
						type: 'image/png'
					},
					{
						src: '/images/icons/icon-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/images/icons/icon-384x384.png',
						sizes: '384x384',
						type: 'image/png'
					},
					{
						src: '/images/icons/icon-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			}
		}),
		chunkSplitPlugin(),
		prerender({
			routes: prerenderRoutes,
			minify: {
				decodeEntities: true,
				sortAttributes: true,
				keepClosingSlash: true,
				collapseWhitespace: true,
				collapseBooleanAttributes: true
			},
			renderer: new prerender.PuppeteerRenderer({
				args: ['-no-sandbox', '-disable-setuid-sandbox', '--window-size=1920,1080'],
				inject: {
					isPrerendering: true
				},
				injectProperty: '__ATANAS_INFO_PRERENDERING',
				maxConcurrentRoutes: 1
			}),
			staticDir: join(__dirname, 'dist')
		}),
		// @ts-ignore
		alias({
			entries: {
				'@src': '/src',
				'@data': '/src/data',
				'@scripts': '/src/scripts',
				'@insights': '/src/insights',
				'@components': '/src/components'
			}
		})
	],
	server: {
		port: 1234,
		open: true
	}
});
