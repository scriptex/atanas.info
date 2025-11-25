import type { FC } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Script from 'next/script';

import { getData, queryLastFM } from '@lib/mongodb';

import type { LastFMInsights } from '@insights/utils';

import { Animation, Icon, Layout, Lines, LinkedInBadge, Section, SocialMusic, Title } from '@components';

import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import { useNetworkState } from '@scripts/shared';
import type { SocialPageData } from '@scripts/types';

import socialMedia from '@data/lotties/social-media.json';
import type { SocialItem } from '@data/social';
import { socialItems } from '@data/social';

export const Social: FC<Readonly<InferGetStaticPropsType<typeof getStaticProps>>> = ({ data, funding, partners }) => {
	const online = useNetworkState();

	return (
		<Layout funding={funding} partners={partners}>
			<Title text="Social" />

			<Section
				additionalElements={
					<Animation className="c-section__animation" data={socialMedia} height={150} width={150} />
				}
				hasButton
				hasShell={false}
				id="social"
				title="Social"
			>
				<Script async defer src="//platform.twitter.com/widgets.js" />

				<Script async defer src="//profile.codersrank.io/widget/widget.js" />

				<Script async defer src="//widgets.sociablekit.com/instagram-feed/widget.js" />

				<Script async defer src="//widgets.sociablekit.com/linkedin-profile-posts/widget.js" />

				<Lines />

				<div className="c-section__entry c-section__entry--primary">
					<div className="o-shell">
						<div className="o-grid">
							<div className="o-grid__item xs-12 sm-6">
								<h3>LinkedIn Profile</h3>

								<LinkedInBadge />
							</div>

							{socialItems.map((item: SocialItem) => (
								<div className="o-grid__item xs-12 sm-6" key={item.index}>
									<h3>{item.title}</h3>

									{online ? (
										item.element
									) : (
										<Icon className="svg-disconnected" name="svg-disconnected " />
									)}
								</div>
							))}
						</div>
					</div>
				</div>

				<header className="c-section__header">
					<h2>Combined Social feed</h2>
				</header>

				<div className="elfsight-app-6509195d-9c2d-4028-aad0-bfe6cc2c0676" />

				{online && <SocialMusic data={data} />}
			</Section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<SocialPageData> = async () => ({
	props: {
		data: (await getData('Insights', queryLastFM)).props.data as LastFMInsights,
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	},
	revalidate: 86400
});

export default Social;
