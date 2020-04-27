![Webpack MPA Next Logo](https://raw.githubusercontent.com/scriptex/webpack-mpa-next/master/webpack-mpa.svg?sanitize=true)

[![GitHub release](https://img.shields.io/github/release/scriptex/webpack-mpa-next.svg)](https://github.com/scriptex/webpack-mpa-next/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/webpack-mpa-next.svg)](https://github.com/scriptex/webpack-mpa-next/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/webpack-mpa-next.svg)](https://github.com/scriptex/webpack-mpa-next/commits/master)
[![Build Status](https://travis-ci.org/scriptex/webpack-mpa-next.svg?branch=master)](https://travis-ci.org/scriptex/webpack-mpa-next)
[![npm](https://img.shields.io/npm/dt/webpack-mpa-next.svg)](https://www.npmjs.com/package/webpack-mpa-next)
[![npm](https://img.shields.io/npm/v/webpack-mpa-next.svg)](https://www.npmjs.com/package/webpack-mpa-next)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/webpack-mpa-next/README.md)](https://github.com/scriptex/webpack-mpa-next/)

# Webpack-MPA-Next

Opinionated multiple page application setup with Webpack using SASS, PostCSS, ES2017, PNG & SVG Sprites and more.

This boilerplate is suitable for static web applications, WordPress websites, etc.

## Dependencies

In order to use this setup you need to have installed the following dependencies:

1.  Node - min v8.9.4 - LTS recommended
2.  NPM - min v5.6.0
    or
3.  Yarn - min v1.3.2
4.  Bash terminal (Default on OSX/Linux, GitBash or similar on Windows)

## Default setup

The default setup uses PHP files, but you can easily switch to a file format of your choice.

Also, you can always switch to another file/folder structure if the current one does not suit you.

Just keep in mind that the styles should be located in `assets/styles` and the scripts should be located in `assets/scripts`.

## Zero config and fast installation

Navigate to your new project's folder and execute the following command:

```bash
npx webpack-mpa-next && npm i && npm start
```

This will install Webpack-MPA in your project folder and you will be able to start right away.

## Download

You can download this setup [directly](https://github.com/scriptex/webpack-mpa-next/archive/postcss.zip) and extract it.

or use NPM or Yarn to install it:

```bash
npm i webpack-mpa-next
```

or

```bash
yarn add webpack-mpa-next
```

Then navigate to the `webpack-mpa-next` folder and proceed with the rest of the instructions.

## Global installation

It is possible to use the CLI tool included in Webpack MPA Next. In order to do this you must install Webpack MPA Next globally:

```bash
npm i webpack-mpa-next -g
```

or

```bash
yarn global add webpack-mpa-next
```

The `wmpan` binary is now available for you to use.

Go to your new project folder and execute

```bash
wmpa
```

Your new project is setup!

## Install dependencies

```bash
yarn
```

or

```bash
npm i
```

## Develop

```bash
yarn start
```

or

```bash
npm start
```

## Build

```bash
yarn build
```

or

```bash
npm run build
```

## Details

1.  [PostCSS](https://postcss.org/) stylesheets pre and postprocessing

    -   PostCSS entry point is `main.css` located in `assets/styles`
    -   The whole stylesheets file/folder structure is up to you
    -   [ITCSS](https://github.com/scriptex/itcss) boilerplate used as a starting point.
    -   Glob import in CSS thanks to [postcss-easy-import](https://github.com/TrySound/postcss-easy-import)
    -   [url rebase](https://github.com/postcss/postcss-url) - locates and copies assets from `node_modules`
    -   [postcss-utilities](https://github.com/ismamz/postcss-utilities) - allows usage of utility mixins such as `clearfix`
    -   [flexbox bugs](https://github.com/luisrudge/postcss-flexbugs-fixes) - fixes common flexbox issues on Internet Explorer
    -   [css minification](https://cssnano.co/) - minifies the bundles stylesheet
    -   [automatic vendor prefixes](https://github.com/postcss/autoprefixer)

        > "Write your CSS rules without vendor prefixes (in fact, forget about them entirely)"

    -   [postcss preset env](https://github.com/csstools/postcss-preset-env) - use tomorrow's CSS syntax, today
    -   [postcss nested](https://github.com/postcss/postcss-nested) - use SASS like nesting in CSS
    -   [postcss mixins](https://github.com/postcss/postcss-mixins) - PostCSS plugin for mixins
    -   [rules merging](https://github.com/ben-eb/postcss-merge-rules)

2.  PNG Sprite generating using [Webpack SpriteSmith](https://github.com/mixtur/webpack-spritesmith)
    The default setup includes retina sprite support which means that you should provide a retina version of each png icon.

    If you do not wish to use the retina sprite, comment the `@include retina-sprites($retina-groups);` statement in `main.scss` file.

3.  Latest EcmaScript support

    -   Usage of the latest features in EcmaScript
    -   Using [Babel](https://github.com/babel/babel) to transpile to ES5
    -   Minification of the bundled file
    -   Source maps

4.  Automatic browser reload using [BrowserSync](https://browsersync.io/)

    -   The setup assumes that you have a web server installed. If you do not, then the files will be served via the browser-sync built-in server.
    -   If you wish to use a proxy in browsersync you can do it using the `url` CLI argument like this:

    ```bash
    yarn start --env.url=http://your.app
    ```

    or

    ```bash
    npm start -- --env.url=http://your.app
    ```

5.  Images optimization using [Imagemin](https://github.com/Klathmon/imagemin-webpack-plugin)

6.  SVG Sprite generating using [spritesh](https://www.npmjs.com/package/spritesh)

    All svg files located in `assets/images/svg` are merged into a single `sprite.svg` file in `dist` directory.

    This action is performed each time the `start` command is invoked.

7.  All front-end assets are stored in an auto-generated `dist` folder.

## Assets

The `assets` folder contains several folders:

-   `images` - contains several folders too:
    -   `favicon` - contains [all icons variations](https://github.com/audreyr/favicon-cheat-sheet)
    -   `sprite` - contains png sprite's parts
    -   `svg` - contains svg sprite's parts
    -   `temp` - contains content images
-   `scripts` - contains the JS modules
-   `styles` - contains the raw stylesheets

**Each `start` command regenerates the contents of the `dist` folder.**

## Supported Browsers

This setup uses [Browserslist](https://github.com/browserslist/browserslist) to target browsers.

The default list of supported browsers is listed in the `package.json` file:

```json
{
	"browserslist": ["> 1%", "last 2 versions"]
}
```

This means that supported browsers vary based on current usage data and current browser versions.

In general, this setup supports the two most recent versions of all browsers.

## Scripts

There are several scripts defined in the `package.json` file:

```json
{
	"build": "webpack --env.NODE_ENV=production",
	"start": "webpack --watch --env.NODE_ENV=development",
	"optisize": "optisize --src=\"./assets/images\"",
	"html": "php index.php > index.html",
	"critical": "critical index.html > assets/dist/critical.css",
	"rm-html": "rm index.html",
	"pwa": "create-pwa --icon=\"./assets/images/favicon/icon.png\"",
	"prod": "yarn build && yarn html && yarn critical && yarn rm-html"
}
```

Here is a bit more about what each script does:

1.  `build`: Builds the production version of the javascript and css bundles, regenerates PNG and SVG sprites.
2.  `start`: Starts the development sequence, regenerates PNG and SVG sprites, opens your default browser and watches for changes.
3.  `optisize`: Optimizes your PNG, JPG and GIF images.
4.  `html`: Converts your `index.php` file to `index.html`.
5.  `critical`: Using the `index.html` extracts the critical css and generates a `critical.css` file in the `assets/dist` folder which is then inlined in the `index.php` file.
6.  `rm-html`: Deletes the `index.html` file.
7.  `pwa`: Generates boilerplate files for a PWA. More info [here](https://github.com/scriptex/create-pwa).
8.  `prod`: Runs 1, 4, 5, 6. (In this exact order).

In order to use the ability to generate critical CSS you must have the `php` binary exposed in your bash terminal.
More about PHP's commandline usage can be found [here](https://php.net/manual/en/features.commandline.php).

## Public vs. private projects

This starter boilerplate is licensed under the MIT open source license and is publicly available.

If you intend to use it to create a private and closed source project, please make sure to delete the `license` field in the `package.json` file and add `"private": true` in the same file.

This will make sure that you don't accidentally use an open source license for your private/closed source project.

## Support this project

[![Tweet](https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Fwebpack-mpa-next&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)
[![Donate](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65)](https://www.paypal.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/atanas)

## LICENSE

MIT
