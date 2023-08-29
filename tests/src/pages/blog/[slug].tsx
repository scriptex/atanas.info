import type { InferGetStaticPropsType } from 'next';

import { articles } from '@test-config/mocks';
import { snapshotTest } from '@test-config/helpers';
import { getStaticPaths, getStaticProps, OpenSourceProject } from '@pages/blog/[slug]';

const testSlug = 'testing-websockets-with-cypress';

snapshotTest(
	() => <OpenSourceProject post={{ slug: testSlug, content: 'This is a test content' }} articles={articles} />,
	undefined,
	'OpenSourceProject'
);

snapshotTest(
	() => (
		<OpenSourceProject post={{ slug: 'nonexistent-post', content: 'This post is missing' }} articles={articles} />
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

it('Test the `getStaticProps` function', async () => {
	const result = (await getStaticProps({ params: { slug: testSlug } })) as {
		props: InferGetStaticPropsType<typeof getStaticProps>;
	};

	expect(result).toBeDefined();
	expect(result.props).toBeDefined();
	expect(result.props.post).toBeDefined();
	expect(result.props.post.slug).toEqual(testSlug);
	expect(typeof result.props.post.content).toEqual('string');
});
