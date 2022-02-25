const { expect } = require('chai')
const { AppiumPluginTemplate } = require('../../dist/index')

describe('appium-plugin-template unit', async () => {
  it('should return pong', async () => {
    const plugin = new AppiumPluginTemplate()
    const pong = await plugin.templatePing()
    expect(pong).to.eq('pong')
  })
  it('should return message echo"ed', async () => {
    const plugin = new AppiumPluginTemplate()
    const echo = await plugin.templateEcho(null, null, 'hello')
    expect(echo).to.eql(['hello', 'hello', 'hello'])
  })
})
