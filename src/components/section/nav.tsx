import type { FC } from 'react';

import { Button } from '@components';
import { Routes } from '@data/routes';
import { composeClassName } from '@scripts/shared';
import { Slide, Video, Article } from '@scripts/cms';

type AllowedDataTypes = Video | Slide | Article;

type Props = {
	name: 'title';
	data: Array<AllowedDataTypes>;
	small?: boolean;
	route?: Routes;
	active: number;
	onClick?: (index: number) => void;
};

export const SectionNav: FC<Readonly<Props>> = ({ name, data, small = false, route, active, onClick }: Props) => (
	<nav className={composeClassName('c-section__nav', small ? ['small'] : [])}>
		<ul>
			{data.map((item: AllowedDataTypes, index: number) => (
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
