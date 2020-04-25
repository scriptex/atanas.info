[![GitHub release](https://img.shields.io/github/release/scriptex/react-accordion-ts.svg)](https://github.com/scriptex/react-accordion-ts/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/react-accordion-ts.svg)](https://github.com/scriptex/react-accordion-ts/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/react-accordion-ts.svg)](https://github.com/scriptex/react-accordion-ts/commits/master)
[![Build Status](https://travis-ci.org/scriptex/react-accordion-ts.svg?branch=master)](https://travis-ci.org/scriptex/react-accordion-ts)
[![npm](https://img.shields.io/npm/dt/react-accordion-ts.svg)](https://www.npmjs.com/package/react-accordion-ts)
[![npm](https://img.shields.io/npm/v/react-accordion-ts.svg)](https://www.npmjs.com/package/react-accordion-ts)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/react-accordion-ts/README.md)](https://github.com/scriptex/react-accordion-ts/)

# React Accordion

An accordion widget for React applications written in Typescript.

## Install

```bash
npm i react-accordion-ts

# or

yarn add react-accordion-ts
```

## Usage

```javascript
import React from 'react';
import Accordion from 'react-accordion-ts';

const news = [
	{
		date: '12-10-2018',
		title: 'Awesome title',
		content: 'Fantastic content'
	},
	{
		date: '13-10-2018',
		title: 'Awesome title',
		content: 'Fantastic content'
	},
	{
		date: '13-10-2018',
		title: 'Awesome title',
		content: 'Fantastic content'
	}
];

const items = news.map(({ date, title, content }) => ({
	title: <h2>{date + ' - ' + title}</h2>,
	content: <p>{content}</p>
}));

export const MyComponent = () => <Accordion items={items} duration={300} multiple={true} />;
```

## Props

1. items: Array of objects with the following properties:

    - title [Required] - React Node
    - content [Required] - React Node

2. Duration [Required] - Number (Duration of the toggling transition)

3. Multiple [Required] - Boolean (If false, only one panel can be opened at any time)

## LICENSE

MIT
