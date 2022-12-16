import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { Icon } from '@components';
import { composeClassName } from '@scripts/shared';
import { MenuItem, menuItems } from '@data/menu';

interface Props {
	onClick?: () => void;
	hasShell?: boolean;
	children?: React.ReactNode | string | Array<React.ReactNode | string>;
	className?: string;
}

type AnchorProps = Omit<MenuItem, 'children'> & Pick<Props, 'onClick'>;

export const NavInner: React.FC<Readonly<Props>> = ({ hasShell, children }: Props) => {
	return hasShell ? <div className="o-shell">{children}</div> : <>{children}</>;
};

export const Anchor: React.FC<Readonly<AnchorProps>> = ({
	rel,
	href,
	title,
	content,
	onClick,
	...rest
}: AnchorProps) => {
	const { pathname } = useLocation();

	return rel ? (
		<a href={href} title={title} {...rest} onClick={onClick}>
			{content}

			<Icon name="svg-external-link" className="c-svg-external-link" />
		</a>
	) : (
		<NavLink
			to={href}
			title={title}
			onClick={onClick}
			className={() => {
				if (pathname === href) {
					return 'active';
				}

				return pathname.includes(href) ? 'has-active' : '';
			}}
		>
			{content}
		</NavLink>
	);
};

export const Nav: React.FC<Readonly<Props>> = ({ onClick, hasShell, className }: Props) => (
	<nav className={composeClassName('c-nav', [], [className])}>
		<NavInner hasShell={hasShell}>
			<ul>
				{menuItems.map(({ links, ...rest }: MenuItem, i: number) => (
					<li key={i}>
						<Anchor {...rest} onClick={onClick} />

						{links && links.length > 0 && (
							<ul>
								{links.map((link: MenuItem, j: number) => (
									<li key={j}>
										<Anchor {...link} onClick={onClick} />
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</NavInner>
	</nav>
);

export default Nav;
