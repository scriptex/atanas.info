module.exports = {
	swDest: 'dist/offline-worker.js',
	sourcemap: false,
	skipWaiting: true,
	globIgnores: [
		'**/music/cert/*',
		'**/music/houdini/*',
		'**/music/images/**/*',
		'**/music/stl/*',
		'**/music/*.xml',
		'**/music/*.svg',
		'**/music/*.pdf',
		'**/music/*.txt'
	],
	globPatterns: ['**/*'],
	clientsClaim: true,
	globDirectory: 'dist',
	maximumFileSizeToCacheInBytes: 8000000,
	runtimeCaching: [
		{
			urlPattern: /\.(?:html|pdf|ico|png|svg|jpg|gif|json|woff|woff2|eot|webmanifest|stl|dds|xml|txt)$/,
			handler: 'CacheFirst',
			options: {
				cacheName: 'assets',
				expiration: {
					maxEntries: 10,
					maxAgeSeconds: 60 * 60 * 24 * 30 // 30 Days
				}
			}
		},
		{
			urlPattern: /\.(?:css|js)$/,
			handler: 'StaleWhileRevalidate',
			options: {
				cacheName: 'code'
			}
		}
	]
};
