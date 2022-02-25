const { command } = require('webdriver')
const setupBindings = (driver) => {
  driver.addCommand(
    'templatePing',
    command('POST', '/session/:sessionId/appium/template_plugin_ping', {
      command: 'templatePing',
      parameters: []
    })
  )
}

module.exports = { setupBindings }
