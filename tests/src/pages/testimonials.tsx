import { Testimonials } from '@pages/testimonials';

import { snapshotTest } from '@test-config/helpers';
import { funding, partners, testimonials } from '@test-config/mocks';

snapshotTest(
	() => <Testimonials data={testimonials} funding={funding} partners={partners} />,
	undefined,
	'Testimonials'
);

snapshotTest(() => <Testimonials data={[]} funding={funding} partners={partners} />, undefined, 'Testimonials');
