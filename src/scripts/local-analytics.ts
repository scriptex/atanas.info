#!/usr/bin/env ts-node-script

import { config as dotenvConfig } from 'dotenv';

import { exec } from 'child_process';
import { resolve } from 'path';

dotenvConfig({
	path: resolve(process.cwd(), '../.env')
});

exec(`localga --id ${process.env.GTM_ID} --folder ./src/scripts`);
