#!/bin/sh

prettier --write --list-different "**/*.tsx" "**/*.ts"

prettier --write --list-different "**/*.css"

prettier --write --list-different "**/*.yml" "**/*.json"
