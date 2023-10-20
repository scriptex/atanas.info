import { Certificates } from '@pages/certificates';
import { snapshotTest } from '@test-config/helpers';
import { certificates, funding, partners } from '@test-config/mocks';

snapshotTest(
	() => <Certificates data={certificates} funding={funding} partners={partners} />,
	undefined,
	'Certificates'
);
