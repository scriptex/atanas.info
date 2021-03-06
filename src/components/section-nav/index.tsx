import * as React from 'react';

import { Slide } from '../../scripts/slides';
import { Button } from '..';
import { Article } from '../../scripts/articles';
import { Presentation } from '../../scripts/presentations';

interface Props {
	name: string;
	data: Array<Presentation | Slide | Article>;
	active: number;
	onClick: (index: number) => void;
}

export const SectionNav: React.FunctionComponent<Readonly<Props>> = (props: Readonly<Props>) => {
	const { name, data, active, onClick } = props;

	return (
		<nav className="c-section__nav">
			<ul>
				{data.map((item: Presentation | Slide | Article, index: number) => (
					<li key={index} className={active === index ? 'current' : ''}>
						<Button
							type="button"
							onClick={() => onClick(index)}
							aria-label={`Switch to ${(item as any)[name]}`}
						>
							{(item as any)[name]}
						</Button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default SectionNav;
