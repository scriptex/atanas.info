// @ts-nocheck
import animateTopOffset from '@three11/animate-top-offset';

import Webamp from 'webamp';
import initialTracks from './tracks.js';

import { texts } from './hero-texts';
import { skills } from './skills-list';
import { textRotate } from './slider';
import { drawSkills } from './skills';
import { initCanvas, createDots } from './canvas';

const doc = document;
const win = window;
const music = document.getElementById('music');
const canvas = initCanvas('canvas');
const header = doc.querySelector('.c-header');
const navToggler = doc.getElementById('nav_toggle');
const tabToggles = doc.querySelectorAll('.js-tab-toggle');
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

		if (href.includes('music')) {
			doc.querySelector(href).classList.add('is--active');
		}

		animateTopOffset(offset - header.clientHeight);
		navToggler.checked = false;
	});
});

tabToggles.forEach(toggle => {
	toggle.addEventListener('click', event => {
		event.preventDefault();

		const li = toggle.parentNode;

		if (li.classList.contains('current')) {
			return;
		}

		const id = toggle.getAttribute('href');
		const tab = doc.querySelector(id);

		li.parentNode.querySelector('.current').classList.remove('current');
		tab.parentNode.querySelector('.current').classList.remove('current');

		li.classList.add('current');
		tab.classList.add('current');
	});
});

if (!Webamp.browserIsSupported()) {
	music.innerHTML = '<div class="unsupported">Unfortunately your browser is not supported.</div>';
} else {
	const webamp = new Webamp({ initialTracks });

	webamp.onClose(() => {
		music.classList.remove('is--active');
		document.querySelector('[href="#music"]').addEventListener('click', () => webamp.reopen());
	});

	webamp.renderWhenReady(music);
}

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
