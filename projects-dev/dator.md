[![GitHub release](https://img.shields.io/github/release/scriptex/dator.svg)](https://github.com/scriptex/dator/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/dator.svg)](https://github.com/scriptex/dator/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/dator.svg)](https://github.com/scriptex/dator/commits/master)
[![Github file size](https://img.shields.io/github/size/scriptex/dator/dist/dator.min.js.svg)](https://github.com/scriptex/dator)
[![Build Status](https://travis-ci.org/scriptex/dator.svg?branch=master)](https://travis-ci.org/scriptex/dator)
[![npm](https://img.shields.io/npm/dt/dator.svg)](https://www.npmjs.com/package/dator)
[![npm](https://img.shields.io/npm/v/dator.svg)](https://www.npmjs.com/package/dator)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/dator/README.md)](https://github.com/scriptex/dator/)

# Dator. Vali-Dator

Intuitive front-end forms validator based on HTML5 attributes and a tiny bit of JavaScript.

## About

There are a lot of form validators out there. This one aims at intuitive API and relies on extensive usage of HTML data-\* attributes.
It's important to note that in order to use the validation, the `required` attribute must be present on your HTML element.

## Demo

[Here](https://github.com/scriptex/dator/blob/master/demo/index.html) is a demo showing how to use the validator and all built-in validation types:

## Install

```bash
npm i dator

# or

yarn add dator
```

or just [download](https://github.com/scriptex/dator/archive/master.zip) this repository and extract it where you wish.

or include it from unpkg.com

```html
<script src="https://unpkg.com/dator"></script>
```

## Usage

In your JavaScript file:

```javascript
import Dator from 'dator';

const myForm = document.querySelector('form');
const datorSettings = {}; // see below for more details
const datorCustomTypes = {}; // see below for more details

const formValidator = new Dator(myForm, datorSettings, datorCustomTypes);
```

In your HTML file:

```html
<input type="text" name="full-name" required data-validate="name" />
```

The constuctor accepts three arguments:

1. DOM element for the form that needs to be validated (Required)
2. Object with settings (Optional) - more below
3. Object with custom validation types - more below

## Settings

```javascript
// These are the settings and their default values
const datorSettings = {
	validClass: 'is--valid', // The CSS classname that will be added to a valid form element
	errorClass: 'is--invalid', // The CSS classname that will be added to an invalid form element
	validatedClass: 'is--validated', // The CSS classname that will be added to the validated form
	watch: true, // If the validation should be applied "as-you-type"
	classHolder: null, // The CSS classname of the element that should receive the `validClass` and `invalidClass`
	beforeValidate: null, // A function to run before the actual form submission
	onSubmit: null, // A function to run during the actual form submission
	afterValidate: null // A function to run after the actual form submission
};
```

## Validation types

There are several built-in validation types:

-   name
-   zip
-   presence
-   email
-   phone
-   address
-   integer
-   float
-   credit-card
-   cvc

All of these validation types represent a regular expression which is used to test the value of the form element against to.

In order to add more validatior types, use the third constructor argument as shown above.

For example, if you need to add a new `zip` type:

```javascript
const datorCustomTypes = {
	zip: /^\d{4}$/ // Change from 5 digits to 4 digits
};
```

## LICENSE

MIT
