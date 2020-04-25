[![GitHub release](https://img.shields.io/github/release/three11/optisize.svg)](https://github.com/three11/optisize/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/three11/optisize.svg)](https://github.com/three11/optisize/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/three11/optisize.svg)](https://github.com/three11/optisize/commits/master)
[![Github file size](https://img.shields.io/github/size/three11/optisize/index.js.svg)](https://github.com/three11/optisize/)
[![Build Status](https://travis-ci.org/three11/optisize.svg?branch=master)](https://travis-ci.org/three11/optisize)
[![npm](https://img.shields.io/npm/dt/@three11/optisize.svg)](https://www.npmjs.com/package/@three11/optisize)
[![npm](https://img.shields.io/npm/v/@three11/optisize.svg)](https://www.npmjs.com/package/@three11/optisize)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/three11/optisize/README.md)](https://github.com/three11/optisize/)

![Optisize Logo](https://raw.githubusercontent.com/three11/optisize/master/logo/optisize-logo-horizontal.png)

# Optisize

Tool for resizing and optimizing images with NodeJS

## About

There are many packages and tools which do that.

Most of them are doing a lot of other things.

This package is focused on two tasks and does them pretty well:

1.  Resizes your images and
2.  Optimizes their size

## Install

```bash
npm i @three11/optisize
```

or

```bash
yarn add @three11/optisize
```

## Arguments

This tool accepts the following arguments:

1.  `src`: String - Source folder or file (Required)
2.  `width`: Number - Target width (Optional)
3.  `height`: Number - Target height (Optional)

-   The `src` argument should represent a relative path to your images folder or to your single image. The path is relative to your project's root folder. If the `src` is a folder, all images located inside other folders in that folder will be recursively optisized as well.

## Usage

### Default:

```javascript
const optisize = require('@three11/optisize');
const optisizeSettings = {
	src: 'path/to/images',
	width: 640,
	height: 360
};

optisize(optisizeSettings);
```

### As package.json script:

Add the following in the `scripts` section of your `package.json` file:

```json
{
	"optisize": "optisize"
}
```

Then invoke the script and supply the required arguments:

```bash
yarn optisize --src="path/to/images" --width=640 --height=360
```

or

```bash
npm run optisize --src="path/to/images" --width=640 --height=360
```

## Important note!

`width` and `height` settings are not required and can be supplied together, alone and also can be missing.

If they are missing, the images will only be optimized.

## License

GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
