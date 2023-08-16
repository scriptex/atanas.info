import Link, { LinkProps } from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import { ReactChildren } from '@scripts/types';
import { composeClassName } from '@scripts/shared';

type ButtonType = 'anchor' | 'link' | 'button' | 'reset' | 'submit';
type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type DefaultProps<T> = T extends 'anchor' ? AnchorProps : T extends 'link' ? LinkProps : ButtonProps;

type Props<T> = DefaultProps<T> & {
	type: ButtonType;
	children?: ReactChildren;
	unstyled?: boolean;
	className?: string;
};

export const Button = <T extends ButtonType = 'button'>({
	type,
	children,
	unstyled,
	className,
	...rest
}: Props<T>): JSX.Element => {
	const commonProps = {
		className: unstyled ? className : composeClassName('c-btn', [], [className]),
		...rest
	};

	return type === 'anchor' ? (
		<a {...(commonProps as AnchorProps)}>{children}</a>
	) : type === 'link' ? (
		<Link {...(commonProps as unknown as LinkProps)}>{children}</Link>
	) : (
		<button {...(commonProps as ButtonProps)} type={type}>
			{children}
		</button>
	);
};

export default Button;
