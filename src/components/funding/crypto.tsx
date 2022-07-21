import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Icon } from '..';

interface Props {
	name: string;
	title: string;
	wallet: string;
}

export const FundingCrypto: React.FC<Props> = ({ name, title, wallet }: Props) => {
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

export default FundingCrypto;
