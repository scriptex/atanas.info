import { snapshotTest } from '@test-config/helpers';
import { NPMStats, getStaticProps } from '@pages/stats/npm';

const data = {
	'test-package1': {
		name: 'test-package1',
		version: '1.0.0',
		description: 'A testing package',
		license: 'MIT',
		homepage: 'https://www.npmjs.com/package/test-package1',
		author: 'test',
		downloads: 1431
	},
	'test-package2': {
		name: 'test-package2',
		version: '1.0.0',
		description: 'A testing package',
		license: 'MIT',
		homepage: 'https://www.npmjs.com/package/test-package2',
		author: 'test,another',
		downloads: 1431
	}
} as any;

jest.mock('@lib/mongodb', () => ({
	getData: jest.fn(() => Promise.resolve({ props: { data: [] } }))
}));

snapshotTest(() => <NPMStats data={{ ...data, sum: 1876223 }} />);

snapshotTest(() => <NPMStats data={data} />);

it('Test the `getStaticProps` function', async () => {
	const result = await getStaticProps();

	expect(result).toBeDefined();
	expect(result.props).toBeDefined();
	expect(result.props.data).toBeDefined();
	expect(Array.isArray(result.props.data)).toEqual(true);
	expect(result.props.data.length).toEqual(0);
});
