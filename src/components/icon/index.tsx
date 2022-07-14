import * as React from 'react';

import { isPrerendering } from '../../scripts/shared';

interface Props {
	name: string;
	fill?: string;
	className: string;
	[x: string]: unknown;
}

export const Icon: React.FC<Readonly<Props>> = ({ name, fill, className, ...rest }: Readonly<Props>) => (
	<svg {...rest} className={className}>
		{isPrerendering ? null : <use fill={fill} xlinkHref={`#${name}`} />}
	</svg>
);

export default Icon;
