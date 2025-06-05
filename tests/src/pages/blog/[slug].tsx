import { getStaticPaths, OpenSourceProject } from '@pages/blog/[slug]';

import { snapshotTest } from '@test-config/helpers';
import { articles, funding, partners } from '@test-config/mocks';

const testSlug = 'testing-websockets-with-cypress';

snapshotTest(
	() => (
		<OpenSourceProject
			articles={articles}
			funding={funding}
			partners={partners}
			post={{ content: 'This is a test content', slug: testSlug }}
		/>
	),
	undefined,
	'OpenSourceProject'
);

snapshotTest(
	() => (
		<OpenSourceProject
			articles={articles}
			funding={funding}
			partners={partners}
			post={{ content: 'This post is missing', slug: 'nonexistent-post' }}
		/>
	),
	undefined,
	'OpenSourceProject'
);

it('Test the `getStaticPaths` function', async () => {
	const result = await getStaticPaths({});

	expect(result).toBeDefined();
	expect(result.fallback).toEqual(false);
	expect(Array.isArray(result.paths)).toEqual(true);
	expect(result.paths.length).toEqual(7);
});
