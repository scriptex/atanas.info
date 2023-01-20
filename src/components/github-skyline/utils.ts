import { GridMaterial } from '@babylonjs/materials';
import { SceneEventArgs } from 'react-babylonjs';
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

import { SIZE, ROOT } from './constants';

export interface GithubSkylineProps {
	readonly file: string;
	readonly index: number;
}

export const onSceneMount = (args: SceneEventArgs, props: GithubSkylineProps, onLoad: () => void): void => {
	SceneLoader.Append(`${ROOT}/`, props.file, args.scene, (scene: SceneCore) => {
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
