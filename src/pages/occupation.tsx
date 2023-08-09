'use client';

import Head from 'next/head';
import { useEffect, type FC } from 'react';

import working from '@data/lotties/working.json';
import { occupation } from '@data/occupation';
import { Layout, Section, Animation } from '@components';

export const Occupation: FC = () => {
	useEffect(() => {
		import('@scripts/force')
			.then(({ renderForceDirectedGraph }) =>
				renderForceDirectedGraph('occupation-graph', occupation, 'occupation')
			)
			.catch(console.error);
	}, []);

	return (
		<Layout>
			<Head>
				<title>Occupation | Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
			</Head>

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

export default Occupation;
