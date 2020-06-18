#!/usr/bin/env ts-node-script

import { resolve } from 'path';
import { writeFileSync } from 'fs';

import * as puppeteer from 'puppeteer';
import { v2 as cloudinary } from 'cloudinary';
import { config as dotenvConfig } from 'dotenv';

import { Project, projects } from '../src/assets/scripts/projects';

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

interface IndexedList<T> {
	readonly [x: string]: T;
}

const FOLDER = 'atanas.info';

async function createScreenshot(url: string, name: string): Promise<any> {
	console.log(`Launching new browser for ${name}...`);
	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox']
	});

	console.log(`Opening new browser page for ${name}...`);
	const page = await browser.newPage();

	console.log(`Navigating to ${url} for ${name}...`);
	await page.goto(url, { waitUntil: 'networkidle0' });
	await page.waitFor(2000);

	await page.setViewport({
		width: 1280,
		height: 1000
	});

	console.log(`Taking screenshot for ${name}...`);
	const shotResult = await page
		.screenshot({ fullPage: false })
		.then(res => res)
		.catch(e => {
			console.error(`Error capturing screenshot for ${name}`, e);
			return false;
		});

	console.log(`Closing browser for ${name}...`);
	await browser.close();

	if (shotResult) {
		console.log(`Uploading screenshot for ${name}...`);

		return upload(shotResult as Buffer, { public_id: `${FOLDER}/${name}` }, name);
	} else {
		return null;
	}
}

function upload(shotResult: Buffer, options: IndexedList<string>, name: string): Promise<any> {
	return new Promise((resolve, reject) => {
		cloudinary.uploader
			.upload_stream(options, (error, result) => {
				if (error) {
					console.error('Upload to cloudinary failed: ', error);
					reject(error);
				}

				console.log(`Uploaded screenshot for ${name}...`);
				resolve(result);
			})
			.end(shotResult);
	});
}

async function createScreenshots(pages: Project[]): Promise<void> {
	await cloudinary.api.delete_resources_by_prefix(`${FOLDER}/`);

	const results = [];

	let newProjects = [...projects];

	for (const page of pages) {
		console.log('-----');
		if (!page.url) {
			console.log(`${page.title} does not have a valid URL.`);
		} else {
			try {
				const result: any = await createScreenshot(page.url, page.title);

				if (result) {
					newProjects = newProjects.map((project: Project) => {
						if (project.title === page.title) {
							return {
								...project,
								image: result.secure_url
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
		writeFileSync(
			resolve(__dirname, '../src/assets/scripts/projects-list.json'),
			JSON.stringify(newProjects, null, 2)
		);

		process.exit();
	});
}

createScreenshots(projects);
