/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Modal from 'react-modal';
import { FC, useState } from 'react';

import { Routes } from '@data/routes';
import { emailTemplates } from '@data/projects';
import { portfolioSectionProps } from '.';
import { Button, Layout, Section } from '@components';

type Props = {
	img: string;
};

export const PortfolioEmailTemplate: FC<Readonly<Props>> = ({ img }: Props) => {
	const [open, setOpen] = useState(false);

	const toggle = () => setOpen(!open);

	return (
		<>
			<button onClick={toggle}>
				<img src={img} alt="" />
			</button>

			<Modal isOpen={open} onRequestClose={toggle} ariaHideApp={false}>
				<img src={img} alt="" />
			</Modal>
		</>
	);
};

export const PortfolioEmailTemplates: FC = () => (
	<Layout>
		<Head>
			<title>Email Templates | Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
		</Head>

		<Section
			{...portfolioSectionProps}
			actions={
				<Button href={Routes.PORTFOLIO} type="link">
					Go back
				</Button>
			}
		>
			<h3>Email Templates</h3>

			<div className="c-email-templates">
				{emailTemplates.map(img => (
					<PortfolioEmailTemplate img={img} key={img} />
				))}
			</div>
		</Section>
	</Layout>
);

export default PortfolioEmailTemplates;
