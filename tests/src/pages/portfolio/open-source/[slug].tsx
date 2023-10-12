import { partners } from '@test-config/mocks';
import { snapshotTest } from '@test-config/helpers';
import { getStaticPaths, OpenSourceProject } from '@pages/portfolio/open-source/[slug]';

jest.mock('next/router', () => ({
	...jest.requireActual('next/router'),
	useRouter: jest.fn(() => ({
		pathname: '/',
		isFallback: false
	}))
}));

const testSlug = '2048';

snapshotTest(
	() => <OpenSourceProject post={{ slug: testSlug, content: 'This is a test content' }} partners={partners} />,
	undefined,
	'OpenSourceProject'
);

snapshotTest(
	() => (
		<OpenSourceProject post={{ slug: 'nonexistent-post', content: 'This post is missing' }} partners={partners} />
	),
	undefined,
	'OpenSourceProject'
);

snapshotTest(
	() => <OpenSourceProject post={{ slug: '', content: 'This post is missing' }} partners={partners} />,
	undefined,
	'OpenSourceProject'
);

// @ts-ignore
snapshotTest(() => <OpenSourceProject />, undefined, 'OpenSourceProject');

it('Test the `getStaticPaths` function', async () => {
	const result = await getStaticPaths();

	expect(result).toBeDefined();
	expect(result.fallback).toEqual(false);
	expect(Array.isArray(result.paths)).toEqual(true);
	expect(result.paths.length).toEqual(96);
});
