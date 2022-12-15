/* eslint-disable compat/compat */
import * as React from 'react';
import TagManager from 'react-gtm-module';
import { createRoot } from 'react-dom/client';
import 'html-head-component';

import { App } from './components';

import './index.pcss';

if (CSS && CSS.paintWorklet && CSS.paintWorklet.addModule && typeof CSS.paintWorklet.addModule === 'function') {
	CSS.paintWorklet.addModule(new URL('./houdini/avatar-polygon.ts', import.meta.url));
	CSS.paintWorklet.addModule(new URL('./houdini/blotto.ts', import.meta.url));
	CSS.paintWorklet.addModule(new URL('./houdini/bubbles.ts', import.meta.url));
	CSS.paintWorklet.addModule(new URL('./houdini/bytemare.ts', import.meta.url));
	CSS.paintWorklet.addModule(new URL('./houdini/circles.ts', import.meta.url));
	CSS.paintWorklet.addModule(new URL('./houdini/confetti.ts', import.meta.url));
	CSS.paintWorklet.addModule(new URL('./houdini/parallelwow.ts', import.meta.url));
	CSS.paintWorklet.addModule(new URL('./houdini/slanted-backgrounds.ts', import.meta.url));
}

const node = document.getElementById('root') || document.createElement('div');

createRoot(node).render(<App />);

if (process.env.GTM_ID) {
	TagManager.initialize({
		gtmId: process.env.GTM_ID
	});
}
