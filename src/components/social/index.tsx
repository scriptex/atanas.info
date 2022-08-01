import * as React from 'react';

import socialMedia from '../../data/lotties/social-media.json';
import { SocialItem, socialItems } from '../../data/social';
import { useScript, isPrerendering } from '../../scripts/shared';
import { Lines, Section, Animation, SocialMusic } from '..';

export const Social: React.FC = () => {
	if (!isPrerendering) {
		useScript('https://profile.codersrank.io/widget/widget.js');
		useScript('https://platform.linkedin.com/badges/js/profile.js', true);
	}

	React.useEffect(() => {
		document.documentElement.classList.add('page-social');

		return () => {
			document.documentElement.classList.remove('page-social');
		};
	});

	return (
		<Section
			id="social"
			title="Social"
			hasShell={false}
			hasButton={true}
			additionalElements={
				<Animation data={socialMedia} width={150} height={150} className="c-section__animation" />
			}
		>
			<Lines />

			<div className="c-section__entry">
				<div className="o-shell">
					<div className="o-grid">
						{socialItems.map((item: SocialItem, i) => (
							<div key={i} className="o-grid__item xs-12 sm-6">
								<h3>{item.title}</h3>

								{isPrerendering ? null : item.element}
							</div>
						))}
					</div>
				</div>
			</div>

			<SocialMusic />
		</Section>
	);
};

export default Social;
