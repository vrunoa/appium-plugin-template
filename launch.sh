#!/bin/bash
if [[ -z $APPIUM_SOURCE_HOME ]]; then
  echo 'please set APPIUM_SOURCE_HOME'
  exit 1
fi
echo "installing plugin"
node $APPIUM_SOURCE_HOME/packages/appium plugin uninstall template
node $APPIUM_SOURCE_HOME/packages/appium plugin install --source local $(pwd)
echo "launching appium"
node $APPIUM_SOURCE_HOME/packages/appium  server --use-plugins=template
