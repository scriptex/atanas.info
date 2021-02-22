import * as React from 'react';
import '@babylonjs/loaders';
import { Engine, Scene, SceneEventArgs } from 'react-babylonjs';
import { Color4, Scene as SceneType, SceneLoader, Vector3, StandardMaterial, Color3 } from '@babylonjs/core';

interface Props {
	readonly file: string;
	readonly index: number;
}

export const GithubSkyline = (props: Props): React.ReactElement => (
	<div className="c-canvas-3d">
		<Engine antialias adaptToDeviceRatio canvasId={`babylonJS${props.index}`}>
			<Scene
				clearColor={new Color4(255, 255, 255, 1)}
				onSceneMount={(args: SceneEventArgs) => {
					SceneLoader.Append('./stl/', props.file, args.scene, (scene: SceneType) => {
						const mesh = scene.meshes[0];
						const material = new StandardMaterial('test', scene);

						material.ambientColor = new Color3(100, 50, 20);
						material.diffuseColor = new Color3(20, 50, 100);

						mesh.material = new StandardMaterial('test', scene);
					});
				}}
			>
				<arcRotateCamera name="camera" beta={1} alpha={-2} target={Vector3.Zero()} radius={200} />

				<hemisphericLight name="light" intensity={0.7} direction={new Vector3(5, 15, 2)} />
			</Scene>
		</Engine>
	</div>
);

export default GithubSkyline;
