import * as React from 'react';
import { render } from 'react-dom';

import './scripts/google-analytics-local';

import { App } from './components';

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
	const sw = `service-worker.js`;

	window.addEventListener('load', () => {
		navigator.serviceWorker.register(sw);
	});
}
