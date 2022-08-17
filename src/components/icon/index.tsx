import * as React from 'react';

interface Props {
	name: string;
	fill?: string;
	className: string;
	[x: string]: unknown;
}

export const Icon: React.FC<Readonly<Props>> = ({ name, fill, className, ...rest }: Props) => (
	<svg {...rest} className={className}>
		<use fill={fill} xlinkHref={`#${name}`} />
	</svg>
);

export default Icon;
