/* eslint-disable compat/compat */
import * as React from 'react';
import { render } from 'react-dom';
import TagManager from 'react-gtm-module';
import 'html-head-component';
import 'regenerator-runtime/runtime';

import { App } from './components';
import { isPrerendering } from './scripts/shared';

interface IWorker {
	name: string;
	action?: (registration: ServiceWorkerRegistration) => void;
}

const node: HTMLElement | null = document.getElementById('root') || document.createElement('div');
const router = (Application: React.ComponentType): JSX.Element => <Application />;
const renderRoot = (app: JSX.Element): void => render(app, node);

(CSS as any).paintWorklet.addModule(new URL('./houdini/avatar-polygon.ts', import.meta.url));
(CSS as any).paintWorklet.addModule(new URL('./houdini/bubbles.ts', import.meta.url));
(CSS as any).paintWorklet.addModule(new URL('./houdini/circles.ts', import.meta.url));
(CSS as any).paintWorklet.addModule(new URL('./houdini/slanted-backgrounds.ts', import.meta.url));

renderRoot(router(App));

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
