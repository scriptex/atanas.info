import { FC, useEffect, useState } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Button, Icon } from '@components';
import { composeClassName } from '@scripts/shared';

type Props = {
	name: string;
	title: string;
	wallet: string;
};

export const FundingCrypto: FC<Readonly<Props>> = ({ name, title, wallet }: Props) => {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
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
		<CopyToClipboard onCopy={() => setCopied(true)} text={wallet}>
			<div className={composeClassName('c-funding__crypto', [name])}>
				<h6>{title}</h6>

				<Button title={title} type="button" unstyled>
					<Icon className="c-funding__crypto-icon" name={`svg-${name}`} />
				</Button>

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
