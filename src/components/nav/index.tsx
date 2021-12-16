import * as React from 'react';
import { Location } from 'history';
import { match, NavLink } from 'react-router-dom';

import { MenuItem, menuItems } from '~/src/data/menu';

interface Props {
	onClick?: () => void;
	hasShell?: boolean;
	children?: any;
	className?: string;
}

export const checkActive = (match: match<any>, location: Location): boolean => {
	if (!location || !match) {
		return false;
	}

	return location.pathname === match.path.replace('\\', '');
};

export const NavInner: React.FC<Readonly<Props>> = (props: Readonly<Props>) =>
	props.hasShell ? <div className="o-shell">{props.children}</div> : <>{props.children}</>;

export const Nav: React.FC<Readonly<Props>> = (props: Readonly<Props>) => {
	const { onClick, hasShell, className } = props;
	const classNames = ['c-nav'];

	if (className) {
		classNames.push(className);
	}

	return (
		<nav className={classNames.join(' ')}>
			<NavInner hasShell={hasShell}>
				<ul>
					{menuItems.map(({ href, title, content, ...rest }: MenuItem, index: number) => (
						<li key={index}>
							{rest.rel ? (
								<a href={href} title={title} {...rest} onClick={onClick}>
									{content}
								</a>
							) : (
								<NavLink
									to={href}
									title={title}
									onClick={onClick}
									activeClassName="active"
									isActive={checkActive}
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
