import type { FC } from 'react';

import { composeClassName } from '@scripts/shared';

import { SectionElements } from './elements';
import type { Props } from './types';

export const Section: FC<Readonly<Props>> = (props: Props) => {
	const { className, hasShell = true, id, shellClass, style } = props;

	return (
		<section className={composeClassName('c-section', [id], [className])} id={id} style={style}>
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
