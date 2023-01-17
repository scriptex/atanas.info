import type { FC } from 'react';

import SVGSprite from '@src/sprite.svg';
import { ReactChildren } from '@scripts/types';
import { Nav, Contact, Header, Footer } from '@components';

interface Props {
	main?: string;
	children: ReactChildren;
}

export const Layout: FC<Readonly<Props>> = ({ main, children }: Props) => (
	<>
		<SVGSprite />

		<Header />

		<main className={['o-main', main].join(' ')}>{children}</main>

		<Contact />

		<Nav hasShell className="c-nav--inline" />

		<Footer />
	</>
);

export default Layout;
