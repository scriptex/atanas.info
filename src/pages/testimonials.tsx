import type { FC } from 'react';
import { useState } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import { format } from 'date-fns/format';
import type { Swiper as SwiperInstance } from 'swiper';
import { Autoplay, EffectCoverflow, Keyboard, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Animation, ExternalLink, Layout, Lines, Section, Title } from '@components';

import { getFundingFromCMS, getPartnersFromCMS, getTestimonialsFromCMS } from '@scripts/cms';
import type { TestimonialsPageProps } from '@scripts/types';

import testimonials from '@data/lotties/testimonials.json';

import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/effect-cards';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
type DataProps = Pick<Props, 'data'>;

type ListProps = DataProps &
	Readonly<{
		swiper: null | SwiperInstance;
	}>;

type PaginationProps = DataProps &
	Readonly<{
		setSwiper: (swiper: null | SwiperInstance) => void;
	}>;

const List: FC<ListProps> = ({ data, swiper }) => (
	<Swiper
		autoplay={{ delay: 10000 }}
		centeredSlides
		className="c-testimonials__list"
		coverflowEffect={{
			depth: 100,
			modifier: 2,
			rotate: 0,
			slideShadows: true,
			stretch: 0
		}}
		effect="coverflow"
		grabCursor
		// eslint-disable-next-line react-hooks/purity
		initialSlide={Math.floor(Math.random() * data.length)}
		keyboard
		loop
		modules={[Thumbs, Keyboard, Autoplay, EffectCoverflow]}
		slidesPerView="auto"
		thumbs={{ swiper }}
	>
		{data.map(item => {
			const date = new Date(item.date);

			return (
				<SwiperSlide key={item.index}>
					<div className="c-testimonial">
						<ExternalLink className="c-testimonial__head" href={item.authorUrl}>
							<Image alt={item.authorName} height={80} src={item.image} width={80} />

							<h3>{item.authorName}</h3>

							<h4>{item.authorTitle}</h4>

							<p>{item.authorRelationship}</p>
						</ExternalLink>

						<div className="c-testimonial__body">
							<time dateTime={date.toISOString()}>{format(date, 'MMM do, yyyy')}</time>

							<div
								className="c-testimonial__content"
								dangerouslySetInnerHTML={{ __html: item.content }}
							/>
						</div>
					</div>
				</SwiperSlide>
			);
		})}
	</Swiper>
);

const Pagination: FC<PaginationProps> = ({ data, setSwiper }) => (
	<Swiper className="c-testimonials__pagination" modules={[Thumbs]} onSwiper={setSwiper} slidesPerView="auto">
		{data.map(item => (
			<SwiperSlide key={item.index}>
				<Image alt={item.authorName} height={80} src={item.image} width={80} />
			</SwiperSlide>
		))}
	</Swiper>
);

export const Testimonials: FC<Props> = ({ data, funding, partners }) => {
	const [swiper, setSwiper] = useState<null | SwiperInstance>(null);

	return (
		<Layout funding={funding} partners={partners}>
			<Title text="Testimonials" />

			<Section
				additionalElements={
					<Animation className="c-section__animation" data={testimonials} height={150} width={150} />
				}
				hasButton
				hasShell={false}
				id="testimonials"
				title="Testimonials"
			>
				<Lines />

				<div className="c-section__body">
					<List data={data} swiper={swiper} />

					<Pagination data={data} setSwiper={setSwiper} />
				</div>
			</Section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<TestimonialsPageProps> = async () => ({
	props: {
		data: await getTestimonialsFromCMS(),
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	},
	revalidate: 86400
});

export default Testimonials;
