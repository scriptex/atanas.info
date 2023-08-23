import { MDX } from '@components';
import { Routes } from '@data/routes';
import { snapshotTest } from '@test-config/helpers';

snapshotTest(
	() => <MDX id="test" back={Routes.BLOG} title="Test" image="/images/test.jpg" content="Test content" />,
	undefined,
	'MDX'
);
