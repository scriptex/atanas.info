[![GitHub release](https://img.shields.io/github/release/three11/dom-helpers.svg)](https://github.com/three11/dom-helpers/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/three11/dom-helpers.svg)](https://github.com/three11/dom-helpers/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/three11/dom-helpers.svg)](https://github.com/three11/dom-helpers/commits/master)
[![Github file size](https://img.shields.io/github/size/three11/dom-helpers/dist/dom-helpers.min.js.svg)](https://github.com/three11/dom-helpers/)
[![Build Status](https://travis-ci.org/three11/dom-helpers.svg?branch=master)](https://travis-ci.org/three11/dom-helpers)
[![npm](https://img.shields.io/npm/dt/@three11/dom-helpers.svg)](https://www.npmjs.com/package/@three11/dom-helpers)
[![npm](https://img.shields.io/npm/v/@three11/dom-helpers.svg)](https://www.npmjs.com/package/@three11/dom-helpers)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/three11/dom-helpers/README.md)](https://github.com/three11/dom-helpers/)

# dom-helpers

Helper functions for faster DOM scripting

## NOTE:

The latest version in the master branch is different than the latest release on Github and the latest release on NPM.
There are major changes and modifications.
This version is still a work in progress.

## Install

```bash
yarn add @three11/dom-helpers
```

or

```bash
npm i @three11/dom-helpers
```

or

Just download this repository and link the files located in dist folder:

```html
<script src="path-to-dom-helpers/dist/dom-helpers.min.js"></script>
```

or

Include it from Unpkg CDN

```html
<script src="//unpkg.com/@three11/dom-helpers/dist/dom-helpers.min.js"></script>
```

## Usage

```javascript
import {
	$,
	$$,
	trigger,
	hasClass,
	addClass,
	removeClass,
	toggleClass,
	insertAfter,
	insertBefore,
	enableListeners,
	getScrollPosition,
	isElementVisibleInViewport
} from '@three11/dom-helpers';
```

or

Import each function separately.

See functions list below:

## Functions

`$` - queries the DOM and obtains a single element

```javascript
const button = $('#button');
```

-----

`$$` - queries the DOM and obtains a collection of elements

```javascript
const buttons = $$('#button');
```

-----

`enableListeners` - enables the custom `on` method for attaching of event listeners

```javascript
enableListeners();

button.on('click', () => {
    console.log('clicked a single button');
});

buttons.on('click', () => {
    console.log('clicked a button in a collection');
});
```

-----

`isElementVisibleInViewport` - accepts two arguments: DOM element and a boolean flag which states if the element should be partially visible. Returns boolean.

``` javascript
const element = document.getElementById('element');
const isVisible = isElementVisibleInViewport(element, true);
```

-----

- `getScrollPosition` - returns the scroll position of the passed DOM Element

```javascript
const element = document.getElementById('element');
const scrollPosition = getScrollPosition(element);
```

-----

- `hasClass` - Returns boolean true if the element has the specified class, false otherwise.
- `addClass` - Adds the specified class to an element
- `removeClass` - Removes the specified class from an element
- `toggleClass` - Toggles the specified class on an element

```javascript
const element = document.getElementById('element');

hasClass(element, 'test'); // false
addClass(element, 'test');
removeClass(element, 'test');

/**
 * The last argument forces the classname.
 * If true the classname will be added,
 * if false it will be removed.
 * If omitted, the classname will be toggled
 */
toggleClass(element, 'test', true)
```

-----

- `insertAfter` - Insert the supplied HTML String after the element
- `insertBefore` - Insert the supplied HTML String before the element

```javascript
const element = document.getElementById('element');

insertAfter(element, '<div>Test</div>');
insertBefore(element, '<div>Test</div>');
```

-----

- `trigger` - Fires a custom (or built-in) event

```javascript
const element = document.getElementById('element');

// The third argument is event data. Can be omitted
trigger(element, 'click', { data: true })
```

## License

GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007
