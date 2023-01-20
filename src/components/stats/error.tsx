import type { FC } from 'react';

interface Props {
	network: 'Github' | 'Gitlab';
}

export const StatsError: FC<Readonly<Props>> = ({ network }: Props) => (
	<div className="c-section__entry c-section__entry--no-background">
		<div className="o-shell">
			<h3>{network} profile statistics</h3>

			<p>Failed fetching data from {network}. Please check again in 4 hours.</p>
		</div>
	</div>
);

export default StatsError;
