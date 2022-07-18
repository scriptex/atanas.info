#!/bin/sh

svgo-viewbox -i static/images/svg

svg-symbol-sprite -i static/images/svg -o static/sprite.svg -p svg-

html-minifier static/sprite.svg --collapse-whitespace -o static/sprite.svg
