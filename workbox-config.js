module.exports = {
	swDest: 'dist/offline-worker.js',
	sourcemap: false,
	skipWaiting: true,
	globIgnores: ['**/images/svg/*', '**/music/**'],
	globPatterns: ['**/*.{js,css,png,svg,jpg,gif,json,woff,woff2,eot,ico,webmanifest,stl,dds}'],
	clientsClaim: true,
	globDirectory: 'dist',
	maximumFileSizeToCacheInBytes: 8000000
};
