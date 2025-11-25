import type { FC } from 'react';

import { Button } from '@components';

import type { Article, Slide, Video } from '@scripts/cms';
import { composeClassName } from '@scripts/shared';

import type { Routes } from '@data/routes';

type AllowedDataTypes = Article | Slide | Video;

type Props = {
	active: number;
	data: Array<AllowedDataTypes>;
	name: 'title';
	onClick?: (index: number) => void;
	route?: Routes;
	small?: boolean;
};

export const SectionNav: FC<Readonly<Props>> = ({ active, data, name, onClick, route, small = false }: Props) => (
	<nav className={composeClassName('c-section__nav', small ? ['small'] : [])}>
		<ul>
			{data.map((item: AllowedDataTypes, index: number) => (
				<li
					className={active === index + (typeof onClick === 'function' ? 0 : 1) ? 'current' : undefined}
					key={item.index}
				>
					{typeof onClick === 'function' ? (
						<Button
							aria-label={`Switch to ${item[name]}`}
							className={small ? 'c-btn--small' : undefined}
							onClick={() => onClick(index)}
							type="button"
						>
							{item[name]}
						</Button>
					) : (
						<Button
							className={small ? 'c-btn--small' : undefined}
							href={`${route}?page=${index + 1}`}
							type="link"
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
