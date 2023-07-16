#!/bin/sh

svg-symbol-sprite -i src/svg -o src/sprite.svg -p svg-

html-minifier src/sprite.svg --collapse-whitespace -o src/sprite.svg
