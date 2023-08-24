import { FC, useMemo, useCallback } from 'react';

import { composeClassName } from '@scripts/shared';
import { MenuItem, menuItems } from '@data/menu';

import { Anchor } from './anchor';
import { Button } from '@components';
import type { Props } from './types';

const menuItemsWithDropdown = menuItems.filter(item => item.links?.length && item.links?.length > 0);

export const Nav: FC<Readonly<Props>> = ({ active = -1, inline = false, onClick, setActive }: Props) => {
	const className = useMemo(
		() => composeClassName('c-nav', [inline ? 'inline' : '', active > -1 ? 'active' : ''].filter(Boolean)),
		[active, inline]
	);

	const anchorClick = useCallback(() => {
		typeof onClick === 'function' && onClick();
		typeof setActive === 'function' && setActive(-1);
	}, [onClick, setActive]);

	return (
		<nav className={className}>
			<div className={inline ? 'o-shell' : 'c-nav__inner'}>
				<ul>
					{menuItems.map(({ links, ...rest }: MenuItem, index: number) => (
						<li key={rest.index} className={active === index ? 'is--active' : undefined}>
							<Anchor {...rest} onClick={anchorClick} />

							{links && links.length > 0 && (
								<>
									{inline ? null : (
										<Button
											type="button"
											onClick={() => {
												const noActive = active === -1;

												typeof setActive === 'function' && setActive(noActive ? index : -1);
											}}
											unstyled
											aria-label="Click to open dropdown"
										/>
									)}

									{!inline ? null : (
										<ul>
											{links.map((link: MenuItem) => (
												<li key={link.index}>
													<Anchor {...link} onClick={anchorClick} />
												</li>
											))}
										</ul>
									)}
								</>
							)}
						</li>
					))}
				</ul>

				{inline
					? null
					: menuItemsWithDropdown.map(item => (
							<ul key={item.index} className={item.index === active ? 'is--visible' : undefined}>
								<li>
									<Button
										type="button"
										onClick={() => {
											typeof setActive === 'function' && setActive(-1);
										}}
										unstyled
										aria-label="Click to close dropdown"
									/>
								</li>

								{item.links!.map((link: MenuItem) => (
									<li key={link.index}>
										<Anchor {...link} onClick={anchorClick} />
									</li>
								))}
							</ul>
					  ))}
			</div>
		</nav>
	);
};

export default Nav;
