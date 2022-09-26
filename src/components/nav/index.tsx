import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { Icon } from '..';
import { composeClassName } from '../../scripts/shared';
import { MenuItem, menuItems } from '../../data/menu';

interface Props {
	onClick?: () => void;
	hasShell?: boolean;
	children?: React.ReactNode | string | Array<React.ReactNode | string>;
	className?: string;
}

export const NavInner: React.FC<Readonly<Props>> = ({ hasShell, children }: Props) => {
	return hasShell ? <div className="o-shell">{children}</div> : <>{children}</>;
};

export const Nav: React.FC<Readonly<Props>> = ({ onClick, hasShell, className }: Props) => {
	const { pathname } = useLocation();

	return (
		<nav className={composeClassName('c-nav', [], [className])}>
			<NavInner hasShell={hasShell}>
				<ul>
					{menuItems.map(({ href, title, content, ...rest }: MenuItem, index: number) => (
						<li key={index}>
							{rest.rel ? (
								<a href={href} title={title} {...rest} onClick={onClick}>
									{content}

									<Icon name="svg-external-link" className="c-svg-external-link" />
								</a>
							) : (
								<NavLink
									to={href}
									title={title}
									onClick={onClick}
									className={() => (pathname === href ? 'active' : '')}
								>
									{content}
								</NavLink>
							)}
						</li>
					))}
				</ul>
			</NavInner>
		</nav>
	);
};

export default Nav;
