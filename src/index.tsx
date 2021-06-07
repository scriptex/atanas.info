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
const renderRoot = (app: JSX.Element): void => render(app, node);
const router = (Application: React.ComponentType): JSX.Element => <Application />;

renderRoot(router(App));

TagManager.initialize({
	gtmId: process.env.GTM_ID as string
});

if ('serviceWorker' in navigator && !isPrerendering) {
	const workers: IWorker[] = [
		{
			name: `offline-worker.js`
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
