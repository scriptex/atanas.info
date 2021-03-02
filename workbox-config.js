module.exports = {
	swDest: 'dist/offline-worker.js',
	sourcemap: false,
	skipWaiting: true,
	globIgnores: ['**/images/svg/*'],
	globPatterns: ['**/*.{js,css,png,svg,jpg,gif,json,woff,woff2,eot,ico,webmanifest,map}'],
	clientsClaim: true,
	globDirectory: 'dist',
	maximumFileSizeToCacheInBytes: 8000000
};
