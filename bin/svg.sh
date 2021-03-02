#!/bin/sh

svgo-viewbox -i projects/icons -f svgo.yml
svgo-viewbox -i static/images/svg -f svgo.yml

spritesh -q -i static/images/svg -o static/sprite.svg -p svg-

html-minifier static/sprite.svg --collapse-whitespace -o static/sprite.svg
