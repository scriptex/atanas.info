#!/bin/sh

echo "export const updatedAt = $(date '+%s');" > src/data/updated-at.ts
