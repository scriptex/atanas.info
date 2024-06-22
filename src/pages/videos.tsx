import { FC, useState } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Animation, Layout, Lines, Loader, Section, SectionNav, Title } from '@components';
import { getFundingFromCMS, getPartnersFromCMS, getVideosFromCMS, Video } from '@scripts/cms';
import { composeClassName } from '@scripts/shared';
import type { VideosPageData } from '@scripts/types';

import videoCamera from '@data/lotties/video-camera.json';

export const Videos: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ data, funding, partners }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<Layout funding={funding} partners={partners}>
			<Title text="Videos" />

			<Section
				additionalElements={
					<Animation className="c-section__animation" data={videoCamera} height={150} width={150} />
				}
				className="c-section--slides"
				hasButton
				id="videos"
				title="Videos"
			>
				<Lines />

				<SectionNav active={activeIndex} data={data} name="title" onClick={setActiveIndex} />

				<div className="c-section__body">
					{data.map((video: Video, index: number) => {
						const isYouTube = video.url.includes('youtube');

						return (
							<div
								className={composeClassName(
									'c-section__frame',
									isYouTube ? [] : ['c-section__frame-video'],
									activeIndex === index ? ['current'] : []
								)}
								key={video.index}
							>
								<Loader />

								{isYouTube ? (
									<iframe
										loading="lazy"
										src={`${video.url}/embed?start=false&loop=false&delayms=3000`}
										title={video.description}
									/>
								) : (
									<video
										controls
										preload="metadata"
										src={video.url.replace('.mov', '.mp4')}
										title={video.title}
									/> // NOSONAR
								)}
							</div>
						);
					})}
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
