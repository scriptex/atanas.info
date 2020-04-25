[![GitHub release](https://img.shields.io/github/release/scriptex/async-array-prototype.svg)](https://github.com/scriptex/async-array-prototype/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/async-array-prototype.svg)](https://github.com/scriptex/async-array-prototype/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/async-array-prototype.svg)](https://github.com/scriptex/async-array-prototype/commits/master)
[![Build Status](https://travis-ci.org/scriptex/async-array-prototype.svg?branch=master)](https://travis-ci.org/scriptex/async-array-prototype)
[![npm](https://img.shields.io/npm/dt/async-array-prototype.svg)](https://www.npmjs.com/package/async-array-prototype)
[![npm](https://img.shields.io/npm/v/async-array-prototype.svg)](https://www.npmjs.com/package/async-array-prototype)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/async-array-prototype/README.md)](https://github.com/scriptex/async-array-prototype/)

# Async Array Methods

## Details

This repository contains the asynchronous version of most array methods in JavaScript.

## Usage

First install or [download](https://github.com/scriptex/async-array/archive/master.zip) this repository.

```bash
npm i async-array-prototype

# or

yarn add async-array-prototype
```

Then either import the whole package or include a new script tag with `src` pointing to your downloaded and extracted repository.

You can also include the whole package from unpkg.com

```html
<script src="https://unpkg.com/async-array-prototype"></script>
```

Then 

```javascript
import 'async-array';
```

Once imported, the asyncronous methods are available on the `Array.prototype` and you can use them with any array.

## Methods:

1. Async `every`
2. Async `filter`
3. Async `find`
4. Async `findIndex`
5. Async `forEach`
6. Async `map`
7. Async `some`
8. Async `reduce`

## ES Next

Of course you can live on the edge and use the raw ES7 version of the methods by importing them from the `lib` folder.
This way you will not extend the array prototype and the actual usage is left to you.

## LICENSE

MIT
