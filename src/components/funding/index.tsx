import * as React from 'react';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Icon } from '..';
import { isPrerendering } from '../../scripts/shared';

gsap.registerPlugin(Draggable);

interface ItemProps {
	url: string;
	icon: string;
	name: string;
	matrix: string;
}

export const FundingItem: React.FC<ItemProps> = (props: ItemProps) => (
	<g transform={props.matrix} className="c-funding__item">
		<path fill="none" d="M250,250 l250,0 A250,250 0 0,0 375,33.49364905389035 z" />

		<a rel="noopener noreferrer" target="_blank" href={props.url}>
			<text
				x="398"
				y="200"
				fill="var(--color-secondary)"
				fontSize="1em"
				textAnchor="middle"
				transform="rotate(60 397.2243347167969 165)"
			>
				{props.name}
			</text>

			{isPrerendering ? null : (
				<use
					x="377.2243347167969"
					y="145"
					width="40"
					height="40"
					xlinkHref={`#svg-${props.icon}`}
					transform="rotate(60 397.2243347167969 165)"
				/>
			)}
		</a>
	</g>
);

interface CryptoProps {
	name: string;
	title: string;
	wallet: string;
}

export const FundingCrypto: React.FC<CryptoProps> = ({ name, title, wallet }: CryptoProps) => {
	const [copied, setCopied] = React.useState(false);

	return (
		<CopyToClipboard text={wallet} onCopy={() => setCopied(true)}>
			<div className={`c-funding__crypto c-funding__crypto--${name}`}>
				<h6>{title}</h6>

				<button title={title}>
					<Icon name={`svg-${name}`} className="c-funding__crypto-icon" />
				</button>

				{copied ? (
					<small>✅ Copied!</small>
				) : (
					<small>
						<em>Click to copy wallet address</em>
					</small>
				)}
			</div>
		</CopyToClipboard>
	);
};

export const Funding: React.FC = () => {
	const knob = React.useRef(null);
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		Draggable.create(knob.current, { type: 'rotation' });
	}, []);

	return (
		<div className={`c-funding${open ? ' c-funding--open' : ''}`}>
			<button onClick={() => setOpen(true)} className="c-btn c-btn--small">
				Sponsor me
			</button>

			<div className="c-funding__backdrop" onClick={() => setOpen(false)} />

			<svg viewBox="-100 -100 700 700" ref={knob} className="c-funding__knob">
				<g>
					<FundingItem
						url="https://github.com/sponsors/scriptex"
						icon="github"
						name="Github"
						matrix="matrix(1,0,0,1,0,0)"
					/>

					<FundingItem
						url="https://www.patreon.com/atanas"
						icon="patreon"
						name="Patreon"
						matrix="matrix(0.5,-0.86602,0.86602,0.5,-91.5063509461097,341.5063509461096)"
					/>

					<FundingItem
						url="https://paypal.me/scriptex"
						icon="paypal"
						name="PayPal"
						matrix="matrix(-0.49999,-0.86602,0.86602,-0.49999,158.49364905389024,591.5063509461097)"
					/>

					<FundingItem
						url="https://ko-fi.com/scriptex"
						icon="ko-fi"
						name="Ko-fi"
						matrix="matrix(-1,0,0,-1,500,500)"
					/>

					<FundingItem
						url="https://liberapay.com/scriptex"
						icon="liberapay"
						name="Liberapay"
						matrix="matrix(-0.5,0.86602,-0.86602,-0.5,591.5063509461097,158.49364905389052)"
					/>

					<FundingItem
						url="https://issuehunt.io/u/scriptex"
						icon="issuehunt"
						name="Issuehunt"
						matrix="matrix(0.5,0.86602,-0.86602,0.5,341.50635094610965,-91.50635094610965)"
					/>
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
