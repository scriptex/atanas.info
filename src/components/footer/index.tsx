import type { FC } from 'react';
import { useEffect } from 'react';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ExternalLink, Funding, Referral } from '@components';

import type { FundingNetwork } from '@scripts/cms';
import { formatDate } from '@scripts/shared';

import BraintrustHire from '@data/lotties/hire1.json';
import ToptalHire from '@data/lotties/hire2.json';
import BraintrustTalent from '@data/lotties/talent.json';
import { updatedAt } from '@data/updated-at';

type Props = {
	funding: FundingNetwork[];
};

export const Footer: FC<Readonly<Props>> = ({ funding }) => {
	useEffect(() => {
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

				<div className="elfsight-app-42e44979-7e5f-4031-9231-8ea12a0806ed" data-elfsight-app-lazy />

				<div className="c-referrals">
					<Swiper autoplay={{ delay: 10000 }} loop modules={[Autoplay]}>
						<SwiperSlide>
							<Referral
								animation={BraintrustTalent}
								button="Apply to Braintrust"
								href="https://app.usebraintrust.com/r/atanas1/"
								subtitle="Your work. Your network. Your future."
								title="Access the world's best freelance jobs"
							/>
						</SwiperSlide>

						<SwiperSlide>
							<Referral
								animation={ToptalHire}
								button="Hire top talent"
								href="https://www.toptal.com/qZg2WZ/worlds-top-talent"
								subtitle="Trusted by leading brands and startups."
								title="Hire the Top 3% of Freelance Talent®"
							/>
						</SwiperSlide>

						<SwiperSlide>
							<Referral
								animation={BraintrustHire}
								button="Hire on Braintrust"
								href="https://app.usebraintrust.com/r/atanas1/"
								subtitle="Innovate, fast."
								title="Hire top tech, design, marketing talent"
							/>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
