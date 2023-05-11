import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, ReactNode, useMemo } from 'react';

import { Icon } from '@components';
import { Routes } from '@data/routes';
import { composeClassName } from '@scripts/shared';
import { MenuItem, menuItems } from '@data/menu';

type Props = {
	onClick?: () => void;
	hasShell?: boolean;
	children?: ReactNode | string | Array<ReactNode | string>;
	className?: string;
};

type AnchorProps = Omit<MenuItem, 'children'> & Pick<Props, 'onClick'>;

export const NavInner: FC<Readonly<Props>> = ({ hasShell, children }: Props) => {
	return hasShell ? <div className="o-shell">{children}</div> : <>{children}</>;
};

export const Anchor: FC<Readonly<AnchorProps>> = ({ rel, href, title, content, onClick, ...rest }: AnchorProps) => {
	const { pathname } = useRouter();
	const isActive = useMemo(
		() => (href === Routes.HOME ? pathname === href : pathname.includes(href)),
		[href, pathname]
	);

	return rel ? (
		<a href={href} title={title} {...rest} onClick={onClick}>
			{content}

			<Icon name="svg-external-link" className="c-svg-external-link" />
		</a>
	) : (
		<Link href={href} title={title} onClick={onClick} className={isActive ? 'active' : undefined}>
			{content}
		</Link>
	);
};

export const Nav: FC<Readonly<Props>> = ({ onClick, hasShell, className }: Props) => (
	<nav className={composeClassName('c-nav', [], [className])}>
		<NavInner hasShell={hasShell}>
			<ul>
				{menuItems.map(({ links, ...rest }: MenuItem) => (
					<li key={rest.index}>
						<Anchor {...rest} onClick={onClick} />

						{links && links.length > 0 && (
							<ul>
								{links.map((link: MenuItem) => (
									<li key={link.index}>
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
