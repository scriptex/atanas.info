/* eslint-disable react/prop-types */
import * as React from 'react';

import { composeClassName } from '../../scripts/shared';

interface Props {
	href?: string;
	type?: 'submit' | 'reset' | 'button' | 'link';
	children?: React.ReactChild[] | React.ReactText;
	className?: string;
	onClick?: (...args: unknown[]) => unknown;
	[x: string]: unknown;
}

export const Button: React.FC<Readonly<Props>> = (props: Props) => {
	const { href, type, children, className, onClick, ...rest } = props;
	const classNames = composeClassName('c-btn', [], [className]);

	return type === 'link' ? (
		<a href={href} className={classNames} {...rest}>
			{children}
		</a>
	) : (
		<button className={classNames} type={type} onClick={onClick} {...rest}>
			{children}
		</button>
	);
};

export default Button;
