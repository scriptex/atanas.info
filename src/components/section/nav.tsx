import type { FC } from 'react';

import { Slide } from '@data/slides';
import { Button } from '@components';
import { Article } from '@data/articles';
import { Presentation } from '@data/presentations';
import { composeClassName } from '@scripts/shared';

type Props = {
	name: 'title';
	data: Array<Presentation | Slide | Article>;
	small?: boolean;
	active: number;
	onClick: (index: number) => void;
};

export const SectionNav: FC<Readonly<Props>> = ({ name, data, small = false, active, onClick }: Props) => (
	<nav className={composeClassName('c-section__nav', small ? ['small'] : [])}>
		<ul>
			{data.map((item: Presentation | Slide | Article, index: number) => (
				<li key={index} className={active === index ? 'current' : undefined}>
					<Button
						type="button"
						onClick={() => onClick(index)}
						ariaLabel={`Switch to ${item[name]}`}
						variant={small ? 'small' : 'large'}
					>
						{item[name]}
					</Button>
				</li>
			))}
		</ul>
	</nav>
);

export default SectionNav;
