// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

describe('Express server 2', () => {
  it('has timing info', () => {
    cy.request('http://localhost:6000')
      // Cypress adds duration ms to the response
      .its('duration')
      .should('be.above', 0)
  })
})
