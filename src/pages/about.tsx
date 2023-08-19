import Image from 'next/image';
import type { FC } from 'react';
import type { InferGetServerSidePropsType } from 'next';

import book from '@data/lotties/book.json';
import { cms } from '@scripts/cms';
import { useNetworkState } from '@scripts/shared';
import { Layout, Section, Animation, Icon, Title } from '@components';

export const About: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ bio }) => {
	const online = useNetworkState();

	return (
		<Layout>
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
					<Image
						src="/images/temp/atanas.jpg"
						alt="Atanas Atanasov smiling dressed in a green t-shirt"
						width={240}
						height={240}
						loading="lazy"
					/>
				) : (
					<Icon name="svg-disconnected " className="svg-disconnected" width={240} height={240} />
				)}

				{bio.map((item, index) => (
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

export const getServerSideProps = async () => ({
	props: {
		bio: await cms('bio')
	}
});

export default About;
