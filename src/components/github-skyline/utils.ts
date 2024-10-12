import { SceneEventArgs } from 'react-babylonjs';

import {
	Color3,
	Color4,
	CubeTexture,
	Mesh,
	MeshBuilder,
	Scene as SceneCore,
	SceneLoader,
	StandardMaterial,
	Texture,
	Vector3
} from '@babylonjs/core';
import { GridMaterial } from '@babylonjs/materials';

import { SIZE } from './constants';

export type GithubSkylineProps = Readonly<{
	background: string | undefined;
	file: string | undefined;
	index: number;
	texture: string | undefined;
}>;

export const onSceneMount = (args: SceneEventArgs, props: GithubSkylineProps, onLoad: () => void): void => {
	SceneLoader.Append('', props.file, args.scene, (scene: SceneCore) => {
		const skySphere = Mesh.CreateSphere('skySphere', 8, SIZE, scene);
		const skySphereMaterial = new StandardMaterial('skySphereMaterial', scene);
		const ground = MeshBuilder.CreateGround('ground', {
			height: SIZE,
			width: SIZE
		});
		const groundMaterial = new GridMaterial('groundMaterial', scene);

		if (props.texture) {
			const cubeTexture = CubeTexture.CreateFromPrefilteredData(props.texture, scene);

			scene.environmentTexture = cubeTexture;
			scene.environmentTexture.level = 2;
		}

		scene.clearColor = new Color4(0.01, 0.01, 0.01, 0);

		skySphere.position = Vector3.Zero();
		skySphere.position.y += 49;

		skySphereMaterial.backFaceCulling = false;

		if (props.background) {
			skySphereMaterial.emissiveTexture = new Texture(props.background, scene);
			skySphereMaterial.emissiveTexture.coordinatesMode = Texture.PROJECTION_MODE;
			skySphereMaterial.emissiveTexture.updateSamplingMode(Texture.BILINEAR_SAMPLINGMODE);
			skySphereMaterial.emissiveTexture.wrapU = Texture.MIRROR_ADDRESSMODE;
			skySphereMaterial.emissiveTexture.wrapV = Texture.MIRROR_ADDRESSMODE;
		}

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
