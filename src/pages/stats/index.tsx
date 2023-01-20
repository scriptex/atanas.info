import Head from 'next/head';
import { format } from 'date-fns';
import { FC, useEffect, useRef } from 'react';

import { Ref } from '@scripts/shared';
import { statsItems } from '@data/projects';
import { Layout, Section, SectionGrid } from '@components';
import { addTitles, sectionStatsProps } from '@scripts/stats';

export const Stats: FC = () => {
	const timeout: Ref<NodeJS.Timeout> = useRef(null);

	useEffect(() => {
		timeout.current = setTimeout(() => {
			addTitles('.c-calendar--gitlab', (rect: SVGRectElement) => rect.getAttribute('title') || '');

			addTitles('.c-calendar--github', (rect: SVGRectElement) => {
				const { date, count } = rect.dataset;

				if (typeof date === 'undefined' || typeof count === 'undefined') {
					return '';
				}

				const formattedDate = format(new Date(date as string), 'EEEE MMM d, yyyy');

				return `${count} contribution${count === '1' ? '' : 's'} on ${formattedDate}`;
			});
		}, 3000);

		return () => {
			if (timeout.current !== null) {
				clearTimeout(timeout.current);
			}
		};
	}, []);

	return (
		<Layout>
			<Head>
				<title>Stats | Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
			</Head>

			<Section {...sectionStatsProps} hasShell={true}>
				<SectionGrid data={statsItems} />
			</Section>
		</Layout>
	);
};

export default Stats;
