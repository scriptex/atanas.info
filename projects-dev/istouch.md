[![GitHub release](https://img.shields.io/github/release/three11/istouch.svg)](https://github.com/three11/istouch/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/three11/istouch.svg)](https://github.com/three11/istouch/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/three11/istouch.svg)](https://github.com/three11/istouch/commits/master)
[![Github file size](https://img.shields.io/github/size/three11/istouch/dist/istouch.min.js.svg)](https://github.com/three11/istouch/)
[![Build Status](https://travis-ci.org/three11/istouch.svg?branch=master)](https://travis-ci.org/three11/istouch)
[![npm](https://img.shields.io/npm/dt/@three11/istouch.svg)](https://www.npmjs.com/package/@three11/istouch)
[![npm](https://img.shields.io/npm/v/@three11/istouch.svg)](https://www.npmjs.com/package/@three11/istouch)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/three11/istouch/README.md)](https://github.com/three11/istouch/)

# isTouch

Use JS to detect touch-enabled device

## Install

```bash
npm i @three11/istouch
```

or

```bash
yarn add @three11/istouch
```

or

Just download this repository and link the files located in dist folder:

```html
<script src="path-to-istouch/dist/istouch.min.js"></script>
```

or

Include it from Unpkg CDN

```html
<script src="//unpkg.com/@three11/istouch/dist/istouch.min.js"></script>
```

## Usage

```javascript
import { setTouchClass } from '@three11/istouch';

setTouchClass();
```

Or you can just check if the device you use is touch-enabled:

```javascript
import isTouch from '@three11/istouch';

console.log(isTouch);
```

## Customization

By default, the module sets a classname to the `<html>` tag.
If the device is touch-enabled, the classname is `touch`.
If not - the classname is `no-touch`.

You can overwrite these settings:

```javascript
const el = document.getElementById('element');
const classNames = {
	touch: 'is-touch-device',
	notouch: 'is-not-touch-device'
};

setTouchClass(el, classNames);
```
