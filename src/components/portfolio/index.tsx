import * as React from 'react';
import Slider from 'react-slick';

import webApps from '../../data/projects-list.json';
import { Button, Loader, Section, ExternalLink } from '..';
import { WebProject, ExtendedProject, mobileApps, automotiveProjects } from '../../data/projects';

interface PortfolioSlidersProps {
	data: ExtendedProject[];
	className?: string;
	slidesToShow: number;
}

export const PortfolioSliders: React.FC<Readonly<PortfolioSlidersProps>> = ({
	data,
	className,
	slidesToShow
}: PortfolioSlidersProps) => {
	const classNames = React.useMemo(() => ['c-section__slider', className].filter(Boolean), []);

	return (
		<div className="c-section__sliders">
			{data.map((app: ExtendedProject, i: number) => (
				<div className={classNames.join(' ')} key={i}>
					<Loader />

					<ExternalLink href={app.url}>
						<h3>{app.title}</h3>

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
};

export const MobileApps: React.FC = () => (
	<>
		<h3>Mobile applications</h3>

		<PortfolioSliders data={mobileApps} slidesToShow={2} />
	</>
);

export const AutomotiveProjects: React.FC = () => (
	<>
		<h3>Automotive projects</h3>

		<PortfolioSliders data={automotiveProjects} slidesToShow={1} className="c-section__slider--fullwidth" />
	</>
);

interface WebAppsProps {
	itemsToShow: number;
}

export const WebApps: React.FC<Readonly<WebAppsProps>> = ({ itemsToShow }: WebAppsProps) => (
	<>
		<h3>Web applications</h3>

		<div className="c-section__body">
			{webApps.map((project: WebProject, index: number) => {
				const classNames = [];

				if (!project.url) {
					classNames.push('disabled');
				}

				if (index > itemsToShow) {
					classNames.push('is--hidden');
				}

				return (
					<ExternalLink key={index} href={project.url} className={classNames.join(' ')}>
						<Loader />

						<section>
							<strong>{project.title}</strong>

							<span>
								<small>Technologies used:</small>
								<br />
								{project.description}
							</span>
						</section>

						<img width="600" loading="lazy" src={project.image} alt={project.title} />
					</ExternalLink>
				);
			})}
		</div>
	</>
);

export const SectionPortfolio: React.FC = () => {
	const [itemsToShow, setItemsToShow] = React.useState(7);

	return (
		<Section
			id="portfolio"
			title="Portfolio"
			actions={
				itemsToShow >= webApps.length ? null : (
					<Button onClick={() => setItemsToShow(itemsToShow + 6)}>Show more</Button>
				)
			}
			hasButton={true}
		>
			<MobileApps />

			<AutomotiveProjects />

			<WebApps itemsToShow={itemsToShow} />
		</Section>
	);
};

export default SectionPortfolio;
