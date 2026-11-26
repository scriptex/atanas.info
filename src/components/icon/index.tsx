import type { FC } from 'react';

import { spriteHref } from '@scripts/shared';

type Props = {
	className: string;
	fill?: string;
	height?: number;
	name: string;
	width?: number;
};

export const Icon: FC<Readonly<Props>> = ({ className, fill, height, name, width }: Props) => (
	<svg className={className} height={height} width={width}>
		<use fill={fill} href={spriteHref(name)} />
	</svg>
);

export default Icon;
