import { MDX as Mdx } from '@components';
import { Routes } from '@data/routes';
import { snapshotTest } from '@test-config/helpers';

snapshotTest(
	() => <Mdx back={Routes.BLOG} content="Test content" id="test" image="/images/test.jpg" slug="test" title="Test" />,
	undefined,
	'MDX'
);
