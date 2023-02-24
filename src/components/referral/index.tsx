import { css } from '@emotion/react';
import type { FC } from 'react';

import { flex, onMobile, onTabletLandscape, onTabletPortrait } from '@scripts/styles';
import { Button } from '@components';

import Infographic from '@svg/braintrust-referral.svg';

export const FooterReferral: FC = () => (
	<div css={mainStyles}>
		<Infographic />

		<div>
			<h5>Access the world&apos;s best freelance jobs.</h5>

			<p>Your work. Your network. Your future.</p>

			<Button
				rel="noopener noreferrer"
				type="anchor"
				href="https://app.usebraintrust.com/r/atanas1/"
				target="_blank"
				variant="small"
			>
				Apply to Braintrust
			</Button>
		</div>
	</div>
);

const mainStyles = css`
	font-size: 0.875rem;
	color: var(--color-secondary);
	text-align: left;
	${flex({
		wrap: 'nowrap',
		display: 'inline-flex',
		direction: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start'
	})};
	position: absolute;
	bottom: 0.5rem;
	right: 0.5rem;
	padding: 0.5rem;
	border: 1px solid #fffcea;
	background-color: #fffcea;

	p,
	h5 {
		padding: 0 0 0.5rem;
		margin: 0;
	}

	> svg {
		width: 7.5rem;
		height: 7.5rem;
		display: block;
		margin-right: 0.5rem;
	}

	.theme-light & {
		color: var(--color-primary);
		border-color: var(--color-primary);
	}

	${onTabletLandscape`
		position: static;
		bottom: auto;
		right: auto;
		padding: 1rem;
		margin: 1.75rem auto 0;
	`};

	${onTabletPortrait`
		p {
			margin: 0;
		}
	`};

	${onMobile`
		display: flex;
		margin: 1.75rem -1rem -2rem;
	`}
`;

export default FooterReferral;
