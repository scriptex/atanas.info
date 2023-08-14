#!/bin/sh

svgo-viewbox -i src/svg -f svgo-config.mjs

svg-symbol-sprite -i src/svg -o src/sprite.svg -p svg- -c svgo-config.mjs

html-minifier src/sprite.svg --collapse-whitespace -o src/sprite.svg
