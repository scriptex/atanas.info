import * as React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '../../data/routes';
import { Nav, Icon, ThemeSwitcher } from '..';

export const Header: React.FC = () => {
	const [open, setOpen] = React.useState(false);

	return (
		<header className={`c-header${open ? ' c-header--open' : ''}`}>
			<Link to={Routes.HOME} className="c-logo" title="Back to homepage">
				<img src="/images/icons/logo-alt.svg" alt="" />
				<Icon name="svg-logo" className="c-svg-logo" />
			</Link>

			<div className="c-header__actions">
				<button
					name="menu-toggle"
					onClick={(): void => setOpen(!open)}
					className="c-nav__toggle"
					aria-label="Toggle menu"
				>
					<span></span>

					<span></span>

					<span></span>
				</button>

				<ThemeSwitcher />
			</div>

			<Nav onClick={() => setOpen(false)} />
		</header>
	);
};

export default Header;
