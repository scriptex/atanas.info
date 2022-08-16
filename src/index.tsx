/* eslint-disable compat/compat */
import * as React from 'react';
import TagManager from 'react-gtm-module';
import { createRoot, hydrateRoot } from 'react-dom/client';
import 'html-head-component';
import 'regenerator-runtime/runtime';

import { App } from './components';
import { isPrerendering } from './scripts/shared';

interface IWorker {
	name: string;
	action?: (registration: ServiceWorkerRegistration) => void;
}

if (CSS && CSS.paintWorklet && CSS.paintWorklet.addModule && typeof CSS.paintWorklet.addModule === 'function') {
	CSS.paintWorklet.addModule(new URL('./houdini/avatar-polygon.ts', import.meta.url));
	CSS.paintWorklet.addModule(new URL('./houdini/bubbles.ts', import.meta.url));
	CSS.paintWorklet.addModule(new URL('./houdini/circles.ts', import.meta.url));
	CSS.paintWorklet.addModule(new URL('./houdini/confetti.ts', import.meta.url));
	CSS.paintWorklet.addModule(new URL('./houdini/slanted-backgrounds.ts', import.meta.url));
}

const node = document.getElementById('root') || document.createElement('div');

if (node.hasChildNodes()) {
	hydrateRoot(node, <App />);
} else {
	createRoot(node).render(<App />);
}

TagManager.initialize({
	gtmId: process.env.GTM_ID as string
});

if ('serviceWorker' in navigator && !isPrerendering && process.env.NODE_ENV !== 'development') {
	const workers: IWorker[] = [
		{
			name: `/offline-worker.js`
		}
	];

	window.addEventListener('load', () => {
		workers.forEach((worker: IWorker) => {
			navigator.serviceWorker
				.register(worker.name)
				.then(worker.action || null)
				.catch(error => {
					console.error('Error during service worker registration: ', error);
				});
		});
	});
}
