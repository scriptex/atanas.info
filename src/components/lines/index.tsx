import type { FC } from 'react';

export const Lines: FC = () => (
	<>
		<div className="lines">
			<div className="line line--vertical" />
			<div className="line line--vertical" />
			<div className="line line--vertical" />
		</div>

		<div className="lines">
			<div className="line line--horizontal" />
			<div className="line line--horizontal" />
			<div className="line line--horizontal" />
		</div>
	</>
);

export default Lines;
