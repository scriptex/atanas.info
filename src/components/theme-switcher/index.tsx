import type { FC } from 'react';

import { Sun } from './sun';
import { Moon } from './moon';
import { Button } from '@components';

export const ThemeSwitcher: FC = () => (
	<Button
		type="button"
		onClick={() => {
			const html = document.documentElement;

			html.classList.toggle('theme-dark');
			html.classList.toggle('theme-light');
		}}
		unstyled
		aria-label="Toggle theme"
		className="c-theme-switcher"
	>
		<svg xmlns="http://www.w3.org/2000/svg" width={189} height={144} viewBox="0 0 189 144">
			<g fill="none" transform="translate(3.576 .35)">
				<Moon />
				<Sun />
			</g>
		</svg>
	</Button>
);

export default ThemeSwitcher;
