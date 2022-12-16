import * as React from 'react';

import { Sun, Moon } from '@components';

export const ThemeSwitcher: React.FC = () => {
	const width = 189;
	const height = 144;

	return (
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
			<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
				<g fill="none" transform="translate(3.576 .35)">
					<Moon />
					<Sun />
				</g>
			</svg>
		</button>
	);
};

export default ThemeSwitcher;
