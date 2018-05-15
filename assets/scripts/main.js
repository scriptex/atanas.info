import animateTopOffset from '@three11/animate-top-offset';

import { textRotate } from './slider';
import { drawSkills } from './skills';
import { initCanvas, createDots } from './canvas';
import { skills } from './skills-list';
import { texts } from './hero-texts';

const doc = document;
const win = window;
const header = doc.querySelector('.c-header');
const toggleHeaderState = winO => {
	header.classList.toggle('c-header--with-background', winO > 0);
};
const internalLinks = [...doc.querySelectorAll('.js-internal-link')];
const navToggler = doc.getElementById('nav_toggle');

const canvas = initCanvas('canvas');

drawSkills(skills);
createDots(canvas);
textRotate('text', texts);

internalLinks.forEach(link => {
	link.addEventListener('click', event => {
		event.preventDefault();

		const href = link.getAttribute('href');
		const offset = doc.querySelector(href).offsetTop;

		animateTopOffset(offset - header.clientHeight);
		navToggler.checked = false;
	});
});

win.addEventListener('load', event => {
	toggleHeaderState(win.pageYOffset);
});

win.addEventListener('scroll', event => {
	toggleHeaderState(win.pageYOffset);
});

if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
		navigator.serviceWorker.register('./service-worker.js').then(
			function(registration) {
				// Registration was successful
				console.log(
					'ServiceWorker registration successful with scope: ',
					registration.scope
				);
			},
			function(err) {
				// registration failed :(
				console.log('ServiceWorker registration failed: ', err);
			}
		);
	});
}
