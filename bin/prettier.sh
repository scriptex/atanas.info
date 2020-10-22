#!/bin/sh

prettier --write --list-different "**/*.js"

prettier --write --list-different "**/*.tsx" "**/*.ts"

prettier --write --list-different "**/*.pcss" "**/*.scss"

prettier --write --list-different "**/*.yml" "**/*.json"
