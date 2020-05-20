#!/usr/bin/env bash
git checkout -b gh-pages
npm run build
git add dist
git commit -m "deploy latest to github pages"
git subtree push --prefix dist origin gh-pages
git checkout master
git branch -D gh-pages
