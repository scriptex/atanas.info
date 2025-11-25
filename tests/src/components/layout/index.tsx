import { Layout } from '@components';

import { snapshotTest } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';

snapshotTest(
	() => (
		<Layout funding={funding} partners={partners}>
			<p>Layout page</p>
		</Layout>
	),
	undefined,
	'Layout'
);
