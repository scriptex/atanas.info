import * as React from 'react';

interface Props {
	path: string;
	circle: number;
	translate: string;
}

export const Crater: React.FC<Readonly<Props>> = ({ path, circle, translate }: Props) => (
	<g transform={`translate(${translate})`}>
		<circle cx={circle} cy={circle} r={circle} />
		<path fill="#231F20" d={path} opacity=".12" />
	</g>
);

export default Crater;
