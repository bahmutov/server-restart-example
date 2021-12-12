// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

describe('Express server 2', () => {
  it('has timing info', () => {
    const port = Cypress.env('port')
    expect(port).to.be.a('number').and.to.be.within(6100, 6300)
    cy.request(`http://localhost:${port}`)
      // Cypress adds duration ms to the response
      .its('duration')
      .should('be.above', 0)
  })
})
