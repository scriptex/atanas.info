import { useEffect, type FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import working from '@data/lotties/working.json';
import type { OccupationPageProps } from '@scripts/types';
import { Layout, Section, Animation, Title } from '@components';
import { getPartnersFromCMS, getOccupationFromCMS, getFundingFromCMS } from '@scripts/cms';

export const Occupation: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ data, funding, partners }) => {
	useEffect(() => {
		import('@scripts/force')
			.then(({ renderForceDirectedGraph }) => renderForceDirectedGraph('occupation-graph', data, 'occupation'))
			.catch(console.error);
	}, [data]);

	return (
		<Layout funding={funding} partners={partners}>
			<Title text="Occupation | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

			<Section
				id="occupation"
				title="Current occupation"
				hasButton
				className="bubbles"
				additionalElements={
					<Animation data={working} width={256} height={144} className="c-section__animation" />
				}
			>
				<div className="c-section__body">
					<div id="occupation-graph" className="c-section__container" />
				</div>
			</Section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<OccupationPageProps> = async () => ({
	props: {
		data: await getOccupationFromCMS(),
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	}
});

export default Occupation;
