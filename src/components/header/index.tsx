import * as React from 'react';

import { Icon } from '..';
import { Link, links } from '../../assets/scripts/menu';

export const Header: React.FunctionComponent = () => {
	const [open, setOpen] = React.useState(false);

	return (
		<header className={`c-header${open ? ' c-header--open' : ''}`}>
			<div className="o-shell o-shell--flex">
				<a href="#hello" className="c-logo" title="Back to top">
					<Icon name="svg-logo" className="c-svg-logo" />
				</a>

				<button onClick={() => setOpen(!open)} className="c-nav__toggle">
					<span></span>

					<span></span>

					<span></span>
				</button>

				<nav className="c-nav">
					<ul>
						{links.map(({ href, title, content, ...rest }: Link, index: number) => (
							<li key={index}>
								<a
									href={href}
									title={title}
									{...rest}
									onClick={() => {
										const root = document.getElementById('root');

										setOpen(!open);

										if (href === '#music' && root) {
											root.classList.add('music--active');
										}
									}}
								>
									{content}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
