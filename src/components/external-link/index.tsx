import type { FC, ReactNode, MouseEvent, CSSProperties } from 'react';

import { Icon } from '@components';

type Props = {
	href: string;
	style?: CSSProperties;
	onClick?: (e?: MouseEvent<HTMLAnchorElement>) => void;
	children: ReactNode | string | Array<ReactNode | string>;
	className?: string;
};

export const ExternalLink: FC<Readonly<Props>> = ({ href, style, onClick, children, className }: Props) => (
	<a rel="noopener noreferrer" href={href} style={style} target="_blank" onClick={onClick} className={className}>
		{children}

		<Icon name="svg-external-link" className="c-svg-external-link" />
	</a>
);

export default ExternalLink;
