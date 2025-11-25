import type { FC } from 'react';
import { useEffect, useMemo, useState } from 'react';

import { Button, Loader } from '@components';

import { composeClassName } from '@scripts/shared';

import type { GithubSkylineProps } from './utils';
import { createEngine } from './utils';

export const GithubSkyline: FC<Readonly<GithubSkylineProps>> = (props: GithubSkylineProps) => {
	const canvasId = useMemo(() => `c-skyline__item-${props.index}`, [props.index]);

	const [loading, setLoading] = useState(true);
	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		document.documentElement.classList[expanded ? 'add' : 'remove']('has-expanded');

		return () => {
			document.documentElement.classList.remove('has-expanded');
		};
	}, [expanded]);

	useEffect(() => {
		const engine = createEngine(canvasId, props, () => setLoading(false));
		const onResize = () => engine.resize();

		window.addEventListener('resize', onResize, false);

		return () => {
			window.removeEventListener('resize', onResize, false);
		};
	}, [canvasId, props]);

	return (
		<div className={composeClassName('c-skyline__item', expanded ? ['expanded'] : [])}>
			{loading && <Loader />}

			<Button className="c-btn--small" onClick={() => setExpanded(!expanded)} type="button">
				{expanded ? 'Collapse' : 'Expand'}
			</Button>

			<canvas id={canvasId} />
		</div>
	);
};

export default GithubSkyline;
