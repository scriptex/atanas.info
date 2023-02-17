import Link from 'next/link';
import { css } from '@emotion/react';
import { FC, useState } from 'react';

import { flex } from '@scripts/styles';
import { Routes } from '@data/routes';
import { Nav, Icon, ThemeSwitcher } from '@components';

export const Header: FC = () => {
	const [open, setOpen] = useState(false);

	return (
		<header css={headerStyles}>
			<Link href={Routes.HOME} title="Back to homepage">
				<Icon name="svg-logo" className="c-svg-logo" />
			</Link>

			<div css={actionsStyles}>
				<button
					name="menu-toggle"
					onClick={(): void => setOpen(!open)}
					className="c-nav__toggle"
					aria-label="Toggle menu"
				>
					<span style={{ flexDirection: 'row' }}></span>

					<span></span>

					<span></span>
				</button>

				<ThemeSwitcher />
			</div>

			<Nav onClick={() => setOpen(false)} />
		</header>
	);
};

const headerStyles = css`
	${flex()};
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 30;
	padding: 1rem;
	background-color: rgba(var(--secondary), 0.7);

	a {
		color: var(--color-primary);
		display: block;
		position: relative;

		svg {
			display: block;
		}

		img {
			width: 3.13rem;
			height: 3.13rem;
			display: block;
			position: absolute;
			top: 0;
			left: 0;
		}
	}

	.theme-light & {
		background-color: rgba(var(--primary), 0.7);
	}
`;

const actionsStyles = css`
	${flex()}
`;

export default Header;
