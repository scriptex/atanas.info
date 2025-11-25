/* eslint-disable @typescript-eslint/no-unused-vars */
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react';
import { useMemo } from 'react';

import type { LinkProps as ILinkProps } from 'next/link';
import Link from 'next/link';

import { composeClassName } from '@scripts/shared';
import type { ReactChildren } from '@scripts/types';

type CustomProps = {
	className?: string;
	unstyled?: boolean;
};

type LinkProps = CustomProps & ILinkProps & { children: ReactChildren; type: 'link' };
type AnchorProps = CustomProps & AnchorHTMLAttributes<HTMLAnchorElement> & { type: 'anchor' };
type ButtonProps = CustomProps & ButtonHTMLAttributes<HTMLButtonElement> & { type: 'button' | 'reset' | 'submit' };

type Props = AnchorProps | ButtonProps | LinkProps;

const getClassName = <T extends Props>({ className, unstyled }: T): string | undefined => {
	if (unstyled) {
		return className;
	}

	return composeClassName('c-btn', [], [className]);
};

const AnchorButton: FC<Readonly<AnchorProps>> = (props: AnchorProps) => {
	const { children, type, unstyled, ...rest } = props;

	return <a {...rest}>{children}</a>;
};

const LinkButton: FC<Readonly<LinkProps>> = (props: LinkProps) => {
	const { children, type, unstyled, ...rest } = props;

	return <Link {...rest}>{children}</Link>;
};

const DefaultButton: FC<Readonly<ButtonProps>> = (props: ButtonProps) => {
	const { children, unstyled, ...rest } = props;

	return <button {...rest}>{children}</button>;
};

export const Button: FC<Readonly<Props>> = (props: Props) => {
	const className = useMemo(() => getClassName(props) as string, [props]);

	if (props.type === 'anchor') {
		return <AnchorButton {...props} className={className} />;
	}

	if (props.type === 'link') {
		return <LinkButton {...props} className={className} />;
	}

	return <DefaultButton {...props} className={className} />;
};

export default Button;
