#!/usr/bin/env bash
APP_PATH="/storage_finder/" #retain "/" on either side
BRANCH="gh-pages"
REMOTE="origin"
VUE_CONFIG_FILE="vue.config.js"

start_branch=$(git rev-parse --abbrev-ref HEAD) # don't assume master
vue_config="module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '$APP_PATH'
    : '/'
}"

# Returns 0 if the branch exists, 1 if not (opposite of T/F...)
function local_branch_status {
  git show-ref --verify --quiet refs/heads/$BRANCH
  echo "$?"
}

if [ $(local_branch_status) == 0 ]; then
    echo "$BRANCH branch already exists, will remove"
    git branch -D $BRANCH
fi

git push $REMOTE --delete $BRANCH
git checkout -b $BRANCH
echo -e "$vue_config" > $VUE_CONFIG_FILE
npm run build
git add -f dist $VUE_CONFIG_FILE
git commit -m "deploy latest to github pages"
git subtree push --prefix dist $REMOTE $BRANCH
git checkout $start_branch
git branch -D $BRANCH
