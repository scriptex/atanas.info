import Slider from 'react-slick';
import type { FC } from 'react';

import { ExtendedProject } from '@data/projects';
import { composeClassName } from '@scripts/shared';
import { Loader, ExternalLink } from '@components';

type Props = {
	data: ExtendedProject[];
	className?: string;
	slidesToShow: number;
};

export const PortfolioSliders: FC<Readonly<Props>> = ({ data, className, slidesToShow }: Props) => (
	<div className="c-section__sliders">
		{data.map((app: ExtendedProject, i: number) => (
			<div className={composeClassName('c-section__slider', [], [className])} key={i}>
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
						<div key={j}>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={`/images/temp/${img}`} alt={`${app.title} screenshot ${j + 1}`} loading="lazy" />
						</div>
					))}
				</Slider>
			</div>
		))}
	</div>
);

export default PortfolioSliders;
