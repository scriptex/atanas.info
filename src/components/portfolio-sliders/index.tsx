import type { FC } from 'react';

import Slider from 'react-slick';

import Image from 'next/image';

import { ExternalLink, Loader } from '@components';
import { ExtendedProject } from '@data/projects';
import { composeClassName } from '@scripts/shared';

type Props = {
	className?: string;
	data: ExtendedProject[];
	folder: string;
	slidesToShow: number;
};

export const PortfolioSliders: FC<Readonly<Props>> = ({ className, data, folder, slidesToShow }: Props) => (
	<div className="c-section__sliders">
		{data.map((app: ExtendedProject) => (
			<div className={composeClassName('c-section__slider', [], [className])} key={app.index}>
				<Loader />

				<ExternalLink href={app.url}>
					<h4>{app.title}</h4>

					<p>{app.description}</p>

					<code>
						Technologies used:
						<br />
						{app.details}
					</code>
				</ExternalLink>

				<Slider
					autoplaySpeed={5000}
					dots={false}
					infinite
					responsive={
						!app.adjustable
							? []
							: [
									{
										breakpoint: 768,
										settings: {
											slidesToShow: 1
										}
									}
								]
					}
					slidesToScroll={1}
					slidesToShow={slidesToShow}
					speed={500}
				>
					{app.images.map((img: string, j: number) => (
						<div key={img}>
							<Image
								alt={`${app.title} screenshot ${j + 1}`}
								height={app.imageHeight}
								loading="lazy"
								src={`/images/${folder}/${img}`}
								width={app.imageWidth}
							/>
						</div>
					))}
				</Slider>
			</div>
		))}
	</div>
);

export default PortfolioSliders;
