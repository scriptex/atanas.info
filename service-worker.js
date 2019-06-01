const CACHE_NAME = `atanas.info-cache-${new Date().getTime()}`;
const urlsToCache = [
	'/footer.php',
	'/head.php',
	'/header.php',
	'/index.php',
	'manifest.json',
	'service-worker.js',
	'/assets/dist/app.css',
	'/assets/dist/app.js',
	'/assets/dist/critical.css',
	'/assets/dist/sprite.svg',
	'/assets/images/favicon/apple-touch-icon-57x57.png',
	'/assets/images/favicon/apple-touch-icon-60x60.png',
	'/assets/images/favicon/apple-touch-icon-72x72.png',
	'/assets/images/favicon/apple-touch-icon-76x76.png',
	'/assets/images/favicon/apple-touch-icon-114x114.png',
	'/assets/images/favicon/apple-touch-icon-120x120.png',
	'/assets/images/favicon/apple-touch-icon-144x144.png',
	'/assets/images/favicon/apple-touch-icon-152x152.png',
	'/assets/images/favicon/favicon-16x16.png',
	'/assets/images/favicon/favicon-32x32.png',
	'/assets/images/favicon/favicon-96x96.png',
	'/assets/images/favicon/favicon-128.png',
	'/assets/images/favicon/favicon-196x196.png',
	'/assets/images/favicon/favicon.ico',
	'/assets/images/favicon/mstile-70x70.png',
	'/assets/images/favicon/mstile-144x144.png',
	'/assets/images/favicon/mstile-150x150.png',
	'/assets/images/favicon/mstile-310x150.png',
	'/assets/images/favicon/mstile-310x310.png',
	'/assets/images/temp/atanas.jpg',
	'/assets/images/temp/atelier-coolinar.png',
	'/assets/images/temp/desktop.jpg',
	'/assets/images/temp/emailio.png',
	'/assets/images/temp/faraon-bg.png',
	'/assets/images/temp/logo.png',
	'/assets/images/temp/nulla-tv.png',
	'/assets/images/temp/sod-bg.png',
	'/assets/images/temp/three-11.png',
	'/assets/images/temp/x-form.png',
	'/assets/images/svg/angular.svg',
	'/assets/images/svg/babylonjs.svg',
	'/assets/images/svg/backbone.svg',
	'/assets/images/svg/bash.svg',
	'/assets/images/svg/bootstrap.svg',
	'/assets/images/svg/codepen.svg',
	'/assets/images/svg/cordova.svg',
	'/assets/images/svg/css.svg',
	'/assets/images/svg/d3.svg',
	'/assets/images/svg/email.svg',
	'/assets/images/svg/foundation.svg',
	'/assets/images/svg/git.svg',
	'/assets/images/svg/github.svg',
	'/assets/images/svg/gitlab.svg',
	'/assets/images/svg/google-plus.svg',
	'/assets/images/svg/grunt.svg',
	'/assets/images/svg/gulp.svg',
	'/assets/images/svg/html.svg',
	'/assets/images/svg/ionic.svg',
	'/assets/images/svg/javascript.svg',
	'/assets/images/svg/jest.svg',
	'/assets/images/svg/jquery.svg',
	'/assets/images/svg/less.svg',
	'/assets/images/svg/linkedin.svg',
	'/assets/images/svg/logo.svg',
	'/assets/images/svg/nodejs.svg',
	'/assets/images/svg/npm.svg',
	'/assets/images/svg/photoshop.svg',
	'/assets/images/svg/php.svg',
	'/assets/images/svg/postcss.svg',
	'/assets/images/svg/react.svg',
	'/assets/images/svg/redux-saga.svg',
	'/assets/images/svg/redux.svg',
	'/assets/images/svg/sass.svg',
	'/assets/images/svg/sketch.svg',
	'/assets/images/svg/svg.svg',
	'/assets/images/svg/svn.svg',
	'/assets/images/svg/twitter.svg',
	'/assets/images/svg/typescript.svg',
	'/assets/images/svg/vue.svg',
	'/assets/images/svg/webpack.svg',
	'/assets/images/svg/wordpress.svg'
];

self.addEventListener('install', event => {
	self.skipWaiting();

	event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
			if (response) {
				return response;
			}

			const fetchRequest = event.request.clone();

			return fetch(fetchRequest).then(response => {
				if (!response || response.status !== 200 || response.type !== 'basic') {
					return response;
				}

				// Clone the response because it's a one time use stream
				const responseToCache = response.clone();

				event.waitUntil(
					caches.open(CACHE_NAME).then(cache => {
						cache.put(event.request, responseToCache);
					})
				);

				return response;
			});
		})
	);
});

self.addEventListener('activate', event => {
	event.waitUntil(
		caches
			.keys()
			.then(cacheNames =>
				Promise.all(
					cacheNames.filter(cacheName => cacheName !== CACHE_NAME).map(cacheName => caches.delete(cacheName))
				)
			)
	);
});
