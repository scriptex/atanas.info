import type { FC } from 'react';
import { useMemo } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Icon } from '@components';

import { Routes } from '@data/routes';

import type { AnchorProps } from './types';

export const Anchor: FC<Readonly<AnchorProps>> = ({ content, href, onClick, rel, title, ...rest }: AnchorProps) => {
	const { pathname } = useRouter();
	const isActive = useMemo(
		() => (href === Routes.HOME ? pathname === href : pathname.includes(href)),
		[href, pathname]
	);

	return rel ? (
		<a href={href} title={title} {...rest} onClick={onClick}>
			{content}

			<Icon className="c-svg-external-link" name="svg-external-link" />
		</a>
	) : (
		<Link className={isActive ? 'active' : undefined} href={href} onClick={onClick} title={title}>
			{content}
		</Link>
	);
};
