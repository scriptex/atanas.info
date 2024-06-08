import { FC, useState } from 'react';

import Modal from 'react-modal';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { Button, Layout, Section, Title } from '@components';
import { portfolioSectionProps } from '@data/pages';
import { emailTemplates } from '@data/projects';
import { Routes } from '@data/routes';
import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import type { PortfolioEmailTemplatesPageData } from '@scripts/types';

type Props = {
	template: string;
};

const PortfolioEmailTemplate: FC<Readonly<Props>> = ({ template }: Props) => {
	const [open, setOpen] = useState(false);

	const toggle = () => setOpen(!open);

	return (
		<>
			<Button onClick={toggle} type="button" unstyled>
				<iframe src={template} style={{ pointerEvents: 'none' }} title={template} />
			</Button>

			<Modal ariaHideApp={false} isOpen={open} onRequestClose={toggle}>
				<div className="o-shell">
					<Button onClick={toggle} type="button" unstyled>
						&times;
					</Button>

					<iframe src={template} title={template} />
				</div>
			</Modal>
		</>
	);
};

export const PortfolioEmailTemplates: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ funding, partners }) => (
	<Layout funding={funding} partners={partners}>
		<Title text="Email Templates" />

		<Section
			{...portfolioSectionProps}
			actions={
				<Link className="c-btn" href={Routes.PORTFOLIO}>
					Go back
				</Link>
			}
		>
			<h3>Email Templates</h3>

			<div className="c-email-templates">
				{emailTemplates.map(template => (
					<PortfolioEmailTemplate key={template} template={template} />
				))}
			</div>
		</Section>
	</Layout>
);

export const getStaticProps: GetStaticProps<PortfolioEmailTemplatesPageData> = async () => ({
	props: {
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	}
});

export default PortfolioEmailTemplates;
