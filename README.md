# appium-plugin-template

A template repository to get you started building appium@2.0 plugins


## Requirements
In order to be able to iterate development on this plugin make sure you have appium@2.0 locally

```bash
export APPIUM_SOURCE_HOME=<your_appium_source_home_folder>
git clone git@github.com:appium/appium.git $APPIUM_SOURCE_HOME
```

## Setup
During setup, we will get appium@2.0 latest changes via git and install both projects(appium, appium-plugin-dependencies) dependencies
```
npm run dev:setup
```

## Launch appium with plugin
```
npm run dev:start
```
This task will help you easily iterate over your plugin changes by running a clean installation of the built plugin into your appium@2.0 local source. Once the plugin is installed, appium@2.0 is launched, so you can start running your tests. 
