import animateTopOffset from '@three11/animate-top-offset';

import { texts } from './hero-texts';
import { skills } from './skills-list';
import { textRotate } from './slider';
import { drawSkills } from './skills';
import { initCanvas, createDots } from './canvas';

const doc = document;
const win = window;
const canvas = initCanvas('canvas');
const header = doc.querySelector('.c-header');
const navToggler = doc.getElementById('nav_toggle');
const internalLinks = [...doc.querySelectorAll('.js-internal-link')];
const toggleHeaderState = winO => {
	header.classList.toggle('c-header--with-background', winO > 0);
};

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
	win.addEventListener('load', () => {
		navigator.serviceWorker.register('./service-worker.js');
		navigator.serviceWorker.register('./projects/service-worker.js');
	});
}

require('./google-analytics-local.js');

window.dataLayer = window.dataLayer || [];

function gtag() {
	window.dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'UA-83446952-1');
