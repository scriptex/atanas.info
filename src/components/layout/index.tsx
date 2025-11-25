import type { FC } from 'react';

import { Contact, Footer, Header, Nav, Partners } from '@components';

import type { FundingNetwork } from '@scripts/cms';
import type { Partner, ReactChildren } from '@scripts/types';

import SVGSprite from '@src/sprite.svg';

type Props = {
	children: ReactChildren;
	funding: FundingNetwork[];
	main?: string;
	partners: Partner[];
};

export const Layout: FC<Readonly<Props>> = ({ children, funding, main, partners }: Props) => (
	<>
		<SVGSprite />

		<Header />

		<main className={['o-main', main].join(' ')}>{children}</main>

		<Contact />

		<Partners data={partners} />

		<Nav inline />

		<Footer funding={funding} />
	</>
);

export default Layout;
