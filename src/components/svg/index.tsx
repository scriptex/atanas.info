import * as React from 'react';
import SVG from 'react-inlinesvg';

interface Props {
	src: string;
	className?: string;
}

export const Svg: React.FC<Readonly<Props>> = ({ src, className }: Props) => {
	const classes = ['c-svg-icon'].concat(className || '');

	return <SVG src={src} className={classes.join(' ')} />;
};

export default Svg;
