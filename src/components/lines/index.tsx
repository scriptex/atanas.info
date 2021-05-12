import * as React from 'react';

export const Lines: React.FC = () => (
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
