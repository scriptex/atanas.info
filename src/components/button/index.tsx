import Link from 'next/link';
import type { FC, ReactNode } from 'react';

import { css } from '@emotion/react';
import { onHover } from '@scripts/styles';

type Props = {
	rel?: string;
	href?: string;
	type?: 'submit' | 'reset' | 'button' | 'link' | 'anchor';
	target?: string;
	variant?: 'small' | 'large';
	children?: ReactNode | string | Array<ReactNode | string>;
	download?: boolean;
	ariaLabel?: string;
	onClick?: (...args: unknown[]) => unknown;
};

export const Button: FC<Readonly<Props>> = ({
	rel,
	href,
	type,
	target,
	variant,
	children,
	download,
	ariaLabel,
	onClick
}: Props) => {
	const commonProps = {
		'aria-label': ariaLabel
	};

	return type === 'link' ? (
		<Link {...commonProps} css={styles(variant)} href={href!} onClick={onClick}>
			{children}
		</Link>
	) : type === 'anchor' ? (
		<a {...commonProps} css={styles(variant)} rel={rel} href={href} target={target} download={download}>
			{children}
		</a>
	) : (
		<button {...commonProps} css={styles(variant)} type={type} onClick={onClick}>
			{children}
		</button>
	);
};

const styles = (variant: Props['variant']) => css`
	font-size: ${variant === 'small' ? 0.875 : 1}rem;
	line-height: ${variant === 'small' ? 1 : 1.25};
	color: var(--color-primary);
	font-weight: 400;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: 0.04em;
	display: inline-block;
	vertical-align: middle;
	padding: ${variant === 'small' ? '0.5rem 1rem' : '1rem 3rem'};
	border: 1px solid var(--color-action);
	background-color: var(--color-action);
	border-radius: 0.25rem;
	box-shadow: none;
	appearance: none;

	.c-svg-external-link {
		margin-top: -0.1875em;
		transition: none;
	}

	.theme-light & {
		color: var(--color-secondary);
	}

	${onHover(css`
		&:hover {
			color: var(--color-action);
			background-color: var(--color-primary);
		}

		.theme-light &:hover {
			background-color: var(--color-secondary);
		}
	`)}
`;

export default Button;
