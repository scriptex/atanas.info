import { Routes } from '@data/routes';
import { MDX as Mdx } from '@components';
import { snapshotTest } from '@test-config/helpers';

snapshotTest(
	() => <Mdx id="test" back={Routes.BLOG} title="Test" image="/images/test.jpg" content="Test content" />,
	undefined,
	'MDX'
);
