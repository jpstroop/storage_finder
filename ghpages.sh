#!/usr/bin/env bash
BRANCH="gh-pages"
REMOTE="origin"
VUE_CONFIG_FILE="vue.config.js"
VUE_CONFIG="module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/storage_finder/'
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
echo -e "$VUE_CONFIG" > $VUE_CONFIG_FILE
npm run build
git add -f dist $VUE_CONFIG_FILE
git commit -m "deploy latest to github pages"
git subtree push --prefix dist $REMOTE $BRANCH
git checkout master
git branch -D $BRANCH
