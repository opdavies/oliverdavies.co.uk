#!/usr/bin/env bash

SITE_ENV="prod"

# Build front-end assets.
node_modules/.bin/gulp --production

# Remove the existing docs directory, build the site and create the new
# docs directory.
rm -rf ./docs
vendor/bin/sculpin generate --no-interaction --clean --env=${SITE_ENV}
touch output_${SITE_ENV}/.nojekyll
mv output_${SITE_ENV} docs

# Ensure the correct Git variables are used.
git config --local user.name 'Oliver Davies'
git config --local user.email oliver@oliverdavies.uk

# Add, commit and push the changes.
git add --all docs
git commit -m 'Build.'
git push origin HEAD