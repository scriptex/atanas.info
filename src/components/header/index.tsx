import type { FC } from 'react';
import { useState } from 'react';

import Link from 'next/link';

import { Button, Icon, Nav, ThemeSwitcher } from '@components';

import { composeClassName } from '@scripts/shared';

import { Routes } from '@data/routes';

export const Header: FC = () => {
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState(-1);

	return (
		<header className={composeClassName('c-header', open ? ['open'] : [])}>
			<Link className="c-logo" href={Routes.HOME} title="Back to homepage">
				<Icon className="c-svg-logo" name="svg-logo" />
			</Link>

			<div className="c-header__actions">
				<Button
					aria-label="Toggle menu"
					className="c-nav__toggle"
					onClick={(): void => {
						setOpen(!open);
						setActive(-1);
					}}
					type="button"
					unstyled
				>
					<span></span>

					<span></span>

					<span></span>
				</Button>

				<ThemeSwitcher />
			</div>

			<Nav active={active} onClick={() => setOpen(false)} setActive={setActive} />
		</header>
	);
};

export default Header;
