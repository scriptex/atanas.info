module.exports = {
	swDest: 'dist/offline-worker.js',
	sourcemap: false,
	skipWaiting: true,
	globIgnores: ['**/images/favicon/**', '**/images/icons/**', '**/images/launch-screens/**'],
	globPatterns: ['**/*'],
	clientsClaim: true,
	globDirectory: 'dist',
	maximumFileSizeToCacheInBytes: 8000000,
	runtimeCaching: [
		{
			urlPattern: /\.(?:pdf|ico|png|svg|jpg|gif|json|woff|woff2|eot|webmanifest|stl|dds|xml|txt)$/,
			handler: 'CacheFirst',
			options: {
				cacheName: 'cache-assets',
				expiration: {
					maxEntries: 10,
					maxAgeSeconds: 60 * 60 * 24 * 30 // 30 Days
				}
			}
		},
		{
			urlPattern: /\.(?:html|github-calendar|gitlab-calendar)$/,
			handler: 'NetworkFirst',
			options: {
				cacheName: 'network-assets'
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
