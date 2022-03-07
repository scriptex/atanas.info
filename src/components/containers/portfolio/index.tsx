import * as React from 'react';
import Slider from 'react-slick';

import projectsList from '../../../data/projects-list.json';
import { Button, Loader, Section, ExternalLink } from '../..';
import { Project, projects, MobileApp, mobileApps } from '../../../data/projects';

const webApps = projectsList as unknown as Project[];

// codebeat:disable[ABC,LOC,BLOCK_NESTING]
export const SectionPortfolio: React.FunctionComponent = () => {
	const [itemsToShow, setItemsToShow] = React.useState(7);

	return (
		<Section
			id="portfolio"
			actions={
				itemsToShow >= webApps.length ? null : (
					<Button onClick={() => setItemsToShow(itemsToShow + 6)}>Show more</Button>
				)
			}
			hasButton={true}
		>
			<h1>Portfolio</h1>

			<h2>Mobile applications</h2>

			<div className="c-section__sliders">
				{mobileApps.map((app: MobileApp, i: number) => (
					<div className="c-section__slider" key={i}>
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
							slidesToShow={2}
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

			<h2>Web applications</h2>

			<div className="c-section__body">
				{webApps.map((project: Project, index: number) => {
					const match = projects.find((item: Project) => item.title === project.title);
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

							<object data={project.image} type="image/png" title={project.title} width="600">
								<img width="600" loading="lazy" src={match?.image} alt={match?.title} />
							</object>
						</ExternalLink>
					);
				})}
			</div>
		</Section>
	);
};
// codebeat:enable[ABC,LOC,BLOCK_NESTING]

export default SectionPortfolio;
