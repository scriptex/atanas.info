#!/bin/sh

rm svg/.DS_Store

svgo-viewbox -i src/svg

svg-symbol-sprite -i src/svg -o src/sprite.svg -p svg-

html-minifier src/sprite.svg --collapse-whitespace -o src/sprite.svg
