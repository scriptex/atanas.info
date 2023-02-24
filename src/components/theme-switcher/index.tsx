import type { FC } from 'react';

import { Sun } from './sun';
import { Moon } from './moon';
import { css } from '@emotion/react';
import { flex } from '@scripts/styles';

export const ThemeSwitcher: FC = () => (
	<button
		css={styles}
		name="theme-toggle"
		onClick={() => {
			const html = document.documentElement;

			html.classList.toggle('theme-dark');
			html.classList.toggle('theme-light');
		}}
		aria-label="Toggle theme"
		data-testid="c-theme-switcher"
	>
		<svg xmlns="http://www.w3.org/2000/svg" width={189} height={144} viewBox="0 0 189 144">
			<g fill="none" transform="translate(3.576 .35)">
				<Moon />
				<Sun />
			</g>
		</svg>
	</button>
);

const styles = css`
	height: 3.13rem;
	${flex({ justifyContent: 'center' })}
	padding: 0.5rem 0;
	margin: 0;
	border: 0;
	background: none;
	border-radius: 0;
	box-shadow: none;
	appearance: none;

	svg {
		width: auto;
		height: 100%;
		display: block;
	}

	.sun,
	.moon {
		transition: opacity var(--timing) var(--easing);
	}

	.theme-dark & .sun,
	.theme-light & .moon {
		opacity: 0;
	}
`;

export default ThemeSwitcher;
