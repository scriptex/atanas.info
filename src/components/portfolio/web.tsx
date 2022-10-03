import * as React from 'react';
import { Link } from 'react-router-dom';

import webApps from '../../data/projects-list.json';
import { Routes } from '../../data/routes';
import { WebProject } from '../../data/projects';
import { composeClassName } from '../../scripts/shared';
import { portfolioSectionProps } from '.';
import { Button, Loader, Section, ExternalLink } from '..';

export const PortfolioWebApps: React.FC = () => {
	const [itemsToShow, setItemsToShow] = React.useState(7);

	return (
		<Section
			{...portfolioSectionProps}
			actions={
				<>
					<Link to={Routes.PORTFOLIO} className="c-btn">
						Go back
					</Link>

					<br className="visible-xs-block" />

					{itemsToShow >= webApps.length ? null : (
						<Button onClick={() => setItemsToShow(itemsToShow + 6)}>Show more</Button>
					)}
				</>
			}
		>
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
		</Section>
	);
};

export default PortfolioWebApps;
