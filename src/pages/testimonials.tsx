import Image from 'next/image';
import format from 'date-fns/format';
import { useState, FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Keyboard, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import testimonials from '@data/lotties/testimonials.json';
import type { TestimonialsPageProps } from '@scripts/types';
import { Lines, Title, Layout, Section, Animation, ExternalLink } from '@components';
import { getFundingFromCMS, getPartnersFromCMS, getTestimonialsFromCMS } from '@scripts/cms';

import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/effect-cards';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
type DataProps = Pick<Props, 'data'>;

type ListProps = DataProps &
	Readonly<{
		swiper: SwiperInstance | null;
	}>;

type PaginationProps = DataProps &
	Readonly<{
		setSwiper: (swiper: SwiperInstance | null) => void;
	}>;

const List: FC<ListProps> = ({ data, swiper }) => (
	<Swiper
		thumbs={{ swiper }}
		modules={[Thumbs, Keyboard, Autoplay]}
		autoplay={{ delay: 10000 }}
		keyboard
		className="c-testimonials__list"
		autoHeight
	>
		{data.map(item => {
			const date = new Date(item.date);

			return (
				<SwiperSlide key={item.index}>
					<div className="c-testimonial">
						<ExternalLink href={item.authorUrl} className="c-testimonial__head">
							<Image src={item.authorImage} alt={item.authorName} width={80} height={80} />

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
	<Swiper modules={[Thumbs]} onSwiper={setSwiper} className="c-testimonials__pagination" slidesPerView="auto">
		{data.map(item => (
			<SwiperSlide key={item.index}>
				<Image src={item.authorImage} alt={item.authorName} width={80} height={80} />
			</SwiperSlide>
		))}
	</Swiper>
);

export const Testimonials: FC<Props> = ({ data, funding, partners }) => {
	const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

	return (
		<Layout funding={funding} partners={partners}>
			<Title text="Testimonials | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

			<Section
				id="testimonials"
				title="Testimonials"
				hasButton
				additionalElements={
					<Animation data={testimonials} width={150} height={150} className="c-section__animation" />
				}
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
	}
});

export default Testimonials;
