import { FC, useEffect } from 'react';

import { updatedAt } from '@data/updated-at';
import { formatDate } from '@scripts/shared';
import type { FundingNetwork } from '@scripts/cms';
import { Funding, ExternalLink, Referral } from '@components';

type Props = {
	funding: FundingNetwork[];
};

export const Footer: FC<Readonly<Props>> = ({ funding }) => {
	useEffect(() => {
		// @ts-ignore
		import('scriptex-socials');
	}, []);

	return (
		<footer className="c-footer">
			<div className="o-shell o-shell--flex">
				<p>
					&copy; {new Date().getFullYear()} Atanas Atanasov. <br className="visible-xs-block" />
					All rights reserved.
				</p>

				<social-links></social-links>
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

				<Funding data={funding} />

				<Referral />
			</div>
		</footer>
	);
};

export default Footer;
