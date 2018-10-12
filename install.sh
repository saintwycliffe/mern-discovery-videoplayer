#!/usr/bin/env bash
# A shell script to run the build
# build command.
# Written by: Corey Snodgrass
# Last updated on: 10/10/2018

echo "Installing server..."
npm install
cd client/
echo "Installing client..."
npm install
echo "Building app..."
npm run live
