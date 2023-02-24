import { css } from '@emotion/react';
import { FC, useEffect } from 'react';

import { updatedAt } from '@data/updated-at';
import { formatDate } from '@scripts/shared';
import { Funding, ExternalLink, Referral } from '@components';
import { onTabletPortrait } from '@scripts/styles';

export const Footer: FC = () => {
	useEffect(() => {
		// @ts-ignore
		import('scriptex-socials');
	}, []);

	return (
		<footer css={mainStyles}>
			<div className="o-shell o-shell--flex" css={shellStyles}>
				<p>
					&copy; {new Date().getFullYear()} Atanas Atanasov. <br className="visible-xs-block" />
					All rights reserved.
				</p>

				<social-links />
			</div>

			<div className="o-shell text-center">
				<small>Designed and developed by Atanas Atanasov.</small>

				<small>
					All code is licensed under{' '}
					<ExternalLink href="https://github.com/scriptex/atanas.info/blob/master/LICENSE">
						MIT license
					</ExternalLink>{' '}
					and available <ExternalLink href="https://github.com/scriptex/atanas.info/">on Github</ExternalLink>
					.
				</small>

				<small>Updated at {formatDate(updatedAt * 1000, 'dd MMM yyyy HH:mm:ss')}</small>

				<Funding />

				<Referral />
			</div>
		</footer>
	);
};

const mainStyles = css`
	position: relative;
	z-index: 25;
	padding: 2rem 0;
	background-color: var(--color-secondary);

	p {
		margin: 0;
	}

	small {
		display: block;
		padding-bottom: 0.25rem;

		&:last-of-type {
			padding-bottom: 1.75rem;
		}
	}

	iframe {
		display: block;
		margin: 0.5rem auto 0;
	}

	social-links {
		display: block;
	}

	${onTabletPortrait`
		text-align: center;

		p {
			flex: 0 0 100%;
			margin-bottom: 1rem;
		}

		social-links {
			flex: 0 0 100%;
		}
	`};
`;

const shellStyles = css`
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 1rem;
`;

export default Footer;
