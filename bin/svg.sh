#!/bin/sh

node bin/svg.js

spritesh -q -i static/images/svg -o static/sprite.svg -p svg-

html-minifier static/sprite.svg --collapse-whitespace -o static/sprite.svg
