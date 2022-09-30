import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Portfolio } from '.';
import { snapshotTest } from '../test-helpers';
import { PortfolioWebApps } from './web';
import { PortfolioMobileApps } from './mobile';
import { PortfolioAutomotiveApps } from './automotive';

jest.mock('../../data/projects-list.json', () => ({
	default: [
		{
			url: 'https://app.home.eon.com/',
			image: 'images/temp/eon-home.png',
			title: 'E.ON Home',
			description: 'TypeScript, SCSS, React, Redux, MS Azure, NodeJS'
		},
		{
			url: 'https://hems-admin-portal.eon.ooo/',
			image: 'images/temp/eon-hems.png',
			title: 'E.ON H.E.M.S (Home Energy Management System)',
			description: 'TypeScript, SCSS, Angular, Redux, MS Azure, NodeJS',
			timeout: 5000
		},
		{
			url: 'https://xpndnow.com/',
			image: 'images/temp/xpnd.png',
			title: 'XPND',
			description: 'TypeScript, SCSS, React, Redux, NodeJS'
		},
		{
			url: 'https://xpndnow.com/ebook',
			image: 'images/temp/xpnd-ebook.png',
			title: 'XPND Ebook',
			description: 'TypeScript, SCSS, React, Redux, NodeJS'
		},
		{
			url: 'https://demo.xpndnow.com/',
			image: 'images/temp/xpnd-demo.png',
			title: 'XPND demo application',
			description: 'TypeScript, SCSS, React, Redux, NodeJS'
		},
		{
			url: 'http://emailio.com/',
			image: 'images/temp/emailio.png',
			title: 'Emailio Web Application',
			description: 'SCSS, JavaScript, React, Redux, Redux Saga'
		},
		{
			url: 'https://www.nulla.tv/',
			image: 'images/temp/nulla-tv.png',
			title: 'Nulla TV',
			description: 'HTML5, CSS3, JavaScript, WordPress'
		},
		{
			url: 'https://kinetikautomotive.com/',
			image: 'images/temp/kinetik-automotive.png',
			title: 'Kinetik Automotive',
			description: 'HTML5, CSS3, JavaScript, Vue, Nuxt, WordPress'
		},
		{
			url: 'https://www.sod.bg/',
			image: 'images/temp/sod-bg.png',
			title: 'SOD 64 (СОД 64)',
			description: 'HTML5, CSS3, JavaScript, jQuery, PHP'
		},
		{
			url: '',
			image: 'images/temp/at-the-wall.png',
			title: 'At the Wall',
			description: 'CSS3, PHP'
		},
		{
			url: 'https://snake.atanas.info',
			image: 'images/temp/material-snake.png',
			title: 'Material Snake',
			description: 'TypeScript, HTML, CSS3'
		},
		{
			url: 'https://www.google.com',
			image: 'image 1',
			title: 'Project 1',
			description: 'Description 1'
		}
	]
}));

afterAll(() => {
	jest.resetAllMocks();
});

const PortfolioComponent: React.FC = () => (
	<Router>
		<Portfolio />
	</Router>
);

const PortfolioWebComponent: React.FC = () => (
	<Router>
		<PortfolioWebApps />
	</Router>
);

const PortfolioMobileComponent: React.FC = () => (
	<Router>
		<PortfolioMobileApps />
	</Router>
);

const PortfolioAutomotiveComponent: React.FC = () => (
	<Router>
		<PortfolioAutomotiveApps />
	</Router>
);

[PortfolioComponent, PortfolioWebComponent, PortfolioMobileComponent, PortfolioAutomotiveComponent].forEach(Component =>
	snapshotTest(Component, '.c-section__actions .c-btn')
);
