/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Modal from 'react-modal';
import { FC, useState } from 'react';

import { Routes } from '@data/routes';
import { emailTemplates } from '@data/projects';
import { portfolioSectionProps } from '.';
import { Layout, Section, Title } from '@components';

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
		<Title text="Email Templates | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

		<Section
			{...portfolioSectionProps}
			actions={
				<Link href={Routes.PORTFOLIO} className="c-btn">
					Go back
				</Link>
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
