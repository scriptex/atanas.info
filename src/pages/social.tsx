import Script from 'next/script';
import type { FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import socialMedia from '@data/lotties/social-media.json';
import { useNetworkState } from '@scripts/shared';
import { getPartnersFromCMS } from '@scripts/cms';
import type { LastFMInsights } from '@insights/utils';
import type { SocialPageData } from '@scripts/types';
import { getData, queryLastFM } from '@lib/mongodb';
import { SocialItem, socialItems } from '@data/social';
import { Icon, Lines, Layout, Section, Animation, SocialMusic, LinkedInBadge, Title } from '@components';

export const Social: FC<Readonly<InferGetStaticPropsType<typeof getStaticProps>>> = ({ data, partners }) => {
	const online = useNetworkState();

	return (
		<Layout partners={partners}>
			<Title text="Social | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

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

							{socialItems.map((item: SocialItem) => (
								<div key={item.index} className="o-grid__item xs-12 sm-6">
									<h3>{item.title}</h3>

									{online ? (
										item.element
									) : (
										<Icon name="svg-disconnected " className="svg-disconnected" />
									)}
								</div>
							))}
						</div>
					</div>
				</div>

				<header className="c-section__header">
					<h2>Social feed</h2>
				</header>

				<Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer />

				<div className="elfsight-app-6509195d-9c2d-4028-aad0-bfe6cc2c0676" />

				{online && <SocialMusic data={data} />}
			</Section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<SocialPageData> = async () => ({
	props: {
		data: (await getData('Insights', queryLastFM)).props.data as LastFMInsights,
		partners: await getPartnersFromCMS()
	}
});

export default Social;
