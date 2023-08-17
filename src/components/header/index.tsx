import Link from 'next/link';
import { FC, useState } from 'react';

import { Routes } from '@data/routes';
import { composeClassName } from '@scripts/shared';
import { Nav, Icon, Button, ThemeSwitcher } from '@components';

export const Header: FC = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className={composeClassName('c-header', open ? ['open'] : [])}>
			<Link href={Routes.HOME} className="c-logo" title="Back to homepage">
				<Icon name="svg-logo" className="c-svg-logo" />
			</Link>

			<div className="c-header__actions">
				<Button
					type="button"
					onClick={(): void => setOpen(!open)}
					unstyled
					className="c-nav__toggle"
					aria-label="Toggle menu"
				>
					<span></span>

					<span></span>

					<span></span>
				</Button>

				<ThemeSwitcher />
			</div>

			<Nav onClick={() => setOpen(false)} />
		</header>
	);
};

export default Header;
