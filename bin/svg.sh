#!/bin/sh

svgo-viewbox -i src/svg -f svgo-config.mjs

svg-symbol-sprite -i src/svg -o public/sprite.svg -p svg- -c svgo-config.mjs

html-minifier public/sprite.svg --collapse-whitespace -o public/sprite.svg
