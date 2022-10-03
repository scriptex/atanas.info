/* eslint-disable react/no-unknown-property */
import * as React from 'react';
import '@babylonjs/loaders';
import { Vector3 } from '@babylonjs/core';
import { Scene, Engine, SceneEventArgs } from 'react-babylonjs';

import { SIZE } from './constants';
import { Button, Loader } from '..';
import { composeClassName } from '../../scripts/shared';
import { onSceneMount, GithubSkylineProps } from './utils';

export const GithubSkyline: React.FC<GithubSkylineProps> = (props: GithubSkylineProps) => {
	const [loading, setLoading] = React.useState(true);
	const [expanded, setExpanded] = React.useState(false);

	React.useEffect(() => {
		document.documentElement.classList[expanded ? 'add' : 'remove']('has-expanded');

		return () => {
			document.documentElement.classList.remove('has-expanded');
		};
	}, [expanded]);

	return (
		<div className={composeClassName('c-skyline__item', expanded ? ['expanded'] : [])}>
			{loading && <Loader />}

			<Button type="button" onClick={() => setExpanded(!expanded)} className="c-btn--small">
				{expanded ? 'Collapse' : 'Expand'}
			</Button>

			<Engine antialias adaptToDeviceRatio canvasId={`c-skyline__item-${props.index}`}>
				<Scene onSceneMount={(args: SceneEventArgs) => onSceneMount(args, props, () => setLoading(false))}>
					<arcRotateCamera
						fov={0.8}
						name="camera"
						beta={1}
						minZ={0.1}
						maxZ={SIZE}
						alpha={-2}
						target={Vector3.Zero()}
						radius={75}
						wheelPrecision={1}
						upperBetaLimit={Math.PI / 2}
						lowerRadiusLimit={50}
						upperRadiusLimit={100}
						panningSensibility={0}
						useAutoRotationBehavior
					/>

					<autoRotationBehavior
						idleRotationSpeed={-0.1}
						idleRotationWaitTime={SIZE}
						idleRotationSpinupTime={SIZE}
					/>

					<hemisphericLight name="light" intensity={0.5} direction={new Vector3(0, 1, -1)} />
				</Scene>
			</Engine>
		</div>
	);
};

export default GithubSkyline;
