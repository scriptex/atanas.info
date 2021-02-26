#!/usr/bin/env ts-node-script

import { resolve } from 'path';
import { writeFileSync } from 'fs';

import * as puppeteer from 'puppeteer';
import { config as dotenvConfig } from 'dotenv';
import { v2 as cloudinary, UploadApiOptions, UploadApiResponse } from 'cloudinary';

import * as pckg from '../package.json';
import { Project, projects } from '../src/scripts/projects';

if (!projects || !projects.length) {
	console.log('No projects found.');
	process.exit();
}

dotenvConfig();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET
});

const FOLDER: string = pckg.name;

const uploadOptions = (name: string): UploadApiOptions => ({
	public_id: `${FOLDER}/${name}`,
	invalidate: true
});

async function createScreenshot(url: string, name: string, timeout = 2000): Promise<UploadApiResponse | null> {
	console.log(`Launching new browser for ${name}...`);
	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox']
	});

	console.log(`Opening new browser page for ${name}...`);
	const page = await browser.newPage();

	await page.setViewport({
		width: 1280,
		height: 1000
	});

	console.log(`Navigating to ${url} for ${name}...`);
	await page.goto(url, { waitUntil: 'networkidle0' });
	await page.waitForTimeout(timeout);

	console.log(`Taking screenshot for ${name}...`);
	const shotResult = await page
		.screenshot({ fullPage: false })
		.then(res => res)
		.catch(e => {
			console.error(`Error capturing screenshot for ${name}`, e);
			return null;
		});

	console.log(`Closing browser for ${name}...`);
	await browser.close();

	if (shotResult) {
		console.log(`Uploading screenshot for ${name}...`);

		return upload(shotResult as Buffer, uploadOptions(name), name);
	} else {
		return null;
	}
}

function upload(shotResult: Buffer, options: UploadApiOptions, name: string): Promise<UploadApiResponse> {
	return new Promise((success, fail) => {
		cloudinary.uploader
			.upload_stream(options, (error, result) => {
				if (error) {
					console.error('Upload to cloudinary failed: ', error);
					fail(error);
				}

				console.log(`Uploaded screenshot for ${name}...`);

				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				success(result!);
			})
			.end(shotResult);
	});
}

async function createScreenshots(allPages: Project[]): Promise<void> {
	// await cloudinary.api.delete_resources_by_prefix(`${FOLDER}/`);

	const results: any[] = [];

	let newProjects: Project[] = [...projects];

	const pages: Project[] = allPages.filter((page: Project) => !page.skip);

	for (const page of pages) {
		console.log('-----');
		if (!page.url) {
			console.log(`${page.title} does not have a valid URL.`);
		} else {
			try {
				const result = await createScreenshot(page.url, page.title.replace(/\s/g, '-'), page.timeout);

				if (result) {
					newProjects = newProjects.map((project: Project) => {
						if (project.title === page.title) {
							return {
								...project,
								image: result.secure_url.replace(/^(.*)(\/v\d*)(.*)$/, '$1$3')
							};
						}

						return project;
					});

					results.push(result);
				}
			} catch (e) {
				console.error(`Error capturing screenshot for page ${page.title}`, e);
			}
		}
	}

	Promise.all(results).then(() => {
		writeFileSync(resolve(__dirname, '../src/scripts/projects-list.json'), JSON.stringify(newProjects, null, 2));
		writeFileSync(resolve(__dirname, '../src/scripts/cloudinary-data.json'), JSON.stringify(results, null, 2));

		process.exit();
	});
}

createScreenshots(projects);
