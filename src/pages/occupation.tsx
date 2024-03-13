import { type FC, useEffect } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Animation, Layout, Section, Title } from '@components';
import { getFundingFromCMS, getOccupationFromCMS, getPartnersFromCMS } from '@scripts/cms';
import type { OccupationPageProps } from '@scripts/types';

import working from '@data/lotties/working.json';

export const Occupation: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ data, funding, partners }) => {
	useEffect(() => {
		import('@scripts/force')
			.then(({ renderForceDirectedGraph }) => renderForceDirectedGraph('occupation-graph', data, 'occupation'))
			.catch(console.error);
	}, [data]);

	return (
		<Layout funding={funding} partners={partners}>
			<Title text="Occupation" />

			<Section
				additionalElements={
					<Animation className="c-section__animation" data={working} height={144} width={256} />
				}
				className="bubbles"
				hasButton
				id="occupation"
				title="Current occupation"
			>
				<div className="c-section__body">
					<div className="c-section__container" id="occupation-graph" />
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
