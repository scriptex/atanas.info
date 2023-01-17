import type { FC } from 'react';

import { Sun } from './sun';
import { Moon } from './moon';

export const ThemeSwitcher: FC = () => (
	<button
		name="theme-toggle"
		onClick={() => {
			const html = document.documentElement;

			html.classList.toggle('theme-dark');
			html.classList.toggle('theme-light');
		}}
		className="c-theme-switcher"
		aria-label="Toggle theme"
	>
		<svg xmlns="http://www.w3.org/2000/svg" width={189} height={144} viewBox="0 0 189 144">
			<g fill="none" transform="translate(3.576 .35)">
				<Moon />
				<Sun />
			</g>
		</svg>
	</button>
);

export default ThemeSwitcher;
