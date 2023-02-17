import gsap from 'gsap';
import { FC, useRef, useState, useEffect } from 'react';

import { Button } from '@components';
import { FundingCrypto } from './crypto';
import { FundingNetwork } from './network';
import { composeClassName } from '@scripts/shared';
import { fundingNetworks, FundingNetworkData } from '@data/funding';

export const Funding: FC = () => {
	const knob = useRef(null);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		import('gsap/Draggable').then(({ default: Draggable }) => {
			gsap.registerPlugin(Draggable);

			if (knob.current) {
				Draggable.create(knob.current, { type: 'rotation' });
			}
		});
	}, []);

	return (
		<div className={composeClassName('c-funding', open ? ['open'] : [])}>
			<Button onClick={() => setOpen(true)} variant="small">
				Sponsor me
			</Button>

			<div className="c-funding__backdrop" onClick={() => setOpen(false)} />

			<svg viewBox="-100 -100 700 700" ref={knob} className="c-funding__knob">
				<g>
					{fundingNetworks.map((network: FundingNetworkData, i: number) => (
						<FundingNetwork key={i} {...network} />
					))}
				</g>

				<g className="c-funding__trigger" role="button" onClick={() => setOpen(false)}>
					<circle cx="250" cy="250" r="30" />

					<text textAnchor="middle" x="250" y="260" fill="var(--color-primary)" fontSize="2.5em">
						{open ? '-' : '+'}
					</text>
				</g>
			</svg>

			<FundingCrypto name="bitcoin" title="Donate Bitcoin" wallet="39fTgBStghawKyJdTd83Qg8cFkq5MQprLT" />

			<FundingCrypto
				name="shiba-inu"
				title="Donate Shiba Inu"
				wallet="0x2c811dBd715154ead14f8E25340ec831655dCA94"
			/>
		</div>
	);
};

export default Funding;
