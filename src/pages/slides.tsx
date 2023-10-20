import { FC, useState } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import presentation from '@data/lotties/presentation.json';
import { composeClassName } from '@scripts/shared';
import type { SlidesPageData } from '@scripts/types';
import { Loader, Section, Animation, SectionNav, Layout, Title } from '@components';
import { Slide, getFundingFromCMS, getPartnersFromCMS, getSlidesFromCMS } from '@scripts/cms';

export const Slides: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ data, funding, partners }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<Layout funding={funding} partners={partners}>
			<Title text="Slides | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

			<Section
				id="slides"
				style={{ backgroundImage: 'url(images/temp/presentation.jpg)' }}
				title="Slides"
				className="fullsize-background"
				hasButton
				additionalElements={
					<Animation data={presentation} width={150} height={150} className="c-section__animation" />
				}
			>
				<SectionNav name="title" data={data} active={activeIndex} onClick={setActiveIndex} />

				<div className="c-section__body">
					{data.map((slide: Slide, index: number) => (
						<div
							key={slide.title}
							className={composeClassName(
								'c-section__frame',
								[],
								activeIndex === index ? ['current'] : []
							)}
						>
							<Loader />

							<iframe
								src={`${slide.url}/embed?start=false&loop=false&delayms=3000`}
								title={slide.description}
								loading="lazy"
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
	}
});

export default Slides;
