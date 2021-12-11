/// <reference types="cypress" />

const makeServer = require('../../src/server')

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on('before:spec', async (spec) => {
    const { server, port, close } = await makeServer()
    console.log('started the server on port %d', port)
  })
}
