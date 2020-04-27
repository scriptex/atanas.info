[![GitHub release](https://img.shields.io/github/release/scriptex/random-splice.svg)](https://github.com/scriptex/random-splice/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/random-splice.svg)](https://github.com/scriptex/random-splice/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/random-splice.svg)](https://github.com/scriptex/random-splice/commits/master)
[![Github file size](https://img.shields.io/github/size/scriptex/random-splice/dist/index.min.js.svg)](https://github.com/scriptex/random-splice)
[![Build Status](https://travis-ci.org/scriptex/random-splice.svg?branch=master)](https://travis-ci.org/scriptex/random-splice)
[![npm](https://img.shields.io/npm/dt/random-splice.svg)](https://www.npmjs.com/package/random-splice)
[![npm](https://img.shields.io/npm/v/random-splice.svg)](https://www.npmjs.com/package/random-splice)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/random-splice/README.md)](https://github.com/scriptex/random-splice/)

# randomSplice

Get random element from array when looping

## Idea

When looping over an array in JavaScript, you sometimes want to get a random item.

One solution is to first shuffle the array and then loop over it.

Another one is to get random element while looping.

## Use case

Lets say that you want to render a word cloud.

Lets say that you do not want to keep the same order each time.

This is where you can use the `randomSplice` function.

## Installation

```bash
yarn add random-splice
```

or

```bash
npm i random-splice
```

or

just download this repository and link the files located in dist folder

or link it from unpkg.com

```html
<script src="https://unpkg.com/random-splice"></script>
```

## Usage

```javascript
const randomSplice = require('random-splice');
const arr = ['Your', 'Awesome', 'Array'];

while (arr.length) {
	console.log(randomSplice(arr));
}
```

## Notes

1.  This function modifies the original array. This is where its magic comes from
2.  This function accepts only arrays
3.  This function can be used in an ES6 environment

## LICENSE

MIT
