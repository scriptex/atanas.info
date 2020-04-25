[![GitHub release](https://img.shields.io/github/release/scriptex/IntroScroll.svg)](https://github.com/scriptex/IntroScroll/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/IntroScroll.svg)](https://github.com/scriptex/IntroScroll/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/IntroScroll.svg)](https://github.com/scriptex/IntroScroll/commits/master)
[![Github file size](https://img.shields.io/github/size/scriptex/IntroScroll/dist/introscroll.min.js.svg)](https://github.com/scriptex/IntroScroll)
[![Build Status](https://travis-ci.org/scriptex/IntroScroll.svg?branch=master)](https://travis-ci.org/scriptex/IntroScroll)
[![npm](https://img.shields.io/npm/dt/introscroll.svg)](https://www.npmjs.com/package/introscroll)
[![npm](https://img.shields.io/npm/v/introscroll.svg)](https://www.npmjs.com/package/introscroll)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/IntroScroll/README.md)](https://github.com/scriptex/IntroScroll/)

# IntroScroll

Create a fullscreen intro section and dismiss it in a single gesture.

## Description

This library creates a fullscreen intro section and disables the default page scroll.

The page scroll is being enabled again after a single mouse scroll, touch swipe up or any gesture that forces the page to move upwards.

## Install

```bash
npm i introscroll
```

or

```bash
yarn add introscroll
```

or

just download this repository and link the files located in dist folder

or include it from unpkg.com

```html
<script src="https://unpkg.com/introscroll"></script>
```

Then

```javascript
import IntroScroll from 'introscroll';
```

and initialize an instance using default settings

```javascript
const intro = new IntroScroll();
```

or add your own settings

```javascript
const intro = new IntroScroll({
  element: '#your-fullscreen-section',
  wrapper: '#your-fullscreen-sections-wrapper',
  container: '#your-fullscreen-sections-container',
  trigger: '#your-fullscreen-sections-link',
  scrollClass: 'intro--scrolled',
  duration: 1000,
  afterScroll(instance) {
    console.log(instance.element);
  }
});
```

For more details please see the [demo](https://github.com/scriptex/IntroScroll/blob/master/demo/index.html).

## LICENSE

MIT
