import * as React from 'react';
import SVG from 'react-inlinesvg';

import { composeClassName } from '@scripts/shared';

interface Props {
	src: string;
	className?: string;
}

export const Svg: React.FC<Readonly<Props>> = ({ src, className }: Props) => (
	<SVG src={src} className={composeClassName('c-svg-icon', [], [className])} />
);

export default Svg;
