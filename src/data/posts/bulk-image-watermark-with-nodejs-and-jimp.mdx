It's been almost two months since I released Mama Culinar - my wife's culinary blog which is based on WordPress. Yesterday I got a new challenging request from her - she wanted to have a watermark on the images attached to recipes.

Now you will say that there are many plugins out there which help you do exactly this but when I checked, most of them were outdated - they weren't tested with the past three versions of WordPress or had too negative reviews.

So I decided to use another approach - why not code it myself? I chose NodeJS as I am familiar with its APIs and it looks like the best options when it comes to heavy data manipulation due to its asynchronous nature.

I started by creating a new NodeJS project:

```sh
mkdir bulk-watermark && cd bulk-watermark && yarn init -y
```

The command above creates a new folder called "bulk-watermark", changes the current working directory to this new folder and creates a "package.json" file with default parameters. You can and will edit this file later.

Then I installed the dependencies. I needed `jimp`, `glob` and `dotenv` so I installed these packages:

```sh
yarn add jimp glob dotenv
```

Then I created a new `.env` file which contains my environmental variables (or configuration settings):

```sh
# Turns on/off console logging
WATERMARK_DEBUG=true

# Absolute path to the file which will be used as a watermark
WATERMARK_IMAGE=/Users/atanas/server/projects/mama-culinar/wp-content/watermark/icon.png

# Absolute path to the folder containing the images
WATERMARK_IMAGES=/Users/atanas/server/projects/mama-culinar/wp-content/uploads/2021/03

# Spacing between the watermark and the image edges
# in percentage (from 0 to 100)
WATERMARK_SPACING=2

# Opacity of the watermark when placed over the image
WATERMARK_OPACITY=1

# Ratio in percentage (from 0 to 100) relative to
# the watermarked image which is used to resize
# the watermark if the watermark is larger
WATERMARK_RESIZE_RATIO=10

# The position of the watermark.
# Possible values are:
# N (north),
# NE (northeast),
# E (east),
# SE (southeast),
# S (south),
# SW (southwest),
# W (west),
# NW (northwest),
# C (center)
WATERMARK_POSITION=SE

# A pipe split words which shouldn't be found in the images file names
WATERMARK_IGNORE=logo|icon|banner|unsplash|placeholder
```

Then I created a new `index.js` file which contains the actual script:

```js
#!/usr/bin/env node

const { resolve } = require('path');

const jimp = require('jimp');
const glob = require('glob');
const dotnev = require('dotenv');

dotnev.config();

const {
	WATERMARK_DEBUG,
	WATERMARK_IMAGE,
	WATERMARK_IGNORE,
	WATERMARK_IMAGES,
	WATERMARK_SPACING,
	WATERMARK_OPACITY,
	WATERMARK_POSITION,
	WATERMARK_RESIZE_RATIO
} = process.env;

/**
 * Read an environmental variable,
 * convert it to a number
 * and then limit it between
 * a min and a max values
 * @param {string} variable
 * @param {number} defaultValue
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const useEnvNumber = (variable, defaultValue, min, max) => {
	if (typeof variable === 'undefined' || variable === '') {
		return defaultValue;
	}

	const num = Number(variable);

	return num > max ? max : num < min ? min : num;
};

const ratio = useEnvNumber(WATERMARK_RESIZE_RATIO, 10, 0, 100);
const spacing = useEnvNumber(WATERMARK_SPACING, 2, 0, 100);
const opacity = useEnvNumber(WATERMARK_OPACITY, 0.9, 0, 1);
const shouldDebug = WATERMARK_DEBUG === 'true';

if (!WATERMARK_IMAGES) {
	shouldDebug && console.error('No images found.');
	process.exit(1);
}

if (!WATERMARK_IMAGE) {
	shouldDebug && console.error('No watermark found.');
	process.exit(1);
}

const IMAGES = glob.sync(`${resolve(WATERMARK_IMAGES)}/**/*.{jpeg,jpg,png}`).filter(filename => {
	const name = filename.toLowerCase();

	if (typeof WATERMARK_IGNORE === 'undefined' || WATERMARK_IGNORE === '') {
		return true;
	}

	const words = WATERMARK_IGNORE.split('|');
	const matches = words.filter(word => name.includes(word));

	return matches.length === 0;
});

/**
 * Get the x and y coordinates of the watermark
 * @param {jimp} image
 * @param {jimp} watermark
 * @param {number} xMargin
 * @param {number} yMargin
 * @returns {Record<'x' | 'y', number>}
 */
const getCoords = (image, watermark, xMargin, yMargin) => {
	const imageWidth = image.bitmap.width;
	const imageHeight = image.bitmap.height;
	const watermarkWidth = watermark.bitmap.width;
	const watermarkHeight = watermark.bitmap.height;

	switch (WATERMARK_POSITION) {
		case 'N':
			return {
				x: imageWidth / 2 - watermarkWidth / 2,
				y: yMargin
			};
		case 'NE':
			return {
				x: imageWidth - watermarkWidth - xMargin,
				y: yMargin
			};
		case 'E':
			return {
				x: imageWidth - watermarkWidth - xMargin,
				y: imageHeight / 2 - watermarkHeight / 2
			};
		case 'SE':
			return {
				x: imageWidth - watermarkWidth - xMargin,
				y: imageHeight - watermarkHeight - yMargin
			};
		case 'S':
			return {
				x: imageWidth / 2 - watermarkWidth / 2,
				y: imageHeight - watermarkHeight - yMargin
			};
		case 'SW':
			return {
				x: xMargin,
				y: imageHeight - watermarkHeight - yMargin
			};
		case 'W':
			return {
				x: xMargin,
				y: imageHeight / 2 - watermarkHeight / 2
			};
		case 'NW':
			return {
				x: xMargin,
				y: yMargin
			};
		case 'C':
			return {
				x: imageWidth / 2 - watermarkWidth / 2,
				y: imageHeight / 2 - watermarkHeight / 2
			};
		default:
			return {
				x: 0,
				y: 0
			};
	}
};

/**
 * Place a watermark over an image
 * @param {string} src
 */
async function waterMark(src) {
	shouldDebug && console.log('Start processing ' + src);

	const image = await jimp.read(src).catch(() => null);
	const watermark = await jimp.read('./icon.png').catch(() => null);

	if (!image || !watermark) {
		return;
	}

	watermark.resize(image.bitmap.width / ratio, jimp.AUTO);

	const xMargin = (image.bitmap.width * spacing) / 100;
	const yMargin = (image.bitmap.width * spacing) / 100;

	const { x, y } = getCoords(image, watermark, xMargin, yMargin);

	image.composite(watermark, x, y, {
		mode: jimp.BLEND_SOURCE_OVER,
		opacityDest: 1,
		opacitySource: opacity
	});

	await image.writeAsync(src).catch(e => {
		shouldDebug && console.error(e);
	});

	shouldDebug && console.log('Done processing ' + src);
	shouldDebug && console.log('---');
}

(async () => {
	for (const image of IMAGES) {
		await waterMark(image);
	}

	process.exit();
})();
```

Let's explain what this does:

First I import the `resolve` method from the NodeJS' built-in `fs` module. Then I import the 3rd party modules which were previously installed - `jimp`, `glob` and `dotenv`. Then I configure my environment by calling the `dotenv.config()` method. This reads the `.env` file which I created and allows me to read the variables using the NodeJS' `process.env` object.

Then I define the `useEnvNumber` function which essentially reads an environment variable defined in the `.env` file and returns it's number representation. The function also uses a default value if the environmental variable is missing and limits the value of the variable between a `min` and `max` values.

Then I use the `useEnvNumber` function to define some variables which will be used in the image manipulations later.

If the `WATERMARK_IMAGES` and `WATERMARK_IMAGE` variables are missing, I stop the execution and print an error. Without those two variables defined the script can not continue.

Then I define the `IMAGES` variable which is an array which contains all images located in the `WATERMARK_IMAGES` folder. This function takes care of extracting only image files and then filters them based on the `WATERMARK_IGNORE` words.

The I define the `waterMark` asynchronous function which accepts a path to an image as an argument and does all the magic:

1. First it passes the image and the watermark to `jimp` - the library returns `Jimp` objects which will be manipulated and used later on.
2. Then the watermark image is resized based on the size of the large image and the `WATERMARK_RESIZE_RATIO` variable.
3. Then I define the X and Y margins of the watermark.
4. Then based on the `WATERMARK_POSITION` variable I get the x and y coordinates of the position of the watermark over the image.
5. Then I use `jimp`'s composite method to place the watermark over the image.
6. At the end I call the waterMark function for all of the images in the provided `WATERMARK_IMAGES` folder.

In my case I had a 1.86 GB worth of images with various sizes and all of them needed a watermark.

Using a late 2015 MB Pro with i7 and 16 GB of RAM, this task took exactly 26.5 minutes to complete but you know **at least my wife is happy**!

Two notes:

1. The script does not support files with special characters in their names (or files with name in language different than English, for example Bulgarian).
2. The script overwrites the input images so you probably need to back your images up before starting the watermarking process.
