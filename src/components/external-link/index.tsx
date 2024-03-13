import type { AnchorHTMLAttributes, FC } from 'react';

import { Icon } from '@components';

type Props = AnchorHTMLAttributes<HTMLAnchorElement>;

export const ExternalLink: FC<Readonly<Props>> = ({ children, className, ...rest }: Props) => {
	const { href } = rest;
	const props = !href ? {} : { className, rel: 'noopener noreferrer', target: '_blank', ...rest };

	return (
		<a {...props}>
			{children}

			<Icon className="c-svg-external-link" name="svg-external-link" />
		</a>
	);
};

export default ExternalLink;
