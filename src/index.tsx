/* eslint-disable compat/compat */
import 'html-head-component';
import * as React from 'react';
import TagManager from 'react-gtm-module';
import { createRoot } from 'react-dom/client';

import { App } from '@components';

import './index.pcss';

const node = document.getElementById('root') || document.createElement('div');

createRoot(node).render(<App />);

if (process.env.GTM_ID) {
	TagManager.initialize({
		gtmId: process.env.GTM_ID
	});
}

if (CSS && CSS.paintWorklet && CSS.paintWorklet.addModule && typeof CSS.paintWorklet.addModule === 'function') {
	CSS.paintWorklet.addModule(new URL('/houdini/avatar-polygon.js', import.meta.url));
	CSS.paintWorklet.addModule(new URL('/houdini/blotto.js', import.meta.url));
	CSS.paintWorklet.addModule(new URL('/houdini/bubbles.js', import.meta.url));
	CSS.paintWorklet.addModule(new URL('/houdini/bytemare.js', import.meta.url));
	CSS.paintWorklet.addModule(new URL('/houdini/circles.js', import.meta.url));
	CSS.paintWorklet.addModule(new URL('/houdini/confetti.js', import.meta.url));
	CSS.paintWorklet.addModule(new URL('/houdini/parallelwow.js', import.meta.url));
	CSS.paintWorklet.addModule(new URL('/houdini/slanted-backgrounds.js', import.meta.url));
}
