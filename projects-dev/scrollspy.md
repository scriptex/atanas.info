[![GitHub release](https://img.shields.io/github/release/three11/scrollspy.svg)](https://github.com/three11/scrollspy/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/three11/scrollspy.svg)](https://github.com/three11/scrollspy/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/three11/scrollspy.svg)](https://github.com/three11/scrollspy/commits/master)
[![Github file size](https://img.shields.io/github/size/three11/scrollspy/dist/scrollspy.min.js.svg)](https://github.com/three11/scrollspy/)
[![Build Status](https://travis-ci.org/three11/scrollspy.svg?branch=master)](https://travis-ci.org/three11/scrollspy)
[![npm](https://img.shields.io/npm/dt/@three11/scrollspy.svg)](https://www.npmjs.com/package/@three11/scrollspy)
[![npm](https://img.shields.io/npm/v/@three11/scrollspy.svg)](https://www.npmjs.com/package/@three11/scrollspy)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/three11/scrollspy/README.md)](https://github.com/three11/scrollspy/)

# ScrollSpy

A vanilla ES2017 module for scroll spy functionality.

## Install

```bash
npm i @three11/scrollspy
```

or

```bash
yarn add @three11/scrollspy
```

or

Just download this repository and link the files located in dist folder:

```html
<script src="path-to-scrollspy/dist/scrollspy.min.js"></script>
```

or

Include it from Unpkg CDN

```html
<script src="//unpkg.com/@three11/scrollspy/dist/scrollspy.min.js"></script>
```

## Usage

First, `import` the module:

```javascript
import ScrollSpy from '@three11/scrollspy';
```

Then initialize a new instance of the module:

```javascript
const scrollSpy = new ScrollSpy();
```

## Settings

The default settings are:

```javascript
linkCurrentClass      : 'current', // The class that will be applied to the current element
linksContainerSelector: '.js-scroll-spy-nav', // The container of the scroll spy navigation
sectionSelector       : '.js-scroll-spy-section', // The selector for the sections that will be monitored
headerOffset          : true, // Should calculate the header height
headerClass           : '.c-header', // The class of the header element
```

## Demo

A minimal demo is available [here](https://github.com/three11/scrollspy/blob/master/demo/index.html)

## License

GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
