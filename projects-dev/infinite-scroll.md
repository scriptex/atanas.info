[![GitHub release](https://img.shields.io/github/release/three11/infinite-scroll.svg)](https://github.com/three11/infinite-scroll/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/three11/infinite-scroll.svg)](https://github.com/three11/infinite-scroll/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/three11/infinite-scroll.svg)](https://github.com/three11/infinite-scroll/commits/master)
[![Github file size](https://img.shields.io/github/size/three11/infinite-scroll/dist/infinite-scroll.min.js.svg)](https://github.com/three11/infinite-scroll/)
[![Build Status](https://travis-ci.org/three11/infinite-scroll.svg?branch=master)](https://travis-ci.org/three11/infinite-scroll)
[![npm](https://img.shields.io/npm/dt/@three11/infinite-scroll.svg)](https://www.npmjs.com/package/@three11/infinite-scroll)
[![npm](https://img.shields.io/npm/v/@three11/infinite-scroll.svg)](https://www.npmjs.com/package/@three11/infinite-scroll)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/three11/infinite-scroll/README.md)](https://github.com/three11/infinite-scroll/)

# Infinite Scroll

A vanilla ES2017 module for loading more items as you scroll the page down.

## Install

```bash
npm i @three11/infinite-scroll
```

or

```bash
yarn add @three11/infinite-scroll
```

or

Just download this repository and link the files located in dist folder:

```html
<script src="path-to-infinite-scroll/dist/infinite-scroll.min.js"></script>
```

or

Include it from Unpkg CDN

```html
<script src="//unpkg.com/@three11/infinite-scroll/dist/infinite-scroll.min.js"></script>
```

## Usage

First, `import` the module:

```javascript
import InfiniteScroll from '@three11/infinite-scroll';
```

Then initialize a new instance of the module:

```javascript
const infiniteScroll = new InfiniteScroll();
```

## Settings

The default settings are:

```javascript
element       : '.js-infinite',       // The container of the instance
next          : '.js-infinite__next', // The link to the next page
item          : '.js-infinite__item', // The item
disabledClass : 'disabled',           // Disabled class name
hiddenClass   : 'hidden',             // Hidden class name
responseType  : 'text/html',          // Type of the AJAX response
```

There is one callback:

```javascript
onComplete(container) {}
```

This is a function which runs after the items have been added to the DOM and accepts a single argument `container` which refers to the element which contains the instance of the module.

## License

GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
