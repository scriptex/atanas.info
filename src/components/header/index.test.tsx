import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from '.';
import { snapshotTest } from '../test-helpers';

const HeaderComponent: React.FC = () => (
	<Router>
		<Header />
	</Router>
);

snapshotTest(HeaderComponent);
