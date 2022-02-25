const remote = require('webdriverio').remote
const { setupBindings } = require('./bindings')
const { expect } = require('chai')

describe('appium-plugin-template e2e', async () => {
  let driver

  it('should call plugin template', async () => {
    const appiumCaps = {
      hostname: 'localhost',
      port: 4723,
      protocol: 'http',
      capabilities: {
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'com.google.android.googlequicksearchbox',
        'appium:appActivity': 'com.google.android.apps.gsa.searchnow.SearchNowActivity',
        'appium:avdName': 'Pixel_3a_API_30_x86'
      }
    }
    driver = await remote(appiumCaps)
    setupBindings(driver)
    const pong = await driver.templatePing()
    expect(pong).to.eq('pong')
    const echo = await driver.templateEcho('hello')
    expect(echo).to.eql(['hello', 'hello', 'hello'])
  })
  after(async () => {
    await driver.deleteSession()
  })
})
