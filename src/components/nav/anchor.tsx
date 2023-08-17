import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useMemo } from 'react';

import { Icon } from '@components';
import { Routes } from '@data/routes';

import type { AnchorProps } from './types';

export const Anchor: FC<Readonly<AnchorProps>> = ({ rel, href, title, content, onClick, ...rest }: AnchorProps) => {
	const { pathname } = useRouter();
	const isActive = useMemo(
		() => (href === Routes.HOME ? pathname === href : pathname.includes(href)),
		[href, pathname]
	);

	return rel ? (
		<a href={href} title={title} {...rest} onClick={onClick}>
			{content}

			<Icon name="svg-external-link" className="c-svg-external-link" />
		</a>
	) : (
		<Link href={href} title={title} onClick={onClick} className={isActive ? 'active' : undefined}>
			{content}
		</Link>
	);
};
