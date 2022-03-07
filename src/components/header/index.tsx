import * as React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '../../data/routes';
import { Nav, Icon } from '..';
// import { AppContext, Theme } from '../app';

export const Header: React.FunctionComponent = () => {
	const [open, setOpen] = React.useState(false);
	// const { theme, setTheme } = React.useContext(AppContext);

	return (
		<header className={`c-header${open ? ' c-header--open' : ''}`}>
			<Link to={Routes.HOME} className="c-logo" title="Back to homepage">
				<img src="/images/icons/logo-alt.svg" alt="" />
				<Icon name="svg-logo" className="c-svg-logo" />
			</Link>

			<div className="c-header__actions">
				{/* <button
					name="theme-toggle"
					onClick={() => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)}
					className="c-theme-toggle"
					aria-label={`Turn ${theme === Theme.DARK ? 'light' : 'dark'} mode on`}
				>
					{theme === Theme.DARK ? '🔆' : '🌚'}
				</button> */}

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
			</div>

			<Nav onClick={() => setOpen(false)} />
		</header>
	);
};

export default Header;
