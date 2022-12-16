/* eslint-disable react/prop-types */
import * as React from 'react';

import { composeClassName } from '@scripts/shared';

interface Props {
	rel?: string;
	href?: string;
	type?: 'submit' | 'reset' | 'button' | 'link';
	target?: string;
	children?: React.ReactNode | string | Array<React.ReactNode | string>;
	download?: boolean;
	className?: string;
	ariaLabel?: string;
	onClick?: (...args: unknown[]) => unknown;
}

export const Button: React.FC<Readonly<Props>> = ({
	rel,
	href,
	type,
	target,
	children,
	download,
	className,
	ariaLabel,
	onClick
}: Props) => {
	const commonProps = {
		className: composeClassName('c-btn', [], [className]),
		'aria-label': ariaLabel
	};

	return type === 'link' ? (
		<a {...commonProps} rel={rel} href={href} target={target} download={download}>
			{children}
		</a>
	) : (
		<button {...commonProps} type={type} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
