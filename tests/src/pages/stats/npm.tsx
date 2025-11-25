import type { ComponentProps } from 'react';

import { NPMStats } from '@pages/stats/npm';

import type { Package, WithError, WithSum } from '@scripts/types';

import { snapshotTest } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';

type Data = Record<string, Package> & WithSum & WithError;

const data = {
	'test-package1': {
		author: 'test',
		description: 'A testing package',
		downloads: 1431,
		homepage: 'https://www.npmjs.com/package/test-package1',
		license: 'MIT',
		name: 'test-package1',
		version: '1.0.0'
	},
	'test-package2': {
		author: 'test,another',
		description: 'A testing package',
		downloads: 1431,
		homepage: 'https://www.npmjs.com/package/test-package2',
		license: 'MIT',
		name: 'test-package2',
		version: '1.0.0'
	}
} as unknown as Data;

jest.mock('@lib/mongodb', () => ({
	getData: jest.fn(() => Promise.resolve({ props: { data: [] } }))
}));

snapshotTest(
	() => <NPMStats data={{ ...data, sum: 1876223 } as unknown as Data} funding={funding} partners={partners} />,
	undefined,
	'NPMStats'
);

snapshotTest(() => <NPMStats data={data} funding={funding} partners={partners} />, undefined, 'NPMStats');

snapshotTest(
	() => <NPMStats data={{} as ComponentProps<typeof NPMStats>['data']} funding={funding} partners={partners} />,
	undefined,
	'NPMStats'
);
