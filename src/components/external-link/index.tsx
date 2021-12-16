import * as React from 'react';

interface Props {
	href: string;
	children: React.ReactChild | React.ReactText | React.ReactChild[] | React.ReactText[];
	[x: string]: any;
}

export const ExternalLink: React.FC<Readonly<Props>> = ({ href, children, ...rest }: Readonly<Props>) => (
	<a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
		{children}
	</a>
);

export default ExternalLink;
