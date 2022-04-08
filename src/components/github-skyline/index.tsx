/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as React from 'react';
import '@babylonjs/loaders';
import { GridMaterial } from '@babylonjs/materials';
import { Scene, Engine, SceneEventArgs } from 'react-babylonjs';
import {
	Mesh,
	Color3,
	Color4,
	Vector3,
	Texture,
	CubeTexture,
	MeshBuilder,
	SceneLoader,
	StandardMaterial,
	Scene as SceneCore
} from '@babylonjs/core';

import { Loader } from '..';

interface Props {
	readonly file: string;
	readonly index: number;
}

const ROOT = './stl';
const SIZE = 750;

// codebeat:disable[ABC,LOC,BLOCK_NESTING]
export const onSceneMount = (args: SceneEventArgs, props: Props, onLoad: () => void): void => {
	SceneLoader.Append('./stl/', props.file, args.scene, (scene: SceneCore) => {
		const cubeTexture = CubeTexture.CreateFromPrefilteredData(`${ROOT}/texture.dds`, scene);
		const skySphere = Mesh.CreateSphere('skySphere', 8, SIZE, scene);
		const skySphereMaterial = new StandardMaterial('skySphereMaterial', scene);
		const ground = MeshBuilder.CreateGround('ground', {
			width: SIZE,
			height: SIZE
		});
		const groundMaterial = new GridMaterial('groundMaterial', scene);

		scene.environmentTexture = cubeTexture;
		scene.environmentTexture.level = 2;
		scene.clearColor = new Color4(0.01, 0.01, 0.01, 0);

		skySphere.position = Vector3.Zero();
		skySphere.position.y += 49;

		skySphereMaterial.backFaceCulling = false;
		skySphereMaterial.emissiveTexture = new Texture(`${ROOT}/bg.png`, scene);
		skySphereMaterial.emissiveTexture.coordinatesMode = Texture.PROJECTION_MODE;
		skySphereMaterial.emissiveTexture.updateSamplingMode(Texture.BILINEAR_SAMPLINGMODE);
		skySphereMaterial.emissiveTexture.wrapU = Texture.MIRROR_ADDRESSMODE;
		skySphereMaterial.emissiveTexture.wrapV = Texture.MIRROR_ADDRESSMODE;
		skySphereMaterial.diffuseColor = Color3.Black();
		skySphereMaterial.specularColor = Color3.Black();

		skySphere.material = skySphereMaterial;
		skySphere.material.fogEnabled = false;

		ground.material = groundMaterial;
		ground.material.backFaceCulling = false;
		ground.position.y -= 10;

		groundMaterial.gridRatio = 10;
		groundMaterial.majorUnitFrequency = 0;
		groundMaterial.opacity = 0.99;
		groundMaterial.minorUnitVisibility = 2;
		groundMaterial.lineColor = new Color3(109 / 255, 150 / 255, 219 / 255);

		scene.fogMode = SceneCore.FOGMODE_LINEAR;
		scene.fogStart = 50;
		scene.fogEnd = 250;
		scene.fogColor = new Color3(4 / 255, 14 / 255, 34 / 255);

		onLoad();
	});
};

export const GithubSkyline = (props: Props): React.ReactElement => {
	const [loading, setLoading] = React.useState(true);

	return (
		<div className="c-skyline__item">
			{loading && <Loader />}

			{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
			{/* @ts-ignore */}
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
						useAutoRotationBehavior={true}
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
// codebeat:enable[ABC,LOC,BLOCK_NESTING]

export default GithubSkyline;
