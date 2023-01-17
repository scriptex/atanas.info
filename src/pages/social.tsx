import Head from 'next/head';
import Script from 'next/script';
import type { FC } from 'react';

import socialMedia from '@data/lotties/social-media.json';
import { SocialItem, socialItems } from '@data/social';
import { Lines, Layout, Section, Animation, SocialMusic, LinkedInBadge } from '@components';

export const Social: FC = () => (
	<Layout>
		<Head>
			<title>Social | Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
		</Head>

		<Section
			id="social"
			title="Social"
			hasShell={false}
			hasButton
			additionalElements={
				<Animation data={socialMedia} width={150} height={150} className="c-section__animation" />
			}
		>
			<Script src="//platform.twitter.com/widgets.js" async defer />

			<Script src="//profile.codersrank.io/widget/widget.js" async defer />

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
	</Layout>
);

export default Social;
