#!/bin/bash

# Clean previous builds
rm -rf dist
mkdir -p dist/firefox dist/chrome

# --- BUILD FIREFOX ---
cp -r src/* dist/firefox/
cp manifest.firefox.json dist/firefox/manifest.json
cd dist/firefox && zip -r ../ytm-mini-firefox.zip * -x "*.DS_Store" && cd ../..

# --- BUILD CHROME ---
cp -r src/* dist/chrome/
cp manifest.chrome.json dist/chrome/manifest.json
cd dist/chrome && zip -r ../ytm-mini-chrome.zip * -x "*.DS_Store" && cd ../..

echo "Build Complete! Check the /dist folder."