import * as React from 'react';
import Slider from 'react-slick';

import { ExtendedProject } from '../../data/projects';
import { Loader, ExternalLink } from '..';

interface Props {
	data: ExtendedProject[];
	className?: string;
	slidesToShow: number;
}

export const PortfolioSliders: React.FC<Readonly<Props>> = ({ data, className, slidesToShow }: Props) => (
	<div className="c-section__sliders">
		{data.map((app: ExtendedProject, i: number) => (
			<div className={['c-section__slider', className].filter(Boolean).join(' ')} key={i}>
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
					infinite={true}
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
							<img src={`images/temp/${img}`} alt={`${app.title} screenshot ${j + 1}`} />
						</div>
					))}
				</Slider>
			</div>
		))}
	</div>
);

export default PortfolioSliders;
