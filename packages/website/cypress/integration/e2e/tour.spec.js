/// <reference types="cypress" />

context('Assertions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

  it('should have a title', () => {
    cy.title().should('include', 'Syn By Design');
  });
  it('should have a heading', () => {
    // https://on.cypress.io/should
    cy.get('h1')
      .should('be.visible')
      .then(($h1) => {
        expect($h1).to.have.text('Syn By Design');
      });
  });

  it('should link to the resume', () => {
    cy.get('[href="#resume"]').should('be.visible').click();
    cy.get('#resume').then(($el) => {
      expect($el).to.contain.text('Eric Masiello');
    });
  });
});
