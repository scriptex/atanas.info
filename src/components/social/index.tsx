import * as React from 'react';

import socialMedia from '@data/lotties/social-media.json';
import { useScript } from '@scripts/shared';
import { SocialItem, socialItems } from '@data/social';
import { Lines, Section, Animation, SocialMusic, LinkedInBadge } from '@components';

export const Social: React.FC = () => {
	useScript('//platform.twitter.com/widgets.js');
	useScript('//profile.codersrank.io/widget/widget.js');

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
						<div className="o-grid__item xs-12 sm-6">
							<h3>LinkedIn Profile</h3>

							<LinkedInBadge />
						</div>

						{socialItems.map((item: SocialItem, i) => (
							<div key={i} className="o-grid__item xs-12 sm-6">
								<h3>{item.title}</h3>

								{item.element}
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
