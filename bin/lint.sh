#!/bin/sh

eslint 'src/**/*.{ts,tsx}'

stylelint './src/**/*.pcss' --config .stylelintrc
