import * as React from 'react';

import projects from '../../scripts/projects-list.json';
import { Project } from '../../scripts/projects';
import { Section, ExternalLink } from '..';

export const SectionPortfolio: React.FunctionComponent = () => (
	<Section id="portfolio" hasButton={true}>
		<h1>Portfolio</h1>

		<div className="c-section__body">
			{((projects as unknown) as Project[]).map((project: Project, index: number) => (
				<ExternalLink key={index} href={project.url} className={project.url ? '' : 'disabled'}>
					<div>
						<strong>{project.title}</strong>

						<span>
							<small>Technologies:</small>
							{project.description}
						</span>
					</div>

					<img src={project.image} alt={project.title} width="600" loading="lazy" />
				</ExternalLink>
			))}
		</div>
	</Section>
);

export default SectionPortfolio;
