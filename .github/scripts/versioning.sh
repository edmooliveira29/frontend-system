#!/bin/bash

cd "$(dirname "$0")"
LAST_TAG=$(git describe --tags --abbrev=0)
LAST_COMMITS=$(git log --tags "$LAST_TAG"..HEAD --pretty=format:"%s")

MAJOR=0
MINOR=0
PATH_COUNT=1

RELEASE_NOTES=""

while IFS= read -r line; do
  case $line in
    fix:*)
      MINOR=$((MINOR + 1))
      RELEASE_NOTES+="\n- $line"
      ;;
    feat:*)
      MAJOR=$((MAJOR + 1))
      RELEASE_NOTES+="\n- $line"
      ;;
    path:*)
      PATH_COUNT=$((PATH_COUNT + 1))
      RELEASE_NOTES+="\n- $line"
      ;;
  esac
done <<< "$LAST_COMMITS"

VERSION="v$PATH_COUNT.$MAJOR.$MINOR"

git config credential.helper "store --file=.git/credentials"
echo "https://github.com:${GH_TOKEN}@github.com" > .git/credentials
git tag -a "$VERSION" -m "Versão $VERSION"
git push origin "$VERSION" --tags -o ci.skip
gh release create "$VERSION" --title "$VERSION" --notes "$RELEASE_NOTES" --prerelease
