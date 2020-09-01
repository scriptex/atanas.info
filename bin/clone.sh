#!/bin/sh

current_dir=`cd "$(dirname "$0")" && pwd`

cd ~/server/projects/open-source

echo $current_dir

while IFS=\= read repository; do
    echo "clonning $repository"
	git clone $repository
done < $current_dir/github.list

while IFS=\= read repository; do
    echo "clonning $repository"
	git clone $repository
done < $current_dir/gitlab.list
