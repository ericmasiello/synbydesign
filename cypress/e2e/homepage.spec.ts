/// <reference types="cypress" />

import { axeRunOptions, terminalLog } from './helpers/axe';

context('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('passes visual regression', () => {
    cy.percySnapshot('Homepage', { widths: [375, 768, 992, 1200] });
  });

  it('is accessible', () => {
    // Inject the axe-core library
    cy.injectAxe();
    cy.checkA11y(null, axeRunOptions, terminalLog);
  });

  it('should have a title', () => {
    cy.title().should('include', 'Syn By Design');
  });

  it('should have a heading', () => {
    // https://on.cypress.io/should
    cy.get('h1')
      .should('be.visible')
      .contains(/syn by design/i);
  });

  it('should link to the resume', () => {
    cy.get('a')
      .contains(/resume/i)
      .should('be.visible')
      .click();

    cy.get('#resume').contains(/eric masiello/i);
  });

  context('Resume', () => {
    it('should not display my email address in the resume header', () => {
      cy.get('[data-cy="resume"] a[href*="mailto:eric.j.masiello@gmail.com"]').should('not.exist');
    });

    it('should not display my website address in the resume header', () => {
      cy.get('[data-cy="resume"] a').contains('synbydesign.com').should('not.exist');
    });

    it('should not display [a/my] phone number in the header', () => {
      cy.get('[data-cy="resume"] a')
        .contains(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)
        .should('not.exist');
    });
  });
});
