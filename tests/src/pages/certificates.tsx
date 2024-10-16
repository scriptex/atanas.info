import { Certificates } from '@pages/certificates';
import { snapshotTest } from '@test-config/helpers';
import { badges, certificates, funding, partners } from '@test-config/mocks';

snapshotTest(
	() => <Certificates badges={badges} data={certificates} funding={funding} partners={partners} />,
	undefined,
	'Certificates'
);
