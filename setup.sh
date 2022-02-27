#!/bin/bash
if [[ -z $APPIUM_SOURCE_HOME ]]; then
  echo 'please set APPIUM_SOURCE_HOME'
  exit 1
fi
echo "using $APPIUM_SOURCE_HOME"
pushd $APPIUM_SOURCE_HOME
echo "getting latest appium@2.0 changes"
git fetch
git checkout 2.0
git pull origin 2.0
echo "installing appium@2.0 dependencies"
npm i
popd
echo "installing plugin dependencies"
npm i
