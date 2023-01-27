import type { FC } from 'react';

import { Slide } from '@data/slides';
import { Button } from '@components';
import { Article } from '@data/articles';
import { Presentation } from '@data/presentations';

type Props = {
	name: 'title';
	data: Array<Presentation | Slide | Article>;
	active: number;
	onClick: (index: number) => void;
};

export const SectionNav: FC<Readonly<Props>> = ({ name, data, active, onClick }: Props) => (
	<nav className="c-section__nav">
		<ul>
			{data.map((item: Presentation | Slide | Article, index: number) => (
				<li key={index} className={active === index ? 'current' : undefined}>
					<Button type="button" onClick={() => onClick(index)} ariaLabel={`Switch to ${item[name]}`}>
						{item[name]}
					</Button>
				</li>
			))}
		</ul>
	</nav>
);

export default SectionNav;
