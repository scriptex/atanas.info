import type { FC } from 'react';

type Props = {
	circle: number;
	path: string;
	translate: string;
};

export const Crater: FC<Readonly<Props>> = ({ circle, path, translate }: Props) => (
	<g transform={`translate(${translate})`}>
		<circle cx={circle} cy={circle} r={circle} />
		<path d={path} fill="#231F20" opacity=".12" />
	</g>
);

export default Crater;
