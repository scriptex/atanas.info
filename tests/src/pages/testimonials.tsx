import { snapshotTest } from '@test-config/helpers';
import { Testimonials } from '@pages/testimonials';
import { ReactChildren } from '@scripts/types';
import { funding, partners, testimonials } from '@test-config/mocks';

jest.mock('swiper/react', () => ({
	Swiper: ({ children }: { children: ReactChildren }) => <div data-testid="swiper-testid">{children}</div>,
	SwiperSlide: ({ children }: { children: ReactChildren }) => <div data-testid="swiper-slide-testid">{children}</div>
}));

jest.mock('swiper/modules', () => ({
	Thumbs: () => null,
	Keyboard: () => null,
	Autoplay: () => null
}));

snapshotTest(
	() => <Testimonials data={testimonials} funding={funding} partners={partners} />,
	undefined,
	'Testimonials'
);

snapshotTest(() => <Testimonials data={[]} funding={funding} partners={partners} />, undefined, 'Testimonials');
