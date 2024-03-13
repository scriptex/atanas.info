import type { FC } from 'react';

import type { GeneralInsight } from '@scripts/stats';

type Props = {
	data: GeneralInsight[];
	title: string;
};

export const StatsEntry: FC<Readonly<Props>> = ({ data, title }: Props) => (
	<div className="c-section__entry c-section__entry--no-background">
		<div className="o-shell">
			{title && <h3>{title}</h3>}

			<ul className="c-section__list">
				{data.map((item: GeneralInsight) => (
					<li key={item.index}>
						<span>{item.title}:</span>
						<strong>{item.value}</strong>
					</li>
				))}
			</ul>
		</div>
	</div>
);

export default StatsEntry;
