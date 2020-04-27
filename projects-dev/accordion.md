[![GitHub release](https://img.shields.io/github/release/three11/accordion.svg)](https://github.com/three11/accordion/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/three11/accordion.svg)](https://github.com/three11/accordion/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/three11/accordion.svg)](https://github.com/three11/accordion/commits/master)
[![Github file size](https://img.shields.io/github/size/three11/accordion/dist/accordion.min.js.svg)](https://github.com/three11/accordion/)
[![Build Status](https://travis-ci.org/three11/accordion.svg?branch=master)](https://travis-ci.org/three11/accordion)
[![npm](https://img.shields.io/npm/dt/@three11/accordion.svg)](https://www.npmjs.com/package/@three11/accordion)
[![npm](https://img.shields.io/npm/v/@three11/accordion.svg)](https://www.npmjs.com/package/@three11/accordion)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/three11/accordion/README.md)](https://github.com/three11/accordion/)

# Accordion

Front-end accordion widget using max-height written in vanilla ES2017

## Install

```bash
npm i @three11/accordion
```

or

```bash
yarn add @three11/accordion
```

or

Just download this repository and link the files located in dist folder:

```html
<link rel="stylesheet" href="path-to-accordion/dist/accordion.css" type="text/css" />

<script src="path-to-accordion/dist/accordion.min.js"></script>
```

or

Include it from Unpkg CDN

```html
<script src="//unpkg.com/@three11/accordion/dist/accordion.min.js"></script>
```

## Usage

First, `import` the module:

```javascript
import Accordion from '@three11/accordion';
```

Then initialize a new instance of the module:

```javascript
const el = doc.querySelector('[data-accordion]');
const accordion = new Accordion(el, (settings = {}));
```

## Settings

The default settings are:

```javascript
{
	headSelector: '[data-title]',   // Selector for the head element
	bodySelector: '[data-content]', // Selector for the body element
	hiddenClass:  'is--hidden',     // Hidden class name
	activeClass:  'is--active'      // Active class name
}
```

## License

GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
