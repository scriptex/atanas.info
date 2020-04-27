[![GitHub release](https://img.shields.io/github/release/scriptex/react-dropper.svg)](https://github.com/scriptex/react-dropper/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/react-dropper.svg)](https://github.com/scriptex/react-dropper/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/react-dropper.svg)](https://github.com/scriptex/react-dropper/commits/master)
[![Build Status](https://travis-ci.org/scriptex/react-dropper.svg?branch=master)](https://travis-ci.org/scriptex/react-dropper)
[![npm](https://img.shields.io/npm/dt/react-dropper.svg)](https://www.npmjs.com/package/react-dropper)
[![npm](https://img.shields.io/npm/v/react-dropper.svg)](https://www.npmjs.com/package/react-dropper)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/react-dropper/README.md)](https://github.com/scriptex/react-dropper/)

# React Dropper

Pick color from an image in React

## Install

```bash
npm i react-dropper

# or

yarn add react-dropper
```

## About

Info about the component

## Usage

```javascript
import React from 'react';
import Dropper from 'react-dropper';

import MyImage from '../images/image.jpg';

ReactDOM.render(
	<Dropper
		width={400}
		height={400}
		color="#000000"
		image={MyImage}
		className="react-dropper"
		onChange={(color, sync) => {
			// Based on the event type
			// the color can be updated or not
			// If the event type is click the color is updated
			// If the event type is mousemove or click, the color is the updated color
			// If the event type is mouseleave, the color is the old color (coming from props)

			// The sync flag indicates whether the color has been updated
		}}
  	/>,
	document.getElementById('demo')
);
```

## Props

1. Width - width of the canvas area
2. Height - height of the canvas area
3. Color - the initial color of the canvas
4. Image - url of the image asset - JPG or PNG supported and CORS enabled for external resources
5. onChange - function which accepts `color` and `sync` arguments (explained above)

## Demo

Please [click here](https://github.com/scriptex/react-dropper/demo/index.html) to see the demo.

## LICENSE

MIT
