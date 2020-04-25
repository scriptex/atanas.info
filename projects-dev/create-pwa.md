![Create PWA Logo](https://raw.githubusercontent.com/scriptex/create-pwa/master/create-pwa.svg?sanitize=true)

[![GitHub release](https://img.shields.io/github/release/scriptex/create-pwa.svg)](https://github.com/scriptex/create-pwa/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/create-pwa.svg)](https://github.com/scriptex/create-pwa/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/create-pwa.svg)](https://github.com/scriptex/create-pwa/commits/master)
[![Build Status](https://travis-ci.org/scriptex/create-pwa.svg?branch=master)](https://travis-ci.org/scriptex/create-pwa)
[![npm](https://img.shields.io/npm/dt/create-pwa.svg)](https://www.npmjs.com/package/create-pwa)
[![npm](https://img.shields.io/npm/v/create-pwa.svg)](https://www.npmjs.com/package/create-pwa)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/create-pwa/README.md)](https://github.com/scriptex/create-pwa/)

# Create PWA (Create Progressive Web Application)

> Easily create a Progressive Web Application

## About

`create-pwa` is a module for quick scaffolding and producing of progressive web applications.

`create-pwa` adds the minimum required boilerplate which your app requires in order to become a PWA.

`create-pwa` can be used with existing applications or can be the first thing one does when starting a new app.

## Dependencies

In order to use this module, you must have NodeJS installed and NPM or Yarn available.

## Install

```bash
# Using NPM:
npm i create-pwa --save-dev

# Using Yarn
yarn add create-pwa --dev
```

## Arguments

1. `icon`: Specifies a relative path to the application icon. **Should be a `.png` file.**

This path is relative to the folder you are located in. It is recommended that the icon file is at least a 512x512 pixels square.

**The `icon` argument is not required.**

If the `icon` argument is not provided, the [default icon](https://github.com/scriptex/create-pwa/blob/master/icon.png) is used.

2. `launch`: Specifies a relative path to the application launch (splash) screen. **Should be a `.png` file.**

This path is relative to the folder you are located in. It is recommended that the launch is at least 3200x3200 pixels square and the actual content (for example brand image) is located in the middle of the image in a square with dimensions up to 500x500 pixels.

**The `launch` argument is not required.**

If the `launch` argument is not provided, the [default launch screen](https://github.com/scriptex/create-pwa/blob/master/launch.png) is used.

## Usage

First, navigate to your application's folder:
Then run the install command (see above)

```bash
cd your/app/folder

create-pwa --icon="./icon.png" --launch="./launch.png"
```

You can also use `create-pwa` as a package.json script:

```json
{
	"scripts": {
		"pwa": "create-pwa --icon=\"path/to/your/icon.png\" --launch=\"path/to/your/launch.png\""
	}
}
```

The above commands will generate:

- a `manifest.json` and a `service-worker.js` files
- several (8) png icons in the `/icons/` folder in your app's root folder
- several (19) favicons in the `/favicons` folder in your app's root folder
- several (20) launch screen images in the `launch-screen` folder in your app's root folder
- a `config.xml` file in your app's root folder - this file is required in Microsoft's browsers

You can edit the contents of the `manifest.json` and `service-worker.js` files.

Their default content is based on industry's best practices and is highly opinionated.

In order to create a customized experience for your users, feel advised to revise and edit the contents of the above files.

When the files(`manifest.json` and `service-worker.js`) are ready for production, you need to let the world know about them:

Feel adviced to edit the content of the `<TileColor>` tag in the `config.xml` file as it matches the color of your application's status bar on Chrome (found in the `<meta name="color" />` tag);

1.  Add the following to the `head` of your HTML file(s):

```html
<link rel="manifest" href="manifest.json" />
```

You can read more about the Web App Manifest [here](https://developers.google.com/web/fundamentals/web-app-manifest/).

2.  Add the following snippet to your application's JavaScript bundle or place it in a `script` tag just before the closing `</body>` tag in your HTML file(s):

```javascript
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('./service-worker.js').then(
			registration => {
				console.log(`ServiceWorker registration successful with scope: ${registration.scope}`);
			},
			error => {
				console.log(`ServiceWorker registration failed: ${error}`);
			}
		);
	});
}
```

The code above checks for service worker support and then registers a service worker located in the `service-worker.js` file in the root of the project.

You can read more about Service Workers [here](https://developers.google.com/web/fundamentals/primers/service-workers/).

After that, add references to all icons which were generated by `create-pwa`:

3. Add the following favicons and meta tags in the `head` of your HTML file(s):

For more info about the favicons and meta tags below see [here](https://github.com/audreyr/favicon-cheat-sheet).

```html
<!-- All Apple touch icons for iPad, iPhone, iPod -->
<link rel="apple-touch-icon" sizes="57x57" href="favicons/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon" sizes="60x60" href="favicons/apple-touch-icon-60x60.png" />
<link rel="apple-touch-icon" sizes="72x72" href="favicons/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon" sizes="76x76" href="favicons/apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon" sizes="114x114" href="favicons/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon" sizes="120x120" href="favicons/apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon" sizes="144x144" href="favicons/apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon" sizes="152x152" href="favicons/apple-touch-icon-152x152.png" />

<!-- All favicon sizes - for all devices and browsers -->
<link rel="icon" type="image/png" href="favicons/favicon-196x196.png" sizes="196x196" />
<link rel="icon" type="image/png" href="favicons/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/png" href="favicons/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="favicons/favicon-16x16.png" sizes="16x16" />
<link rel="icon" type="image/png" href="favicons/favicon-128.png" sizes="128x128" />

<!-- A favicon with four different sizes -->
<link rel="shortcut icon" type="image/x-icon" href="favicons/favicon.ico" />

<!-- Application color for Microsoft Windows app tile and Android status bar -->
<meta name="theme-color" content="#edc22e" />
<meta name="msapplication-TileColor" content="#edc22e" />

<!-- Application name for Microsoft Windows app tile -->
<meta name="application-name" content="Create PWA" />

<!-- Application icons for Microsoft Windows app tile -->
<meta name="msapplication-TileImage" content="favicons/mstile-144x144.png" />
<meta name="msapplication-square70x70logo" content="favicons/mstile-70x70.png" />
<meta name="msapplication-square150x150logo" content="favicons/mstile-150x150.png" />
<meta name="msapplication-wide310x150logo" content="favicons/mstile-310x150.png" />
<meta name="msapplication-square310x310logo" content="favicons/mstile-310x310.png" />

<!-- Application config file for Microsoft browsers -->
<meta name="msapplication-config" content="config.xml" />
```

4. (Optional) Add the following launch screens in the `head` of your HTML file(s):

```html
<!-- 12.9" iPad Pro Portrait -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-2048x2732.png"
	media="(device-width: 2048px) and (device-height: 2732px) and (orientation: portrait)"
/>

<!-- 12.9" iPad Pro Landscape -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-2732x2048.png"
	media="(device-width: 2732px) and (device-height: 2048px) and (orientation: landscape)"
/>

<!--  11" iPad Pro Portrait -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-1668x2388.png"
	media="(device-width: 1668px) and (device-height: 2388px) and (orientation: portrait)"
/>

<!--  11" iPad Pro Landscape -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-2388x1668.png"
	media="(device-width: 2388px) and (device-height: 1668px) and (orientation: landscape)"
/>

<!-- 10.5" iPad Pro Portrait -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-1668x2224.png"
	media="(device-width: 1668px) and (device-height: 2224px) and (orientation: portrait)"
/>

<!-- 10.5" iPad Pro Landscape -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-2224x1668.png"
	media="(device-width: 2224px) and (device-height: 1668px) and (orientation: landscape)"
/>

<!--  9.7" iPad Portrait -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-1536x2048.png"
	media="(device-width: 1536px) and (device-height: 2048px) and (orientation: portrait)"
/>

<!--  9.7" iPad Landscape -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-2048x1536.png"
	media="(device-width: 2048px) and (device-height: 1536px) and (orientation: landscape)"
/>

<!--7.9" iPad mini 4 Portrait -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-1536x2048.png"
	media="(device-width: 1536px) and (device-height: 2048px) and (orientation: portrait)"
/>

<!--7.9" iPad mini 4 Landscape -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-2048x1536.png"
	media="(device-width: 2048px and (device-height: 1536px) and (orientation: landscape)"
/>

<!--  iPhone XS Max Portrait -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-1242x2688.png"
	media="(device-width: 1242px and (device-height: 2688px) and (orientation: portrait)"
/>

<!--  iPhone XS Max Landscape -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-2688x1242.png"
	media="(device-width: 2688px) and (device-height: 142px) and (orientation: landscape)"
/>

<!--  iPhone XS Portrait -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-1125x2436.png"
	media="(device-width: 1125px) and (device-height: 236px) and (orientation: portrait)"
/>

<!--  iPhone XS Landscape -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-2436x1125.png"
	media="(device-width: 2436px) and (device-height: 1125px) and (orientation: landscape)"
/>

<!--  iPhone XR Portrait -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-828x1792.png"
	media="(device-width: 828px) and (device-height: 192px) and (orientation: portrait)"
/>

<!--  iPhone XR Landscape -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-1792x828.png"
	media="(device-width: 1792px) and (device-height: 28px) and (orientation: landscape)"
/>

<!--  iPhone X Portrait -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-1125x2436.png"
	media="(device-width: 1125px) and (device-height: 236px) and (orientation: portrait)"
/>

<!--  iPhone X Landscape -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-2436x1125.png"
	media="(device-width: 2436px and (device-height: 1125px) and (orientation: landscape)"
/>

<!--  iPhone 8 Plus Portrait -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-1242x2208.png"
	media="(device-width: 1242px and (device-height: 2208px) and (orientation: portrait)"
/>

<!--  iPhone 8 Plus Landscape -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-2208x1242.png"
	media="(device-width: 2208px) and (device-height: 1242px) and (orientation: landscape)"
/>

<!--  iPhone 8 Portrait -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-750x1334.png"
	media="(device-width: 750px) and (device-height: 134px) and (orientation: portrait)"
/>

<!--  iPhone 8 Landscape -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-1334x750.png"
	media="(device-width: 1334px and (device-height: 750px) and (orientation: landscape)"
/>

<!--  iPhone 7 Plus Portrait -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-1242x2208.png"
	media="(device-width: 1242px and (device-height: 2208px) and (orientation: portrait)"
/>

<!--  iPhone 7 Plus Landscape -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-2208x1242.png"
	media="(device-width: 2208px) and (device-height: 1242px) and (orientation: landscape)"
/>

<!--  iPhone 7 Portrait -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-750x1334.png"
	media="(device-width: 750px) and (device-height: 134px) and (orientation: portrait)"
/>

<!--  iPhone 7 Landscape -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-1334x750.png"
	media="(device-width: 1334px and (device-height: 750px) and (orientation: landscape)"
/>

<!--  iPhone 6s Plus Portrait -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-1242x2208.png"
	media="(device-width: 1242px and (device-height: 2208px) and (orientation: portrait)"
/>

<!--  iPhone 6s Plus Landscape -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-2208x1242.png"
	media="(device-width: 2208px) and (device-height: 1242px) and (orientation: landscape)"
/>

<!--  iPhone 6s Portrait -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-750x1334.png"
	media="(device-width: 750px) and (device-height: 134px) and (orientation: portrait)"
/>

<!--  iPhone 6s Landscape -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-1334x750.png"
	media="(device-width: 1334px) and (device-height: 50px) and (orientation: landscape)"
/>

<!--  iPhone SE Portrait -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-640x1136.png"
	media="(device-width: 640px) and (device-height: 136px) and (orientation: portrait)"
/>

<!--  iPhone SE Landscape -->
<link
	rel="apple-touch-startup-image"
	href="./launch-screens/launch-screen-1136x640.png"
	media="(device-width: 1136px) and (device-height: 640px) and (orientation: landscape)"
/>
```

5. (Optional) Add the following attribute to your `html` tag: `manifest="<YOUR_APP_NAME>.appcache"`. It should look something like this:

```html
<html lang="en" manifest="create-pwa.appcache">
	<!-- More awesome HTML code here -->
</html>
```

This will enable application cache and will cache all files listed in the `.appcache` file.
Application cache is currently deprecated in most evergreen browsers and will probably be removed soon.
This, however, does not mean that you can not use it in older browsers (for example IE 11).

You can read more about Application Cache [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache)

## More info

There is a lot information about Progressive Web Applications on the Internet.
In order to comply with browser's requirements and pass the audits you need to check out and fulfill the [PWA Checklist](https://developers.google.com/web/progressive-web-apps/checklist).

The entries listed in **Baseline Progressive Web App Checklist** are mandatory and without them your web app will not qualify as a PWA.

If you wish to test your web app's compliance, you can use the Chrome's built-in Lighthouse tool (found under the _Audits_ tab in the Developer tools).

## NodeJS API

You can generate each of the components above separately using the Create PWA API in NodeJS:

1. To create only an `appcache` file:

```javascript
const { setAppCache } = require('create-pwa');
const appName = 'Your application name';

setAppCache(appName);
```

**The generated `appcache` file contains references to the application icons and application launch screens. You must have these already generated otherwise you must edit your `appcache` file and remove them.**

2. To create only the application icons:

```javascript
const { setIcons } = require('create-pwa');
const appIcon = require('fs').resolve(__dirname, './your_icon.png');

setIcons(appIcon);
```

**The generated icons are located in the `/icons` folder.**

3. To create only the launch screens:

```javascript
const { setLaunchScreens } = require('create-pwa');
const launchScreen = require('fs').resolve(__dirname, './your_launch_screen.png');

setLaunchScreens(launchScreen);
```

**The generated files are located in the `/launch-screens` folder.**

4. To create only manifest file:

```javascript
const { setManifest } = require('create-pwa');
const appName = 'Your application name';

setManifest(appName);
```

**The generated `manifest.json` file contains references to the application icons. You must have these already generated otherwise you must edit your `manifest.json` file and remove them.**

5. To create only favicon files:

```javascript
const { setFavicons } = require('create-pwa');
const appIcon = require('fs').resolve(__dirname, './your_icon.png');

setFavicons(appIcon);
```

**The generated files are located in the `/favicons` folder.**

6. To create only service worker file:

```javascript
const { setServiceWorker } = require('create-pwa');
const appName = 'Your application name';

setServiceWorker(appName);
```

**The generated `service-worker.js` file contains references to the application icons and application launch screens. You must have these already generated otherwise you must edit your `service-worker.js` file and remove them.**

## LICENSE

MIT
