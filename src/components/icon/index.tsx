import * as React from 'react';

interface Props {
	name: string;
	className: string;
}

export const Icon: React.FunctionComponent<Readonly<Props>> = (props: Readonly<Props>) => (
	<svg className={props.className}>
		<use xlinkHref={`#${props.name}`} />
	</svg>
);

export default Icon;
