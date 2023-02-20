import { css } from '@emotion/react';
import type { FC } from 'react';

import { centered } from '@scripts/styles';

export const Loader: FC = () => (
	<div css={wrapperStyles}>
		<div css={mainStyles}></div>
	</div>
);

const wrapperStyles = css`
	height: 100%;
	${centered};
	background-color: var(--color-secondary);
`;

const mainStyles = css`
	width: 5rem;
	height: 5rem;
	${centered};

	&::before,
	&::after {
		content: '';
		display: block;
		opacity: 1;
		${centered};
		border: 0.125rem solid var(--color-primary);
		border-radius: 50%;
		animation: loading 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
	}

	&::after {
		border-color: var(--color-action);
		animation-delay: -1s;
	}
`;

export default Loader;
