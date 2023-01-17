import type { FC } from 'react';

interface Props {
	url: string;
	icon: string;
	name: string;
	matrix: string;
}

export const FundingNetwork: FC<Props> = ({ url, icon, name, matrix }: Props) => (
	<g transform={matrix} className="c-funding__item">
		<path fill="none" d="M250,250 l250,0 A250,250 0 0,0 375,33.49364905389035 z" />

		<a rel="noopener noreferrer" target="_blank" href={url}>
			<text
				x="398"
				y="200"
				fill="var(--color-secondary)"
				fontSize="1em"
				textAnchor="middle"
				transform="rotate(60 397.2243347167969 165)"
			>
				{name}
			</text>

			<use
				x="377.2243347167969"
				y="145"
				width="40"
				height="40"
				xlinkHref={`#svg-${icon}`}
				transform="rotate(60 397.2243347167969 165)"
			/>
		</a>
	</g>
);

export default FundingNetwork;
