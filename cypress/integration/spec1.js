// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

describe('Express server 1', () => {
  it('responds', () => {
    cy.request('http://localhost:6000').its('body').should('deep.include', {
      message: 'Hello World!',
      port: 6000,
    })
  })

  it('responds with random id', () => {
    cy.request('http://localhost:6000')
      .its('body.responseId')
      .should('be.a', 'number')
      .and('be.within', 1e5, 1e6)
  })
})
