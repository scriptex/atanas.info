import * as React from 'react';

interface Props {
	name: string;
	className: string;
	[x: string]: any;
}

export const Icon: React.FC<Readonly<Props>> = ({ name, className, ...rest }: Readonly<Props>) => (
	<svg {...rest} className={className}>
		<use xlinkHref={`#${name}`} />
	</svg>
);

export default Icon;
