Today I ran into the following issue: I wanted to run **multiple Webpack based applications simultaneously** and I couldn't find any resources which help accomplish my goal.

My use case is the following: I have a complex front-end application which consists of three sub applications:

1. The authentication application - This is the app which is used for all authentication routes - Login, Register, Forgot password, Update password, Create password, etc. The app communicates with AWS Cognito.
2. The web application - This is the app itself, it communicates with the rest of the applications via localStorage, cookies, etc.
3. The shared assets application - This app contains the shared assets - logos, icons, application icons, favicons, manifests, shared stylesheets and scripts, etc.

The authentication app and the web app are based on Webpack - they use a custom build process.

The assets application is served via a simple NodeJS HTTP server. It is important to note that I have multiple assets repositories/applications because my application supports branding - it is basically a white-label.

In order to run all of these applications I needed to run three NodeJS processes in parallel. Now all of you will simply say that I can use `concurrently` or `npm-run-all` but my use case is a bit different - those three apps live in separate repositories and can work independently from each other or together, it all depends on the current use case.

So, I tried using a bash script to accomplish what I needed - running three NodeJS processes in parallel. Unfortunately my bash skills are limited so I couldn't do it. That's why I decided to use NodeJS as an automation tool.

So I started by creating a new NodeJS app using Yarn as a package manager by running `yarn init -y`.

This command generated a `package.json` file which I filled with the following values:

```json
{
	"name": "frontend-development",
	"version": "1.0.0",
	"scripts": {},
	"dependencies": {}
}
```

I needed to read command line arguments so I installed `yargs`.

I also needed to set and use environmental variables so I installed `dotenv`.

Now my `package.json` file looks like this:

```json
{
	"name": "frontend-development",
	"version": "1.0.0",
	"scripts": {},
	"dependencies": {
		"dotenv": "^8.2.0",
		"yargs": "^16.2.0"
	}
}
```

I created a `.env` file and a `.env.example` file both of which contain environmental variables - absolute paths to the repositories on my local machine's file system. These files look like this:

```sh
# Absolute path to the authentication application
AUTH=/Users/user/server/projects/auth
# Absolute path to the main web application
WEB_APP=/Users/user/server/projects/web-app
# Absolute path to the first brand application
BRAND_ONE=/Users/user/server/projects/brand-one
# Absolute path to the second brand application
BRAND_TWO=/Users/user/server/projects/brand-two
```

I added dummy content in the `.env.example` file and the actual paths in the `.env` file. Then I added the `.env` file to my `.gitignore `file because I don't want to push real environmental variables to my remote repository.

Then I created an `index.js` file in the root of my project and updated the `package.json` file like this:

```json
{
	"name": "frontend-development",
	"version": "1.0.0",
	"main": "index.js",
	"scripts": {},
	"dependencies": {
		"dotenv": "^8.2.0",
		"yargs": "^16.2.0"
	}
}
```

The `index.js` file contains the script which takes care of running all apps simultaneously:

```js
#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { argv } = yargs(hideBin(process.argv));
const dotenv = require('dotenv');

const { execSync } = require('child_process');

dotenv.config();

const isDefault = argv.brand === 'one';

const { AUTH, WEB_APP, BRAND_ONE, BRAND_TWO } = process.env;

const run = dirs => execSync(dirs.map(dir => `cd ${dir} && yarn start`).join('&'));

run([isDefault ? BRAND_ONE : BRAND_TWO, AUTH, WEB_APP]);
```

Now let's take some time to explain the content of the `index.js` file:

1. On the first row I put the [shebang](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) which tells the OS that this is an executable file and will be executed by NodeJS.
2. Then I imported the dependencies - `yargs` and `dotenv`.
3. Then I destructured the `argv` object from `yargs`. This object contains all command line arguments which are passed to the NPM scripts.
4. Then I imported the `execSync` method from the NodeJS's built-in `child_process` module.
5. Then I ran the `dotenv.config()` method which configures `dotenv` and makes all environmental variables defined in the `.env` file available to the current script.
6. Then I defined the variable `isDefault` which basically stores a boolean value showing if the the `BRAND_ONE` assets repostitory should be served.
7. Then I obtained all environmental variables by destructuring the `process.env` object. Here I have access to the variables defined in the `.env` file.
8. Then I defined a `run` function which accepts an array of paths and executes a shell script which does the following:
    - changes the current working directory to the directory matching the provided path: `cd ${dir}`
    - executes the start NPM script in the directory matching the provided path
    - concatenates the above command with the commands for all paths in the provided array using `&`
9. Lastly I executed the run function providing an array of paths based on the `--brand` command line argument.

The `--brand` command line argument accepts value one or two depending on the assets folder I want to use.

Then I added some NPM scripts to my `package.json` file:

```json
{
	"name": "frontend-development",
	"version": "1.0.0",
	"main": "index.js",
	"scripts": {
		"start": "node index.js",
		"start-one": "yarn start --brand one",
		"start-two": "yarn start --brand two"
	},
	"dependencies": {
		"dotenv": "8.2.0",
		"yargs": "16.2.0"
	}
}
```

In order to run a particular set of applications I only needed to run one of the NPM scripts: `yarn start-one` or `yarn start-two`.

Now all of my applications run in parallel!
