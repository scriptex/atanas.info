import type { FC } from 'react';

import type { FundingNetwork as FundingNetworkType } from '@scripts/cms';

type Props = Omit<FundingNetworkType, 'index'>;

export const FundingNetwork: FC<Props> = ({ matrix, name, url }: Props) => (
	<g className="c-funding__item" transform={matrix}>
		<path d="M250,250 l250,0 A250,250 0 0,0 375,33.49364905389035 z" fill="none" />

		<a href={url} rel="noopener noreferrer" target="_blank">
			<text
				fill="var(--color-secondary)"
				fontSize="1em"
				textAnchor="middle"
				transform="rotate(60 397.2243347167969 165)"
				x="398"
				y="200"
			>
				{name}
			</text>

			<use
				height="40"
				transform="rotate(60 397.2243347167969 165)"
				width="40"
				x="377.2243347167969"
				xlinkHref={`#svg-${name.toLowerCase()}`}
				y="145"
			/>
		</a>
	</g>
);

export default FundingNetwork;
