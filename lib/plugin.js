/* eslint-disable no-case-declarations */
import BasePlugin from '@appium/base-plugin'

export default class AppiumPluginTemplate extends BasePlugin {
  static newMethodMap = {
    '/session/:sessionId/appium/template_plugin_ping': {
      POST: {
        command: 'templatePing',
        neverProxy: true
      }
    }
  }

  constructor (pluginName, opts = {}) {
    super(pluginName)
    this.opts = opts
  }

  async templatePing (next, driver, ...args) {
    return 'pong'
  }

  async handle (next, driver, cmdName, ...args) {
    console.log(`plugin cmd called --> ${cmdName}`)
    return await next()
  }
}

export { AppiumPluginTemplate }
