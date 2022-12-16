import * as React from 'react';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';

import { composeClassName } from '@scripts/shared';
import { FundingNetworkData, fundingNetworks } from '@data/funding';
import { Button, FundingCrypto, FundingNetwork } from '@components';

gsap.registerPlugin(Draggable);

export const Funding: React.FC = () => {
	const knob = React.useRef(null);
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		if (knob.current) {
			Draggable.create(knob.current, { type: 'rotation' });
		}
	}, [knob.current]);

	return (
		<div className={composeClassName('c-funding', open ? ['open'] : [])}>
			<Button onClick={() => setOpen(true)} className="c-btn--small">
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
