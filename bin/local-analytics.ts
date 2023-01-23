#!/usr/bin/env ts-node-script

import { config as dotenvConfig } from 'dotenv';

import { exec } from 'node:child_process';

dotenvConfig({
	path: '.env.local'
});

exec(`localga --id ${process.env.GTM_ID} --folder ./src/scripts`);
