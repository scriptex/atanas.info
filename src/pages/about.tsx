import Image from 'next/image';
import type { FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import book from '@data/lotties/book.json';
import { useNetworkState } from '@scripts/shared';
import type { AboutPageProps } from '@scripts/types';
import { Icon, Title, Layout, Section, Animation } from '@components';
import { BioEntry, getBioFromCMS, getOwnerDetailsFromCMS, getPartnersFromCMS } from '@scripts/cms';

export const About: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ bio, owner, partners }) => {
	const online = useNetworkState();

	return (
		<Layout partners={partners}>
			<Title text="About | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

			<Section
				id="about"
				style={{ backgroundImage: 'url(/images/temp/desktop.jpg)' }}
				title="About me"
				className="c-article fullsize-background"
				hasButton
				additionalElements={<Animation data={book} width={200} height={200} className="c-section__animation" />}
			>
				{online ? (
					<Image alt={owner.alt} src={owner.image} width={240} height={240} loading="lazy" />
				) : (
					<Icon name="svg-disconnected " className="svg-disconnected" width={240} height={240} />
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
		owner: await getOwnerDetailsFromCMS(),
		partners: await getPartnersFromCMS()
	}
});

export default About;
