[![GitHub release](https://img.shields.io/github/release/scriptex/localga.svg)](https://github.com/scriptex/localga/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/localga.svg)](https://github.com/scriptex/localga/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/localga.svg)](https://github.com/scriptex/localga/commits/master)
[![Build Status](https://travis-ci.org/scriptex/localga.svg?branch=master)](https://travis-ci.org/scriptex/localga)
[![npm](https://img.shields.io/npm/dt/localga.svg)](https://www.npmjs.com/package/localga)
[![npm](https://img.shields.io/npm/v/localga.svg)](https://www.npmjs.com/package/localga)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/localga/README.md)](https://github.com/scriptex/localga/)

# Local GA

Save a local version of your Google Analytics script

## About

Google Page Speed Insights complains about the expiry date set for the Google Analytics (or Google Tag Manager) script.

One way to work around this issue is to self host this script.

This however is not so good idea because this way the script will no longer be updated/bug-fixed.

This is where `localga` steps in.

`localga` automates the task of updating the Google Analytics (or Google Tag Manager) script.

You can also use this package if you need (or want to) self host the analytics files because you offer offline experience for your users.
The actual analytics tracking should be done by you and is not part of this package.

## Install

```bash
npm i localga --save-dev
```

or

```bash
yarn add localga --dev
```

## Usage

1. As a package.json script:

```javascript
"scripts": {
	"ga": "localga --id UA-XXXXXXXX-Y --folder ./your/js/folder"
}
```

2. From command line (Install the module globally first):

```bash
localga --id UA-XXXXXXXX-Y --folder ./your/js/folder
```

The `localga` module will generate two new script files called `google-analytics-local.js` and `analytics.js` placed in the folder you provided.

If no `--folder` is specified, the files will be placed in the root of your project.

After the files are generated, you should `require` the `google-analytics-local.js` file in your bundle (or include it in your HTML file(s)).

Then you should enable the analytics script. Something like the following:

```javascript
window.dataLayer = window.dataLayer || [];

function gtag() {
	dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'UA-XXXXXXXX-Y');
```

**UA-XXXXXXXX-Y is your Google Analytics ID**

## LICENSE

MIT
