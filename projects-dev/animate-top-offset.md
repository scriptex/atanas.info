[![GitHub release](https://img.shields.io/github/release/three11/animate-top-offset.svg)](https://github.com/three11/animate-top-offset/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/three11/animate-top-offset.svg)](https://github.com/three11/animate-top-offset/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/three11/animate-top-offset.svg)](https://github.com/three11/animate-top-offset/commits/master)
[![Github file size](https://img.shields.io/github/size/three11/animate-top-offset/dist/animate-top-offset.min.js.svg)](https://github.com/three11/animate-top-offset/)
[![Build Status](https://travis-ci.org/three11/animate-top-offset.svg?branch=master)](https://travis-ci.org/three11/animate-top-offset)
[![npm](https://img.shields.io/npm/dt/@three11/animate-top-offset.svg)](https://www.npmjs.com/package/@three11/animate-top-offset)
[![npm](https://img.shields.io/npm/v/@three11/animate-top-offset.svg)](https://www.npmjs.com/package/@three11/animate-top-offset)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/three11/animate-top-offset/README.md)](https://github.com/three11/animate-top-offset/)

# Animate Top Offset

Vanilla JS animated scroll to a given offset.

## Install

```bash
npm i @three11/animate-top-offset
```

or

```bash
yarn add @three11/animate-top-offset
```

or

Just download this repository and link the files located in dist folder:

```html
<script src="path-to-animate-top-offset/dist/animate-top-offset.min.js"></script>
```

or

Include it from Unpkg CDN

```html
<script src="//unpkg.com/@three11/animate-top-offset/dist/animate-top-offset.min.js"></script>
```

## Usage

First, `import` the module:

```javascript
import animateTopOffset from '@three11/animate-top-offset';
```

Then use the module:

#### With one element

```javascript
const button = document.getElementById('button');

button.addEventListener('click', event => {
	event.preventDefault();

	const href = event.target.getAttribute('href');
	const offset = doc.querySelector(href).offsetTop;

	animateTopOffset(offset);
});
```

#### With many elements

```javascript
const buttons = document.querySelectorAll('.js-scroll-to');

// Instead of Array.from you can spread the buttons: [...buttons]
Array.from(buttons).forEach(button => {
	button.addEventListener('click', event => {
		event.preventDefault();

		const href = event.target.getAttribute('href');
		const offset = doc.querySelector(href).offsetTop;

		animateTopOffset(offset);
	});
});
```

**The examples above assume that you have a modern ES6 setup installed and configured (Webpack, Babel, etc). If not you can always fallback to ES5:**

```javascript
const buttons = document.querySelectorAll('.js-scroll-to');

[].forEach.call(buttons, function(button) {
	button.addEventListener('click', function(event) {
		event.preventDefault();

		var href = event.target.getAttribute('href');
		var offset = doc.querySelector(href).offsetTop;

		animateTopOffset(offset);
	});
});
```

## Arguments

The function accepts four arguments:

-   `offset`
-   `container`
-   `speed`
-   `easing`

```javascript
animateTopOffset(0, window, 2000, 'easeOutSine');
```

Default values are:

-   `offset` = 0
-   `container` = `window`
-   `speed` = 2000
-   `easing` = `'easeOutSine'`

**Calling the function with the default values (`animateTopOffset()`) will scroll the window back to top.**

There are three built-in easing functions:

-   `'easeOutSine'`
-   `'easeInOutSine'`
-   `'easeInOutQuint'`

## Demo

A minimal demo is available [here](https://github.com/three11/scrollspy/blob/master/demo/index.html)
Clicking on the links in the menu scrolls the page to the particular section.

## License

GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
