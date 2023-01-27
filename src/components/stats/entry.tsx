import type { FC } from 'react';

import { GeneralInsight } from '@scripts/stats';

type Props = {
	data: GeneralInsight[];
	title: string;
};

export const StatsEntry: FC<Readonly<Props>> = ({ title, data }: Props) => (
	<div className="c-section__entry c-section__entry--no-background">
		<div className="o-shell">
			<h3>{title}</h3>

			<ul className="c-section__list">
				{data.map((item: GeneralInsight, i: number) => (
					<li key={i}>
						<span>{item.title}:</span>
						<strong>{item.value}</strong>
					</li>
				))}
			</ul>
		</div>
	</div>
);

export default StatsEntry;
