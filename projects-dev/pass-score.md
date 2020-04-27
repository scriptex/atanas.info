[![GitHub release](https://img.shields.io/github/release/scriptex/pass-score.svg)](https://github.com/scriptex/pass-score/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/pass-score.svg)](https://github.com/scriptex/pass-score/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/pass-score.svg)](https://github.com/scriptex/pass-score/commits/master)
[![Github file size](https://img.shields.io/github/size/scriptex/pass-score/dist/index.min.js.svg)](https://github.com/scriptex/pass-score)
[![Build Status](https://travis-ci.org/scriptex/pass-score.svg?branch=master)](https://travis-ci.org/scriptex/pass-score)
[![npm](https://img.shields.io/npm/dt/pass-score.svg)](https://www.npmjs.com/package/pass-score)
[![npm](https://img.shields.io/npm/v/pass-score.svg)](https://www.npmjs.com/package/pass-score)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/pass-score/README.md)](https://github.com/scriptex/pass-score/)

# Pass Score

Get the score of your password as a number.

The number can be between 0 and the length of the provided array containing the conditions against which the password will be tested.

## Install

```bash
npm i pass-score
```

or

```bash
yarn add pass-score
```

or

just download this repository and link the files located in dist folder

or include it from unpkg.com

```html
<script src="https://unpkg.com/pass-score"></script>
```

## Usage

With default conditions:

```javascript
import passScore from 'pass-score';

// Returns a number between 0 and 4
const score = passScore('Your-passW0rd-Str1ng');
```

With custom conditions

```javascript
import passScore from 'pass-score';

// Returns a number between 0 and 2
const score = passScore('Your-passW0rd-Str1ng', [
  /[\W_,!?@*\(\)]/, // Special characters
  /^.{8}/ // At least 8 characters
]);
```

## Arguments

The function accepts two arguments:

1.  The first is the password string. It is required.
2.  The second is an array of regular expressions. It is optional. The default array is shown below.

## Conditions

The predefined array with conditions contains the following:

1.  `/\d/` - The password should contain at least on digit
2.  `/[A-Z]/`, - The password should contain at least one uppercase letter
3.  `/[\W_,!?@*\(\)]/` - The password should contain at least one special character
4.  `/^.{8}/` - The password should be at least 8 characters long

## Bonus

The `pass-score` module provides a native web component. In order to use it you can `import` it:

```javascript
import 'pass-score/component';
```

and then use it as shown in the [demo](https://github.com/scriptex/pass-score/tree/master/component/index.html).

The component accepts two attributes:
`styled`: a boolean attribute which injects an opinionated style in the component.
`patterns`: a comma separated list of regular expressions against which the password will be matched.

## LICENSE

MIT
