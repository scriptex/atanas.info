import type { FC } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import { Animation, Icon, Layout, Section, Title } from '@components';
import { BioEntry, getBioFromCMS, getFundingFromCMS, getOwnerDetailsFromCMS, getPartnersFromCMS } from '@scripts/cms';
import { useNetworkState } from '@scripts/shared';
import type { AboutPageProps } from '@scripts/types';

import book from '@data/lotties/book.json';

export const About: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ bio, funding, owner, partners }) => {
	const online = useNetworkState();

	return (
		<Layout funding={funding} partners={partners}>
			<Title text="About" />

			<Section
				additionalElements={<Animation className="c-section__animation" data={book} height={200} width={200} />}
				className="c-article fullsize-background"
				hasButton
				id="about"
				style={{ backgroundImage: 'url(/images/temp/desktop.jpg)' }}
				title="About me"
			>
				{online ? (
					<Image alt={owner.alt} height={240} loading="lazy" src={owner.image} width={240} />
				) : (
					<Icon className="svg-disconnected" height={240} name="svg-disconnected " width={240} />
				)}

				{bio.map((item: BioEntry, index: number) => (
					<div className="c-article__block" key={item.title}>
						<h3>{item.title}</h3>

						{index === 0 && <span className="c-article__block-emoji">🎉 🎉 🎉</span>}

						<div dangerouslySetInnerHTML={{ __html: item.content }} />

						{index === 0 && <span className="c-article__block-emoji">🎉 🎉 🎉</span>}
					</div>
				))}
			</Section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => ({
	props: {
		bio: await getBioFromCMS(),
		funding: await getFundingFromCMS(),
		owner: await getOwnerDetailsFromCMS(),
		partners: await getPartnersFromCMS()
	}
});

export default About;
