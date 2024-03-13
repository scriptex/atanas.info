import { FC, useState } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import videoCamera from '@data/lotties/video-camera.json';
import { composeClassName } from '@scripts/shared';
import type { VideosPageData } from '@scripts/types';
import { Video, getFundingFromCMS, getPartnersFromCMS, getVideosFromCMS } from '@scripts/cms';
import { Lines, Loader, Layout, Section, Animation, SectionNav, Title } from '@components';

export const Videos: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ data, funding, partners }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<Layout funding={funding} partners={partners}>
			<Title text="Videos" />

			<Section
				id="videos"
				title="Videos"
				hasButton
				className="c-section--slides"
				additionalElements={
					<Animation data={videoCamera} width={150} height={150} className="c-section__animation" />
				}
			>
				<Lines />

				<SectionNav name="title" data={data} active={activeIndex} onClick={setActiveIndex} />

				<div className="c-section__body">
					{data.map((presentation: Video, index: number) => (
						<div
							key={presentation.index}
							className={composeClassName(
								'c-section__frame',
								[],
								activeIndex === index ? ['current'] : []
							)}
						>
							<Loader />

							<iframe
								src={`${presentation.url}/embed?start=false&loop=false&delayms=3000`}
								title={presentation.description}
								loading="lazy"
							/>
						</div>
					))}
				</div>
			</Section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<VideosPageData> = async () => ({
	props: {
		data: await getVideosFromCMS(),
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	}
});

export default Videos;
