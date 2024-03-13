import { getStaticPaths, OpenSourceProject } from '@pages/portfolio/open-source/[slug]';

import { snapshotTest } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';

jest.mock('next/router', () => ({
	...jest.requireActual('next/router'),
	useRouter: jest.fn(() => ({
		isFallback: false,
		pathname: '/'
	}))
}));

const testSlug = '2048';

snapshotTest(
	() => (
		<OpenSourceProject
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
			funding={funding}
			partners={partners}
			post={{ content: 'This post is missing', slug: 'nonexistent-post' }}
		/>
	),
	undefined,
	'OpenSourceProject'
);

snapshotTest(
	() => (
		<OpenSourceProject funding={funding} partners={partners} post={{ content: 'This post is missing', slug: '' }} />
	),
	undefined,
	'OpenSourceProject'
);

// @ts-ignore
snapshotTest(() => <OpenSourceProject funding={funding} partners={partners} />, undefined, 'OpenSourceProject');

it('Test the `getStaticPaths` function', async () => {
	const result = await getStaticPaths();

	expect(result).toBeDefined();
	expect(result.fallback).toEqual(false);
	expect(Array.isArray(result.paths)).toEqual(true);
	expect(result.paths.length).toBeGreaterThan(0);
});
