#!/bin/sh

current_dir=$(cd "$(dirname "$0")" && pwd)

cd ~/server/projects/open-source

while IFS== read -r repository; do
    echo "clonning $repository"
	git clone $repository
done < $current_dir/github.list

while IFS== read -r repository; do
    echo "clonning $repository"
	git clone $repository
done < $current_dir/gitlab.list
