# Testing WebSockets with Cypress

[![Written By a Human Being](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/written-by-a-human-being/main/badge.json)](https://github.com/scriptex/written-by-a-human-being)

The application I am building relies and uses heavily live data provided via [SSE (Server Sent Events)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) and [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).

Both live data streams require authentication in order to provide the correct data to the end user. This is relatively simple to achieve with the EventSource API but the WebSockets API does not provide this out-of-the-box. In order to authenticate the WebSocket connection, we must use a custom protocol which is provided as a second argument to the `WebSocket` constructor.

The automation framework which I am using to test the end-to-end implementation is [Cypress](https://www.cypress.io/). At the time of writing, Cypress v10.8.0 does not support custom protocols in the WebSocket connection requests - these protocols are simply removed. After a significant amount of time spent in the Cypress issues and in the Cypress source code, I found out that this is caused by the `http-proxy` library which is used by Cypress behind the scenes. The lack of support for authenticated WebSockets results in constantly failing connection requests which have the 403 status.

My application is using Azure DevOps as CI/CD environment and the 403s from the live data sources result in premature closing of the Cypress process when executed in the CI environment (latest Ubuntu, and NodeJS LTS) - the error is `This socket has been ended by the other party`. There are plenty of issues in the Cypress' Github repository related to this and all of them are saying that this is caused by the multiple failing WebSockets requests.

Some prerequisite: My application is built using React and Redux and is written in Typescript. I am exposing the application's Redux store to the global `Window` namespace when the application is being opened via Cypress. In order to do so, I am checking if the `Cypress` object exists in the Global namespace. Exposing the Redux store allows me to use the `dispatch` and `getState` methods in order to perform end-to-end testing:

```typescript
/**
 * index.tsx - my app's entrypoint
 * here I am exporting the Redux store for the rest of the application to use
 * here is where I expose it to the Global namespace if the `Cypress` object exists
 */
export const store = configureStore();

if (window.Cypress) {
	window.store = store;
}
```

I've decided that the only way for my application to receive the required live data is to build a proxy which connects to the live data streams on behalf of the logged in user and sends the live data back to the application.

In order to do this, I decided to build a new web server which uses [Socket.IO](https://socket.io/) and provides unauthenticated Socket.IO access. This web server is supposed to run in parallel with the Cypress process so the application can connect to it.

First, I installed the required dependencies - [`eventsource`](https://www.npmjs.com/package/eventsource), [`websocket`](https://www.npmjs.com/package/websocket), [`socket.io`](https://www.npmjs.com/package/socket.io) and [`socket.io-client`](https://www.npmjs.com/package/socket.io-client). `eventsource` and `websocket` are already installed for me but for the sake of the example, I will add them below:

```sh
yarn add eventsource websocket
yarn add socket.io socket.io-client -D
```

The parallel web server is a simple NodeJS server which uses Socket.IO. The servers listens on port 3000 but this can be modified to meet your project's needs.

The `connectWebSocket` function below accepts three arguments:

- the authentication token which is used to sign the connection requests for SSE and WebSockets on the original backend server
- the URL for the SSE server
- the URL for the websocket server

The URLs can be easily configured as environmental variables but in my case I needed to pass them as arguments.

The three arguments above are coming from the query arguments, passed when connecting to the Socket.IO server from the client.

The `connectWebSocket` function is called again if (for some reason) the server closes the WebSocket connection. This might happen due to inactivity or invalid access token. If the reason is an expired access token, you must handle this yourself and re-connect to the Socket.IO server with fresh token.

The `connectWebSocket` function tries to connect to both streams and upon success it starts sending the corresponding data through the Socket.IO connection.

It is important to note that if you're planning to use Server Sent Events, you **MUST** list all needed SSE topics (replace the `['topic1', 'topic2', 'topic3']` with an array which contains all topics from your SSE implementation).

Save the code below in a file called `socket.io.server.js` and put it in your application's folder.

```javascript
const { Server } = require('socket.io');
const EventSource = require('eventsource');
const { w3cwebsocket } = require('websocket');
const { createServer } = require('http');

const server = createServer();
const io = new Server(server);

const connectWebSocket = (token, sse, socket) => {
	try {
		/**
		 * x-api-key is my custom protocol
		 * also, I pass the token as base64 encoded string
		 */
		const webSocket = new w3cwebsocket(socket, ['x-api-key', btoa(unescape(encodeURIComponent(token)))]);

		webSocket.onclose = () => connectWebSocket(socket, token);
		webSocket.onmessage = message => io.send(message);
	} catch (e) {}

	try {
		const sseSource = new EventSource(sse, {
			headers: { Authorization: 'Bearer ' + token },
			withCredentials: false
		});

		['topic1', 'topic2', 'topic3'].forEach(topic => {
			sseSource.addEventListener(topic, message => {
				io.send(message);
			});
		});
	} catch (e) {}
};

io.on('connection', socket => {
	const { sseURL, token, socketURL } = socket.handshake.query;

	connectWebSocket(token, sseURL, socketURL);
});

server.listen(3000);
```

Now, I am going back to my frontend application where I need to stop trying to connect to the SSE and WebSockets if the application is running in Cypress mode.

I do this for the Server Sent Events:

```typescript
export const connectToEventStream = (token: string, dispatch: Dispatch): EventSource | void => {
	if (window.Cypress) {
		return;
	}

	const initProps = {
		headers: { Authorization: 'Bearer ' + token },
		withCredentials: false
	};

	try {
		sseSource = new window.EventSourcePolyfill(SSE_URL_DEFAULT, initProps);
	} catch (e: any) {
		handleError(e, 'Failed connecting to SSE stream:');
	}

	/**
	 * More code which listens to various EventSource
	 * topics and dispatches Redux actions
	 */
};
```

And for the WebSockets:

```typescript
export const connectToWebSockets = (token: string, dispatch: Dispatch): W3CWebSocket | void => {
	if (window.Cypress) {
		return;
	}

	try {
		if (!webSocket) {
			webSocket = new W3CWebSocket(process.env.WEBSOCKET_URL_DEFAULT, [
				'x-api-key',
				toBase64(token).replace(isAdminPortal() ? '==' : '', '')
			]);
		}
	} catch (e: any) {
		handleError(e, 'Failed connecting to WebSocket:');
	}

	/**
	 * More code which listens for WebSocket
	 * messages and dispatches Redux actions
	 */
};
```

With all of this information in mind, I need to make the application connect to the newly created Socket.IO server. To do so, I add a new function in my application logic. This function should be `dispatch`-ed using the Redux store's `dispatch` method.

```typescript
export const connectCypressLiveData =
	() =>
	(dispatch: Dispatch<any>): void => {
		if (!window.Cypress) {
			return;
		}

		const socket = io('ws://localhost:3000', {
			query: {
				token: localStorage.getItem('token'),
				sseURL: process.env.SSE_URL,
				socketURL: process.env.WEBSOCKET_URL
			}
		});

		socket.on('message', message => {
			// Handle the message from the Socket.IO connection
		});
	};
```

The `connectCypressLiveData` is being called when the application starts - this way the application can start receiving live data right away.

The only thing left is running both Cypress and the Socket.IO server simultaneously. In order to do this, I am using an NPM package called [`concurrently`](https://www.npmjs.com/package/concurrently). I modify the `package.json`'s `scripts` like this:

```json
{
	"scripts": {
		...
		"cy:run": "cypress run",
        "cy:open": "cypress open",
        "websocket": "nodemon YOUR_FOLDER/socket.io.server.js",
        "cypress-run": "concurrently \"yarn websocket\" \"yarn cy:run\"",
        "cypress-open": "concurrently \"yarn websocket\" \"yarn cy:open\""
		...
	}
}
```

Just a note: I am using [`nodemon`](https://www.npmjs.com/package/nodemon) in order to keep the Socket.IO server running even if an error occurs.

If you don't want to do this, you can just replace the script with

```json
{
	"scripts": {
		...
		"websocket": "node YOUR_FOLDER/socket.io.server.js",
		...
	}
}
```

Just make sure to replace `YOUR_FOLDER` with the actual folder in which you saved the `socket.io.server.js` file.

Lastly, you need to run the `cypress-run` or the `cypress-open` command and start testing your live data!

---

It is possible to experience issues in a CI/CD environment such as Gitlab or Azure DevOps - **the Socket.IO server is not stopped after Cypress completes executing the automation tests**. In order to go around this issue, a slight modification of the code above is needed:

First, you need to install a new dependency - [`fkill-cli`](https://www.npmjs.com/package/fkill-cli) - this is CLI tool which helps you kill running processes easily. By the way, `concurrently` is no longer needed so you can safely uninstall it.

```sh
yarn add fkill-cli -D && yarn remove concurrently
```

Then the `package.json`'s `scripts` should be updated to the following:

```json
{
	"scripts": {
		...
		"cypress-run": "cypress run",
        "cypress-open": "cypress open",
        "websocket": "nodemon cypress/utilities/server.js",
        "websocket:kill": "fkill :3000 -f"
		...
	}
}
```

Now the interesting part - Cypress executes each `it` block syncronously, which allows the previous test to complete before the next one starts.

We can use this feature to start the Socket.IO server before all other tests (I've tried using the `beforeEach` and `before` hooks and it didn't work - it behaved inconsistently):

```typescript
it('Starts the local Socket.IO server', () => {
	cy.exec('yarn websocket', {
		failOnNonZeroExit: false
	})
		.its('stdout')
		.then((stdout: string) => {
			cy.log(stdout);
		});
});
```

Using the logic above, we can stop the local Socket.IO server after all other tests have finished:

```typescript
it('Stops the local Socket.IO server', () => {
	cy.exec('yarn websocket:kill', {
		failOnNonZeroExit: false
	})
		.its('stdout')
		.then((stdout: string) => {
			cy.log(stdout);
		});
});
```

With these steps I was able to successfully execute all automation tests in a local and CI/CD environment without any issues.
