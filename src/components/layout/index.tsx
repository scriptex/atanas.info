import type { FC } from 'react';

import SVGSprite from '@src/sprite.svg';
import type { Partner, ReactChildren } from '@scripts/types';
import { Nav, Contact, Header, Footer, Partners } from '@components';

type Props = {
	main?: string;
	children: ReactChildren;
	partners: Partner[];
};

export const Layout: FC<Readonly<Props>> = ({ main, partners, children }: Props) => (
	<>
		<SVGSprite />

		<Header />

		<main className={['o-main', main].join(' ')}>{children}</main>

		<Contact />

		<Partners data={partners} />

		<Nav inline />

		<Footer />
	</>
);

export default Layout;
