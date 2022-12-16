#!/bin/sh

rm svg/.DS_Store

svgo-viewbox -i svg

svg-symbol-sprite -i svg -o public/sprite.svg -p svg-

html-minifier public/sprite.svg --collapse-whitespace -o public/sprite.svg
