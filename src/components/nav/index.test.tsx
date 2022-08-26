import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Nav } from '.';
import { snapshotTest } from '../test-helpers';

const NavComponent: React.FC = () => (
	<Router>
		<Nav hasShell className="c-nav--test" onClick={jest.fn()}>
			Test
		</Nav>
	</Router>
);

snapshotTest(NavComponent);
