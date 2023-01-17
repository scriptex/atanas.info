#!/bin/sh

eslint '**/*.{ts,tsx}'

stylelint './src/**/*.css' --config .stylelintrc
