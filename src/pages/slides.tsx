import type { FC } from 'react';
import { useState } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Animation, Layout, Loader, Section, SectionNav, Title } from '@components';

import type { Slide } from '@scripts/cms';
import { getFundingFromCMS, getPartnersFromCMS, getSlidesFromCMS } from '@scripts/cms';
import { composeClassName } from '@scripts/shared';
import type { SlidesPageData } from '@scripts/types';

import presentation from '@data/lotties/presentation.json';

export const Slides: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ data, funding, partners }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<Layout funding={funding} partners={partners}>
			<Title text="Slides" />

			<Section
				additionalElements={
					<Animation className="c-section__animation" data={presentation} height={150} width={150} />
				}
				className="fullsize-background"
				hasButton
				id="slides"
				style={{ backgroundImage: 'url(images/temp/presentation.jpg)' }}
				title="Slides"
			>
				<SectionNav active={activeIndex} data={data} name="title" onClick={setActiveIndex} />

				<div className="c-section__body">
					{data.map((slide: Slide, index: number) => (
						<div
							className={composeClassName(
								'c-section__frame',
								[],
								activeIndex === index ? ['current'] : []
							)}
							key={slide.title}
						>
							<Loader />

							<iframe
								loading="lazy"
								src={`${slide.url}/embed?start=false&loop=false&delayms=3000`}
								title={slide.description}
							/>
						</div>
					))}
				</div>
			</Section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<SlidesPageData> = async () => ({
	props: {
		data: await getSlidesFromCMS(),
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	},
	revalidate: 86400
});

export default Slides;
