#!/usr/bin/env ts-node-script

import path from 'path';

import express from 'express';
import compression from 'compression';

import middleware from './middleware';
// eslint-disable-next-line
// @ts-ignore
import favicon from '../static/images/favicon/favicon.ico';

const app = express();

app.use(compression());

const faviconFileName = favicon.slice(favicon.lastIndexOf('/') + 1);

app.use('/favicon.ico', (_, res) => res.sendFile(path.join(__dirname, `../src/${faviconFileName}`)));

app.use('/dist', express.static(`${__dirname}/../dist`));

app.get('/*', middleware);

const port = process.env.PORT || 1234;

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
