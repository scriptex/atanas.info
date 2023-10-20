import { snapshotTest } from '@test-config/helpers';
import { articles, funding, partners } from '@test-config/mocks';
import { getStaticPaths, OpenSourceProject } from '@pages/blog/[slug]';

const testSlug = 'testing-websockets-with-cypress';

snapshotTest(
	() => (
		<OpenSourceProject
			post={{ slug: testSlug, content: 'This is a test content' }}
			funding={funding}
			articles={articles}
			partners={partners}
		/>
	),
	undefined,
	'OpenSourceProject'
);

snapshotTest(
	() => (
		<OpenSourceProject
			post={{ slug: 'nonexistent-post', content: 'This post is missing' }}
			funding={funding}
			articles={articles}
			partners={partners}
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
	expect(result.paths.length).toEqual(4);
});
