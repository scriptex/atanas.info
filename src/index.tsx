import * as React from 'react';
import { render } from 'react-dom';
import 'html-head-component';

import './scripts/google-analytics-local';

import { App } from './components';

interface IWorker {
	name: string;
	action?: (registration: ServiceWorkerRegistration) => void;
}

const node: HTMLElement | null = document.getElementById('root') || document.createElement('div');
const renderRoot = (app: JSX.Element): void => render(app, node);
const router = (Application: React.ComponentType): JSX.Element => <Application />;

renderRoot(router(App));

const gtag = (...args: any[]): void => {
	window.dataLayer.push(args);
};

window.dataLayer = window.dataLayer || [];

gtag('js', new Date());
gtag('config', 'UA-83446952-1');

if ('serviceWorker' in navigator) {
	const workers: IWorker[] = [
		{
			name: `service-worker.js`,
			action: (registration: ServiceWorkerRegistration): void => {
				registration.onupdatefound = (): void => {
					const installingWorker = registration.installing;

					if (installingWorker === null) {
						return;
					}

					installingWorker.onstatechange = () => {
						if (installingWorker.state !== 'installed') {
							return;
						}

						console.info(
							navigator.serviceWorker.controller
								? 'New content is available and will be used when all tabs for this page are closed.'
								: 'Content is cached for offline use.'
						);
					};
				};
			}
		},
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
