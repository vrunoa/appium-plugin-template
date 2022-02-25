const { command } = require('webdriver')
const setupBindings = (driver) => {
  driver.addCommand(
    'templatePing',
    command('POST', '/session/:sessionId/appium/template_plugin_ping', {
      command: 'templatePing',
      parameters: []
    })
  )
  driver.addCommand(
    'templateEcho',
    command('POST', '/session/:sessionId/appium/template_plugin_echo', {
      command: 'templateEcho',
      parameters: [{
        name: 'msg',
        type: 'string',
        required: true
      }]
    })
  )
}

module.exports = { setupBindings }
