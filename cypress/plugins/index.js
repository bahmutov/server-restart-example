/// <reference types="cypress" />

const makeServer = require('../../src/server')

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  let server, port, close

  on('before:spec', async (spec) => {
    // we can customize the server based on the spec about to run
    const info = await makeServer()
    // save the server instance information
    server = info.server
    port = info.port
    close = info.close
    console.log('started the server on port %d', port)
  })

  on('after:spec', async (spec) => {
    if (!server) {
      console.log('no server to close')
      return
    }
    await close()
    console.log('closed the server running on port %d', port)
  })
}
