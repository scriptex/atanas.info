import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';

import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import markdownIt from 'markdown-it';
import md, { Mode } from 'vite-plugin-markdown';
import markdownItPrism from 'markdown-it-prism';
import { defineConfig } from 'vite';
import { VitePWA as pwa } from 'vite-plugin-pwa';

const env = dotenv.parse(readFileSync(resolve(__dirname, '.env')));

const markdownPlugin = md({
	mode: [Mode.HTML],
	markdownIt: markdownIt({
		html: true
	}).use(markdownItPrism)
});

export default defineConfig({
	css: {
		postcss: resolve(__dirname, 'config')
	},
	build: {
		rollupOptions: {
			plugins: [markdownPlugin],
			output: {
				experimentalMinChunkSize: 500000
			}
		}
	},
	define: {
		'process.env': {
			...process.env,
			...env
		}
	},
	plugins: [
		markdownPlugin,
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
		})
	],
	server: {
		port: 1234,
		open: true
	}
});
