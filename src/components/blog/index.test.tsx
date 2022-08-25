import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Blog } from '.';
import { snapshotTest } from '../test-helpers';

const BlogComponent: React.FC = () => (
	<Router>
		<Blog />
	</Router>
);

snapshotTest(BlogComponent);
