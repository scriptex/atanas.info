[![GitHub issues](https://img.shields.io/github/issues/scriptex/calendar-widget.svg)](https://github.com/scriptex/calendar-widget/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/calendar-widget.svg)](https://github.com/scriptex/calendar-widget/commits/master)
[![Build Status](https://travis-ci.org/scriptex/calendar-widget.svg?branch=master)](https://travis-ci.org/scriptex/calendar-widget)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/calendar-widget/README.md)](https://github.com/scriptex/calendar-widget/)

# Calendar Widget

A super simple calendar widget written in TypeScript and SCSS implemented with a11y (accessibility) and i18n (internationalization) in mind.

## Demo

If you wish to go directly to the demo, please click [here](https://codepen.io/scriptex/pen/mgLExx) or [here](https://github.com/scriptex/calendar-widget/blob/master/demo/index.html).

## Options

The widget accepts four options which are optional:

1. Start year - number - defaults to current year.
2. Start month - number - defaults to current month (**It is zero based**).
3. ID of the container which will hold the calendar - String - defaults to `body`.
4. An object with strings used for internationalization - Object - defaults to:
    ```json
    {
		"days": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		"months": ["January", "February", "March", "April", "May", "June", "July", "August", "Septemer", "October", "November", "December"],
		"prevMonth": "&larr;",
		"nextMonth": "&rarr;",
		"prevMonthTitle": "Previous month",
		"nextMonthTitle": "Next month"
	}
	```

## Install

```bash
# Via NPM
npm i simple-calendar-widget

# Via Yarn
yarn add simple-calendar-widget
```

## Usage

If you're using a module bundler such as Webpack, Rollup, Browserify:

```js
import { renderCalendarWidget } from 'simple-calendar-widget';

// Default settings
renderCalendarWidget();

// Or custom settings
renderCalendarWidget(2018, 0, '#calendar',     {
	"days": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	"months": ["January", "February", "March", "April", "May", "June", "July", "August", "Septemer", "October", "November", "December"],
	"prevMonth": "&larr;",
	"nextMonth": "&rarr;",
	"prevMonthTitle": "Previous month",
	"nextMonthTitle": "Next month"
});
```

If you're NOT using a module bundler such as Webpack, Rollup, Browserify:

First include the script in your markup:

```html
<script src="PATH_TO_CALENDAR_WIDGET_SOURCE/dist/index.js"></script>
```

Then use the package:

```js
// Default settings
renderCalendarWidget();

// Or custom settings
renderCalendarWidget(2018, 0, '#calendar',     {
	"days": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	"months": ["January", "February", "March", "April", "May", "June", "July", "August", "Septemer", "October", "November", "December"],
	"prevMonth": "&larr;",
	"nextMonth": "&rarr;",
	"prevMonthTitle": "Previous month",
	"nextMonthTitle": "Next month"
});
```

## Typings

The widget exports several types which are automatically found by TypeScript. The typings are located in the [`dist` folder](https://github.com/scriptex/calendar-widget/blob/master/dist/index.d.ts).

## CSS

The widget comes with an optional stylesheet. You can see the default styling in the demo above.

In order to use the default style, you should have used the default settings:

```css
/* If you used the default settings */
@import 'calendar-widget/dist/index.css';
```

If you are using SCSS and wish to use the widget with custom settings, you can import the SCSS mixin and tweak it a bit:

```scss
@import 'calendar-widget/index.scss';

#my-calendar-container {
	$calendar-width: 400px;
	$calendar-color: rebeccapurple;
	@include calendar($calendar-width, $calendar-color);
}
```

You can also include the stylesheet in a `<link>` in your markup:

```html
<link rel="stylesheet" href="PATH_TO_CALENDAR_WIDGET_SOURCE/dist/index.css" />
```

## LICENSE

MIT
