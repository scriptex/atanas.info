#!/bin/sh

svgo-viewbox -i projects/icons
svgo-viewbox -i static/images/svg

spritesh -q -i static/images/svg -o static/sprite.svg -p svg-

html-minifier static/sprite.svg --collapse-whitespace -o static/sprite.svg
