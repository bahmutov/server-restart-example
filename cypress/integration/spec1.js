// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

describe('Express server 1', () => {
  it('responds', () => {
    const url = Cypress.env('url')
    const port = Cypress.env('port')
    cy.request(url).its('body').should('deep.include', {
      message: 'Hello World!',
      port,
    })
  })

  it('responds with random id', () => {
    const url = Cypress.env('url')
    cy.request(url)
      .its('body.responseId')
      .should('be.a', 'number')
      .and('be.within', 1e5, 1e6)
  })
})
