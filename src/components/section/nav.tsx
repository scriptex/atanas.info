import type { FC } from 'react';

import { Slide } from '@data/slides';
import { Button } from '@components';
import { Routes } from '@data/routes';
import { Article } from '@scripts/cms';
import { Presentation } from '@data/presentations';
import { composeClassName } from '@scripts/shared';

type Props = {
	name: 'title';
	data: Array<Presentation | Slide | Article>;
	small?: boolean;
	route?: Routes;
	active: number;
	onClick?: (index: number) => void;
};

export const SectionNav: FC<Readonly<Props>> = ({ name, data, small = false, route, active, onClick }: Props) => (
	<nav className={composeClassName('c-section__nav', small ? ['small'] : [])}>
		<ul>
			{data.map((item: Presentation | Slide | Article, index: number) => (
				<li
					key={item.index}
					className={active === index + (typeof onClick === 'function' ? 0 : 1) ? 'current' : undefined}
				>
					{typeof onClick === 'function' ? (
						<Button
							type="button"
							onClick={() => onClick(index)}
							className={small ? 'c-btn--small' : undefined}
							aria-label={`Switch to ${item[name]}`}
						>
							{item[name]}
						</Button>
					) : (
						<Button
							type="link"
							href={`${route}?page=${index + 1}`}
							className={small ? 'c-btn--small' : undefined}
						>
							{item[name]}
						</Button>
					)}
				</li>
			))}
		</ul>
	</nav>
);

export default SectionNav;
