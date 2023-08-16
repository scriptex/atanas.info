import type { FC } from 'react';

import { composeClassName } from '@scripts/shared';

import type { Props } from './types';
import { SectionElements } from './elements';

export const Section: FC<Readonly<Props>> = (props: Props) => {
	const { id, style, hasShell = true, className, shellClass } = props;

	return (
		<section id={id} style={style} className={composeClassName('c-section', [id], [className])}>
			{hasShell ? (
				<div className={composeClassName('o-shell', [], [shellClass])}>
					<SectionElements {...props} />
				</div>
			) : (
				<SectionElements {...props} />
			)}
		</section>
	);
};

export default Section;
