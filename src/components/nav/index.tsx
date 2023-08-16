import type { FC } from 'react';

import { composeClassName } from '@scripts/shared';
import { MenuItem, menuItems } from '@data/menu';

import { Anchor } from './anchor';
import { NavInner } from './inner';
import type { Props } from './types';

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
