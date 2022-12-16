import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Icon } from '@components';
import { composeClassName } from '@scripts/shared';

interface Props {
	name: string;
	title: string;
	wallet: string;
}

export const FundingCrypto: React.FC<Readonly<Props>> = ({ name, title, wallet }: Props) => {
	const [copied, setCopied] = React.useState(false);

	React.useEffect(() => {
		let timeout: NodeJS.Timeout | null = null;

		if (copied) {
			timeout = setTimeout(() => {
				setCopied(false);
			}, 2000);
		}

		return () => {
			if (typeof timeout === 'number') {
				clearTimeout(timeout);
			}
		};
	}, [copied]);

	return (
		<CopyToClipboard text={wallet} onCopy={() => setCopied(true)}>
			<div className={composeClassName('c-funding__crypto', [name])}>
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
