import Image from 'next/image';
import Slider from 'react-slick';
import type { FC } from 'react';

import { ExtendedProject } from '@data/projects';
import { composeClassName } from '@scripts/shared';
import { Loader, ExternalLink } from '@components';

type Props = {
	data: ExtendedProject[];
	folder: string;
	className?: string;
	slidesToShow: number;
};

export const PortfolioSliders: FC<Readonly<Props>> = ({ data, folder, className, slidesToShow }: Props) => (
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
					dots={false}
					speed={500}
					infinite
					autoplaySpeed={5000}
					slidesToShow={slidesToShow}
					slidesToScroll={1}
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
				>
					{app.images.map((img: string, j: number) => (
						<div key={img}>
							<Image
								src={`/images/${folder}/${img}`}
								alt={`${app.title} screenshot ${j + 1}`}
								width={app.imageWidth}
								height={app.imageHeight}
								loading="lazy"
							/>
						</div>
					))}
				</Slider>
			</div>
		))}
	</div>
);

export default PortfolioSliders;
