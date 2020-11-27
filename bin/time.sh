#!/bin/sh

echo "export const updatedAt = $(date '+%s');" > src/scripts/updated-at.ts
