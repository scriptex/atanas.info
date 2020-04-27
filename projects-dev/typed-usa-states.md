[![GitHub release](https://img.shields.io/github/release/scriptex/typed-usa-states.svg)](https://github.com/scriptex/typed-usa-states/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/typed-usa-states.svg)](https://github.com/scriptex/typed-usa-states/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/typed-usa-states.svg)](https://github.com/scriptex/typed-usa-states/commits/master)
[![Build Status](https://travis-ci.org/scriptex/typed-usa-states.svg?branch=master)](https://travis-ci.org/scriptex/typed-usa-states)
[![npm](https://img.shields.io/npm/dt/typed-usa-states.svg)](https://www.npmjs.com/package/typed-usa-states)
[![npm](https://img.shields.io/npm/v/typed-usa-states.svg)](https://www.npmjs.com/package/typed-usa-states)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/typed-usa-states/README.md)](https://github.com/scriptex/typed-usa-states/)

# Typed USA States

An array of geographical data for all USA states with full TypeScript support

## Content

This package contains geographical data for all USA states including:

-   `name` of the state
-   `abbreviation` of the state
-   `territory`: whether the state is under the sovereign jurisdiction of the federal government of the United States
-   the `capital` city of the state
-   `contiguous`: whether the state shares common borders with other states
-   `zipCodes`: an array containing string arrays. Each array contains two elements (string) - the start and the end of the zip code range. (The `string` type is used because TypeScript does not like numbers with leading zero. Pull request are welcome if you find a workaround for this issue.) 
-   `area`: the area of the state in square miles in the following format:
    -   `year`: when was the value last updated
    -   `value`: the actual area
-   `population`: the population of the state in the following format:
    -   `year`: when was the value last updated
    -   `count`: the actual population

## Usage

```bash
npm i typed-usa-states

# or

yarn add typed-usa-states
```

## Usage

```javascript
import { usaStates } from 'typed-usa-states';
```

## Typings

The package exports several types which can be used in TypeScript environment.
The typings are located in `dist/index.d.ts` and are being auto detected by TypeScript.

---

## LICENSE

MIT
