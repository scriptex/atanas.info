import * as React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '../../loadables';
import { Nav, Icon } from '..';

export const Header: React.FunctionComponent = () => {
	const [open, setOpen] = React.useState(false);

	return (
		<header className={`c-header${open ? ' c-header--open' : ''}`}>
			<Link to={Routes.HOME} className="c-logo" title="Back to homepage">
				<Icon name="svg-logo" className="c-svg-logo" />
			</Link>

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

			<Nav onClick={() => setOpen(false)} />
		</header>
	);
};

export default Header;
