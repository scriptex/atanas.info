#!/bin/sh

eslint '**/*.{ts,tsx}'

stylelint './src/**/*.pcss' --config .stylelintrc
