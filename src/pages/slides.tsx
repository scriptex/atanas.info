import { FC, useState } from 'react';

import presentation from '@data/lotties/presentation.json';
import { Slide, slides } from '@data/slides';
import { composeClassName } from '@scripts/shared';
import { Loader, Section, Animation, SectionNav, Layout } from '@components';

export const Slides: FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<Layout>
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
				<SectionNav name="title" data={slides} active={activeIndex} onClick={setActiveIndex} />

				<div className="c-section__body">
					{slides.map((slide: Slide, index: number) => (
						<div
							key={index}
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

export default Slides;
