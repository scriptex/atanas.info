#!/bin/sh

svgo-viewbox -i projects/icons
svgo-viewbox -i static/images/svg

svg-symbol-sprite -i static/images/svg -o static/sprite.svg -p svg- -c ./config/svgo.config.js

html-minifier static/sprite.svg --collapse-whitespace -o static/sprite.svg
