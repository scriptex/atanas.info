import * as React from 'react';

import socialMedia from '../../data/lotties/social-media.json';
import { SocialItem, socialItems } from '../../data/social';
import { Lines, Section, Animation, SocialMusic } from '..';
import { useScript, isPrerendering, waitForElement } from '../../scripts/shared';

export const Social: React.FC = () => {
	if (!isPrerendering) {
		useScript('//profile.codersrank.io/widget/widget.js');
		useScript('//platform.linkedin.com/badges/js/profile.js');
	}

	React.useEffect(() => {
		waitForElement('.profile-badge').then((badge: Element | null) => {
			if (!badge) {
				return;
			}

			const parent = badge.parentNode;
			const badgeLink = parent?.querySelector('link');

			if (badgeLink) {
				parent?.removeChild(badgeLink);
			}
		});
	}, []);

	return (
		<Section
			id="social"
			title="Social"
			hasShell={false}
			hasButton
			additionalElements={
				<Animation data={socialMedia} width={150} height={150} className="c-section__animation" />
			}
		>
			<Lines />

			<div className="c-section__entry c-section__entry--primary">
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
