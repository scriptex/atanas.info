import type { FC, AnchorHTMLAttributes } from 'react';

import { Icon } from '@components';

type Props = AnchorHTMLAttributes<HTMLAnchorElement>;

export const ExternalLink: FC<Readonly<Props>> = ({ children, className, ...rest }: Props) => {
	const { href } = rest;
	const props = !href ? {} : { rel: 'noopener noreferrer', target: '_blank', className, ...rest };

	return (
		<a {...props}>
			{children}

			<Icon name="svg-external-link" className="c-svg-external-link" />
		</a>
	);
};

export default ExternalLink;
