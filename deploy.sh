#!/usr/bin/env sh

# Abort on error
set -e

# Build
npm run build

# Navigate to the build directory
cd dist

# Deploy
git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Nikug/vital-skins.git master:gh-pages

cd -