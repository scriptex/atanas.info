#!/bin/sh

prettier --write --list-different "**/*.tsx" "**/*.ts"

prettier --write --list-different "**/*.pcss"

prettier --write --list-different "**/*.yml" "**/*.json"
