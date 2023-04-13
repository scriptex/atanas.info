/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Modal from 'react-modal';
import { FC, useState } from 'react';

import { Routes } from '@data/routes';
import { emailTemplates } from '@data/projects';
import { portfolioSectionProps } from '.';
import { Button, Layout, Section } from '@components';

type Props = {
	template: string;
};

export const PortfolioEmailTemplate: FC<Readonly<Props>> = ({ template }: Props) => {
	const [open, setOpen] = useState(false);

	const toggle = () => setOpen(!open);

	return (
		<>
			<button onClick={toggle}>
				<iframe src={template} style={{ pointerEvents: 'none' }} />
			</button>

			<Modal isOpen={open} onRequestClose={toggle} ariaHideApp={false}>
				<div className="o-shell">
					<button onClick={toggle}>&times;</button>

					<iframe src={template} />
				</div>
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
				{emailTemplates.map(template => (
					<PortfolioEmailTemplate template={template} key={template} />
				))}
			</div>
		</Section>
	</Layout>
);

export default PortfolioEmailTemplates;
