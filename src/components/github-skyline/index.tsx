/* eslint-disable react/no-unknown-property */
import '@babylonjs/loaders';
import { FC, useEffect, useState } from 'react';

import { Engine, Scene, SceneEventArgs } from 'react-babylonjs';

import { Vector3 } from '@babylonjs/core';

import { Button, Loader } from '@components';
import { composeClassName } from '@scripts/shared';

import { SIZE } from './constants';
import { GithubSkylineProps, onSceneMount } from './utils';

export const GithubSkyline: FC<Readonly<GithubSkylineProps>> = (props: GithubSkylineProps) => {
	const [loading, setLoading] = useState(true);
	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		document.documentElement.classList[expanded ? 'add' : 'remove']('has-expanded');

		return () => {
			document.documentElement.classList.remove('has-expanded');
		};
	}, [expanded]);

	return (
		<div className={composeClassName('c-skyline__item', expanded ? ['expanded'] : [])}>
			{loading && <Loader />}

			<Button className="c-btn--small" onClick={() => setExpanded(!expanded)} type="button">
				{expanded ? 'Collapse' : 'Expand'}
			</Button>

			<Engine adaptToDeviceRatio antialias canvasId={`c-skyline__item-${props.index}`}>
				<Scene onSceneMount={(args: SceneEventArgs) => onSceneMount(args, props, () => setLoading(false))}>
					<arcRotateCamera
						alpha={-2}
						beta={1}
						fov={0.8}
						lowerRadiusLimit={50}
						maxZ={SIZE}
						minZ={0.1}
						name="camera"
						panningSensibility={0}
						radius={75}
						target={Vector3.Zero()}
						upperBetaLimit={Math.PI / 2}
						upperRadiusLimit={100}
						useAutoRotationBehavior
						wheelPrecision={1}
					/>

					<autoRotationBehavior
						idleRotationSpeed={-0.1}
						idleRotationSpinupTime={SIZE}
						idleRotationWaitTime={SIZE}
					/>

					<hemisphericLight direction={new Vector3(0, 1, -1)} intensity={0.5} name="light" />
				</Scene>
			</Engine>
		</div>
	);
};

export default GithubSkyline;
