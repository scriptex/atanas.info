import * as React from 'react';

import { Slide } from '../../data/slides';
import { Button } from '..';
import { Article } from '../../data/articles';
import { Presentation } from '../../data/presentations';

interface Props {
	name: 'title';
	data: Array<Presentation | Slide | Article>;
	active: number;
	onClick: (index: number) => void;
}

export const SectionNav: React.FC<Readonly<Props>> = (props: Readonly<Props>) => {
	const { name, data, active, onClick } = props;

	return (
		<nav className="c-section__nav">
			<ul>
				{data.map((item: Presentation | Slide | Article, index: number) => (
					<li key={index} className={active === index ? 'current' : ''}>
						<Button type="button" onClick={() => onClick(index)} aria-label={`Switch to ${item[name]}`}>
							{item[name]}
						</Button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default SectionNav;
