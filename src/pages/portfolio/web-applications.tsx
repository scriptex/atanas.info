/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import { FC, useState, useEffect } from 'react';

import { Routes } from '@data/routes';
import { WebProject } from '@data/projects';
import { portfolioSectionProps } from '.';
import { useNetworkState, composeClassName } from '@scripts/shared';
import { getData, MongoDBProps, queryScreenshots } from '@lib/mongodb';
import { Icon, Layout, Loader, Section, SectionNav, ExternalLink } from '@components';

type Props = {
	data: WebProject[];
};

const splitIntoChunks = (data: WebProject[], size = 10): WebProject[][] => {
	return [...Array(Math.ceil(data.length / size))].map((_, i) => data.slice(size * i, size + size * i));
};

export const PortfolioWebApps: FC<Readonly<Props>> = ({ data = [] }: Props) => {
	const online = useNetworkState();
	const [items, setItems] = useState<WebProject[][] | undefined>();
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		setItems(splitIntoChunks(data));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return !items ? null : (
		<Layout>
			<Head>
				<title>Web Applications | Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
			</Head>

			<Section
				{...portfolioSectionProps}
				actions={
					<Link href={Routes.PORTFOLIO} className="c-btn">
						Go back
					</Link>
				}
			>
				<h3>Web applications</h3>

				<div className="c-section__body">
					{items[current]?.map((project: WebProject) => (
						<ExternalLink
							key={project.title}
							href={project.url}
							className={composeClassName('', [], [!project.url ? 'disabled' : ''])}
						>
							<Loader />

							{online || !project.url ? (
								<img width="600" loading="lazy" src={project.image} alt={project.title} />
							) : (
								<Icon name="svg-disconnected " className="svg-disconnected" />
							)}

							<section>
								<strong>{project.title}</strong>

								<span>
									<small>Technologies used:</small>
									<br />
									{project.description}
								</span>
							</section>
						</ExternalLink>
					))}
				</div>

				<SectionNav
					data={items.map((_, i) => ({
						url: '',
						title: (i + 1).toString(),
						description: ''
					}))}
					name="title"
					small
					active={current}
					onClick={setCurrent}
				/>
			</Section>
		</Layout>
	);
};

export const getStaticProps = async (): Promise<MongoDBProps<unknown[]>> => getData('Screenshots', queryScreenshots);

export default PortfolioWebApps;
