#!/bin/sh

rm svg/.DS_Store

svgo-viewbox -i svg

svg-symbol-sprite -i svg -o static/sprite.svg -p svg-

html-minifier static/sprite.svg --collapse-whitespace -o static/sprite.svg
