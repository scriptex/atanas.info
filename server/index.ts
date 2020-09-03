#!/usr/bin/env ts-node-script

import path from 'path';

import express from 'express';
import compression from 'compression';

import favicon from '../static/images/favicon/favicon.ico';
import middleware from './middleware';

const app = express();
const port = process.env.PORT || 1234;
const faviconFileName = favicon.slice(favicon.lastIndexOf('/') + 1);

app.use(compression());
app.use('/favicon.ico', (_, res) => res.sendFile(path.join(__dirname, `../src/${faviconFileName}`)));
app.use('/dist', express.static(`${__dirname}/../dist`));

app.get('/*', middleware);

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
