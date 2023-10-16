import { Layout } from '@components';
import { partners } from '@test-config/mocks';
import { snapshotTest } from '@test-config/helpers';

snapshotTest(
	() => (
		<Layout partners={partners}>
			<p>Layout page</p>
		</Layout>
	),
	undefined,
	'Layout'
);
