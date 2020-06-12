import * as React from 'react';

import { Section, ExternalLink } from '..';
import { Project } from '../../assets/scripts/projects';
import projects from '../../assets/scripts/projects-list.json';

export const SectionPortfolio: React.FunctionComponent = () => (
	<Section id="portfolio" hasButton={true}>
		<h1>Portfolio</h1>

		<div className="c-section__body">
			{((projects as unknown) as Project[]).map((project: Project, index: number) => (
				<ExternalLink
					key={index}
					href={project.url}
					style={{ backgroundImage: `url(${project.image})` }}
					className={project.url ? '' : 'disabled'}
				>
					<div>
						<strong>{project.title}</strong>

						<span>
							<small>Technologies:</small>
							{project.description}
						</span>
					</div>
				</ExternalLink>
			))}
		</div>
	</Section>
);

export default SectionPortfolio;
