// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />
import spok from 'cy-spok'

describe('Express server 1', () => {
  it('responds', () => {
    const url = Cypress.env('url')
    const port = Cypress.env('port')
    cy.request(url)
      .its('body')
      .should(
        spok({
          message: 'Hello World!',
          port,
          responseId: spok.range(1e5, 1e6),
        }),
      )
  })
})
