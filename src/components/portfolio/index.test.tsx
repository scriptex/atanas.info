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
			url: 'https://example.com/',
			image: 'images/temp/example.png',
			title: 'Example',
			description: 'TypeScript, SCSS, React, Redux, MS Azure, NodeJS'
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
