import type { ComponentProps } from 'react';
import type { InferGetStaticPropsType } from 'next';

import { partners } from '@test-config/mocks';
import { NPMStats } from '@pages/stats/npm';
import { snapshotTest } from '@test-config/helpers';
import type { Package, WithError, WithSum } from '@scripts/types';

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

snapshotTest(
	() => <NPMStats data={{ ...data, sum: 1876223 } as unknown as Data} partners={partners} />,
	undefined,
	'NPMStats'
);

snapshotTest(() => <NPMStats data={data} partners={partners} />, undefined, 'NPMStats');

snapshotTest(
	() => <NPMStats data={{} as ComponentProps<typeof NPMStats>['data']} partners={partners} />,
	undefined,
	'NPMStats'
);
