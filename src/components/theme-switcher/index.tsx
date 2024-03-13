import type { FC } from 'react';

import { Button } from '@components';

import { Moon } from './moon';
import { Sun } from './sun';

export const ThemeSwitcher: FC = () => (
	<Button
		aria-label="Toggle theme"
		className="c-theme-switcher"
		onClick={() => {
			const html = document.documentElement;

			html.classList.toggle('theme-dark');
			html.classList.toggle('theme-light');
		}}
		type="button"
		unstyled
	>
		<svg height={144} viewBox="0 0 189 144" width={189} xmlns="http://www.w3.org/2000/svg">
			<g fill="none" transform="translate(3.576 .35)">
				<Moon />
				<Sun />
			</g>
		</svg>
	</Button>
);

export default ThemeSwitcher;
