import type { FC } from 'react';

type Props = {
	name: string;
	fill?: string;
	width?: number;
	height?: number;
	className: string;
};

export const Icon: FC<Readonly<Props>> = ({ name, fill, width, height, className }: Props) => (
	<svg width={width} height={height} className={className}>
		<use fill={fill} xlinkHref={`#${name}`} />
	</svg>
);

export default Icon;
