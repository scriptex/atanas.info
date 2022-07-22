import * as React from 'react';

export const Lines: React.FC = () => (
	<>
		<div className="lines">
			{Array(3)
				.fill(0)
				.map((_, i) => (
					<div key={i} className="line line--vertical" />
				))}
		</div>

		<div className="lines">
			{Array(3)
				.fill(0)
				.map((_, i) => (
					<div key={i} className="line line--horizontal" />
				))}
		</div>
	</>
);

export default Lines;
