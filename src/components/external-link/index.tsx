import * as React from 'react';

interface Props {
	href: string;
	style?: React.CSSProperties;
	onClick?: (e?: React.MouseEvent<HTMLAnchorElement>) => void;
	children: React.ReactNode | string | Array<React.ReactNode | string>;
	className?: string;
}

export const ExternalLink: React.FC<Readonly<Props>> = ({ href, style, onClick, children, className }: Props) => (
	<a rel="noopener noreferrer" href={href} style={style} target="_blank" onClick={onClick} className={className}>
		{children}
	</a>
);

export default ExternalLink;
