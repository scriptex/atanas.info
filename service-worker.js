self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('atanas.info-cache').then(function(cache) {
			return cache.addAll([
				'/',
				'/assets/dist/app.css',
				'/assets/dist/app.css.map',
				'/assets/dist/app.js',
				'/assets/dist/app.js.map',
				'/assets/dist/sprite.png',
				'/assets/dist/sprite@2x.png',
				'/assets/dist/sprite.svg',
				'/assets/images/temp/atanas.jpg',
				'/assets/images/temp/desktop.jpg',
				'/assets/images/temp/logo.png'
			]);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			if (response) {
				return response;
			}

			return fetch(event.request);
		})
	);
});
