/* eslint-disable no-case-declarations */
import BasePlugin from '@appium/base-plugin'

export default class AppiumPluginTemplate extends BasePlugin {
  static newMethodMap = {
    '/session/:sessionId/appium/template_plugin_ping': {
      POST: {
        command: 'templatePing',
        neverProxy: true
      }
    },
    '/session/:sessionId/appium/template_plugin_echo': {
      POST: {
        command: 'templateEcho',
        payloadParams: {
          required: ['msg']
        },
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

  async templateEcho (next, driver, ...args) {
    const msg = args[0]
    return [msg, msg, msg]
  }

  async handle (next, driver, cmdName, ...args) {
    console.log(`plugin cmd called --> ${cmdName}`)
    return await next()
  }
}

export { AppiumPluginTemplate }
