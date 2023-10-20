import type { FC } from 'react';

import SVGSprite from '@src/sprite.svg';
import type { FundingNetwork } from '@scripts/cms';
import type { Partner, ReactChildren } from '@scripts/types';
import { Nav, Contact, Header, Footer, Partners } from '@components';

type Props = {
	main?: string;
	funding: FundingNetwork[];
	children: ReactChildren;
	partners: Partner[];
};

export const Layout: FC<Readonly<Props>> = ({ main, partners, children, funding }: Props) => (
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
