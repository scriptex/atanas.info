import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ErrorPage } from '.';
import { snapshotTest } from '../test-helpers';

const ErrorComponent: React.FC = () => (
	<Router>
		<ErrorPage />
	</Router>
);

snapshotTest(ErrorComponent);
