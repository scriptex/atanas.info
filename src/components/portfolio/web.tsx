import * as React from 'react';

import webApps from '../../data/projects-list.json';
import { WebProject } from '../../data/projects';
import { composeClassName } from '../../scripts/shared';
import { Loader, ExternalLink } from '..';

interface Props {
	itemsToShow: number;
}

export const PortfolioWebApps: React.FC<Readonly<Props>> = ({ itemsToShow }: Props) => (
	<>
		<h3>Web applications</h3>

		<div className="c-section__body">
			{webApps.map((project: WebProject, index: number) => (
				<ExternalLink
					key={index}
					href={project.url}
					className={composeClassName(
						'',
						[],
						[!project.url ? 'disabled' : '', index > itemsToShow ? 'is--hidden' : '']
					)}
				>
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
			))}
		</div>
	</>
);

export default PortfolioWebApps;
