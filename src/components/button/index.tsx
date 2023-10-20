/* eslint-disable @typescript-eslint/no-unused-vars */
import Link, { LinkProps as ILinkProps } from 'next/link';
import { FC, useMemo, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import { composeClassName } from '@scripts/shared';
import type { ReactChildren } from '@scripts/types';

type CustomProps = {
	unstyled?: boolean;
	className?: string;
};

type LinkProps = CustomProps & ILinkProps & { type: 'link'; children: ReactChildren };
type AnchorProps = CustomProps & AnchorHTMLAttributes<HTMLAnchorElement> & { type: 'anchor' };
type ButtonProps = CustomProps & ButtonHTMLAttributes<HTMLButtonElement> & { type: 'button' | 'reset' | 'submit' };

type Props = LinkProps | AnchorProps | ButtonProps;

const getClassName = <T extends Props>({ unstyled, className }: T): string | undefined => {
	if (unstyled) {
		return className;
	}

	return composeClassName('c-btn', [], [className]);
};

const AnchorButton: FC<Readonly<AnchorProps>> = (props: AnchorProps) => {
	const { type, unstyled, children, ...rest } = props;

	return <a {...rest}>{children}</a>;
};

const LinkButton: FC<Readonly<LinkProps>> = (props: LinkProps) => {
	const { type, unstyled, children, ...rest } = props;

	return <Link {...rest}>{children}</Link>;
};

const DefaultButton: FC<Readonly<ButtonProps>> = (props: ButtonProps) => {
	const { unstyled, children, ...rest } = props;

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
