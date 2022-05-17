import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { MenuItem, menuItems } from '../../data/menu';

interface Props {
	onClick?: () => void;
	hasShell?: boolean;
	children?: React.ReactNode;
	className?: string;
}

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
									className={({ isActive }) => (isActive ? 'active' : '')}
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
