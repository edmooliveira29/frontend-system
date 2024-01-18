#!/bin/bash

cd "$(dirname "$0")"
LAST_TAG=$(git describe --tags --abbrev=0)
LAST_COMMITS=$(git log --tags "$LAST_TAG"..HEAD --pretty=format:"%s")

MAJOR=0
MINOR=0
PATH_COUNT=1

RELEASE_NOTES=""

if git rev-parse "$LAST_TAG" >/dev/null 2>&1; then
  echo "Tag $LAST_TAG already exists. Skipping release creation."
  exit 0
fi

while IFS= read -r line; do
  case $line in
    fix:*)
      MINOR=$((MINOR + 1))
      RELEASE_NOTES+="- $line"$'\n'
      ;;
    feat:*)
      MINOR=0
      MAJOR=$((MAJOR + 1))
      RELEASE_NOTES+="- $line"$'\n'
      ;;
    path:*)
      MINOR=0
      PATH_COUNT=$((PATH_COUNT + 1))
      RELEASE_NOTES+="- $line"$'\n'
      ;;
  esac
done <<< "$LAST_COMMITS"

VERSION="v$PATH_COUNT.$MAJOR.$MINOR"
mkdir -p .git
git config credential.helper "store --file=.git/credentials"
echo "https://github.com:${GH_TOKEN}@github.com" > .git/credentials
git tag -af "$VERSION" -m "Versão $VERSION"
git push origin "$VERSION" --tags -o ci.skip
gh release create "$VERSION" --title "$VERSION" --notes "$RELEASE_NOTES"
