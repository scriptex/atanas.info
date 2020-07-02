import * as React from 'react';

import projectsList from '../../scripts/projects-list.json';
import { Project, projects } from '../../scripts/projects';
import { Section, ExternalLink } from '..';

export const SectionPortfolio: React.FunctionComponent = () => (
	<Section id="portfolio" hasButton={true}>
		<h1>Portfolio</h1>

		<div className="c-section__body">
			{((projectsList as unknown) as Project[]).map((project: Project, index: number) => {
				const match = projects.find((item: Project) => item.title === project.title);

				return (
					<ExternalLink key={index} href={project.url} className={project.url ? '' : 'disabled'}>
						<div>
							<strong>{project.title}</strong>

							<span>
								<small>Technologies:</small>
								{project.description}
							</span>
						</div>

						<object data={project.image} type="image/png" title={project.title} width="600">
							<img width="600" loading="lazy" src={match?.image} alt={match?.title} />
						</object>
					</ExternalLink>
				);
			})}
		</div>
	</Section>
);

export default SectionPortfolio;
