module.exports = {
	swDest: 'dist/offline-worker.js',
	globDirectory: 'dist',
	globPatterns: ['**/*.{js,css,png,svg,jpg,gif,json,woff,woff2,eot,ico,webmanifest,map}'],
	skipWaiting: true,
	clientsClaim: true
};
