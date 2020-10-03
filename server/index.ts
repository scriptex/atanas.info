#!/usr/bin/env ts-node-script

import path from 'path';

import express from 'express';
import rateLimit from 'express-rate-limit';
import compression from 'compression';

import favicon from '../static/images/favicon/favicon.ico';
import middleware from './middleware';

const app = express();
const port = process.env.PORT || 1234;
const faviconFileName = favicon.slice(favicon.lastIndexOf('/') + 1);

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000,
	max: 5
});

app.use(limiter);
app.use(compression());
app.use('/favicon.ico', (_, res) => res.sendFile(path.join(__dirname, `../src/${faviconFileName}`)));
app.use('/dist', express.static(`${__dirname}/../dist`));

app.get('/*', middleware);

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
