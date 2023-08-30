import { FC, useState } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import presentation from '@data/lotties/presentation.json';
import { composeClassName } from '@scripts/shared';
import { Slide, getSlidesFromCMS } from '@scripts/cms';
import { Loader, Section, Animation, SectionNav, Layout, Title } from '@components';

export const Slides: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<Layout>
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

export const getStaticProps: GetStaticProps<{ data: Slide[] }> = async () => ({
	props: {
		data: await getSlidesFromCMS()
	}
});

export default Slides;
