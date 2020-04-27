[![GitHub release](https://img.shields.io/github/release/three11/debounce.svg)](https://github.com/three11/debounce/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/three11/debounce.svg)](https://github.com/three11/debounce/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/three11/debounce.svg)](https://github.com/three11/debounce/commits/master)
[![Github file size](https://img.shields.io/github/size/three11/debounce/dist/debounce.min.js.svg)](https://github.com/three11/debounce/)
[![Build Status](https://travis-ci.org/three11/debounce.svg?branch=master)](https://travis-ci.org/three11/debounce)
[![npm](https://img.shields.io/npm/dt/@three11/debounce.svg)](https://www.npmjs.com/package/@three11/debounce)
[![npm](https://img.shields.io/npm/v/@three11/debounce.svg)](https://www.npmjs.com/package/@three11/debounce)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/three11/debounce/README.md)](https://github.com/three11/debounce/)

# Debounce

Debounce multiple function executions

## Install

```bash
npm i @three11/debounce
```

or

```bash
yarn add @three11/debounce
```

or

Just download this repository and link the files located in dist folder:

```html
<script src="path-to-debounce/dist/debounce.min.js"></script>
```

or

Include it from Unpkg CDN

```html
<script src="//unpkg.com/@three11/debounce/dist/debounce.min.js"></script>
```

## Usage

First, import the module:

```javascript
import debounce from '@three11/debounce';
```

Then use it to postpone a function's execution:

```javascript
debounce(yourAwesomeFn());
```

## Arguments

`debounce(fn, wait, immediate)` accepts three arguments:

-   `fn` : the function to debounce
-   `wait` : miliseconds to wait before running the `fn` again
-   `immediate` : whether the function should run immediately

## License

GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007
