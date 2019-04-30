#!/bin/sh
set -e
npm run build
git checkout gh-pages
mv dist/* .
git add .
echo "Enter commit message:"
read msg
git commit -m "$msg"
git push origin gh-pages
git checkout master
echo success.
