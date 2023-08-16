import type { ComponentProps } from 'react';

import { snapshotTest } from '@test-config/helpers';
import { NPMStats, getStaticProps } from '@pages/stats/npm';
import type { Package, WithError, WithSum } from '@pages/stats/types';

type Data = Record<string, Package> & WithSum & WithError;

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
} as unknown as Data;

jest.mock('@lib/mongodb', () => ({
	getData: jest.fn(() => Promise.resolve({ props: { data: [] } }))
}));

snapshotTest(() => <NPMStats data={{ ...data, sum: 1876223 } as unknown as Data} />);

snapshotTest(() => <NPMStats data={data} />);

snapshotTest(() => <NPMStats data={{} as ComponentProps<typeof NPMStats>['data']} />);

it('Test the `getStaticProps` function', async () => {
	const result = await getStaticProps();

	expect(result).toBeDefined();
	expect(result.props).toBeDefined();
	expect(result.props.data).toBeDefined();
	expect(Array.isArray(result.props.data)).toEqual(true);
	expect((result.props.data as []).length).toEqual(0);
});
