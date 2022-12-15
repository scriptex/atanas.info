/* eslint-disable compat/compat */
import * as React from 'react';
import TagManager from 'react-gtm-module';
import { createRoot } from 'react-dom/client';
import 'html-head-component';

import { App } from './components';

import './index.pcss';

const node = document.getElementById('root') || document.createElement('div');

createRoot(node).render(<App />);

if (process.env.GTM_ID) {
	TagManager.initialize({
		gtmId: process.env.GTM_ID
	});
}
