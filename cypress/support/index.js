/// <reference types="cypress" />
before(() => {
  cy.task('getPort').then((port) => {
    expect(port).to.be.a('number')
    // store the port and url in the Cypress env object
    Cypress.env('port', port)
    Cypress.env('url', `http://localhost:${port}`)
  })
})
