/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Modal from 'react-modal';
import { FC, useState } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Routes } from '@data/routes';
import { emailTemplates } from '@data/projects';
import { getPartnersFromCMS } from '@scripts/cms';
import { portfolioSectionProps } from '@data/pages';
import { Button, Layout, Section, Title } from '@components';
import type { PortfolioEmailTemplatesPageData } from '@scripts/types';

type Props = {
	template: string;
};

const PortfolioEmailTemplate: FC<Readonly<Props>> = ({ template }: Props) => {
	const [open, setOpen] = useState(false);

	const toggle = () => setOpen(!open);

	return (
		<>
			<Button type="button" onClick={toggle} unstyled>
				<iframe src={template} style={{ pointerEvents: 'none' }} />
			</Button>

			<Modal isOpen={open} onRequestClose={toggle} ariaHideApp={false}>
				<div className="o-shell">
					<Button type="button" onClick={toggle} unstyled>
						&times;
					</Button>

					<iframe src={template} />
				</div>
			</Modal>
		</>
	);
};

export const PortfolioEmailTemplates: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ partners }) => (
	<Layout partners={partners}>
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

export const getStaticProps: GetStaticProps<PortfolioEmailTemplatesPageData> = async () => ({
	props: {
		partners: await getPartnersFromCMS()
	}
});

export default PortfolioEmailTemplates;
