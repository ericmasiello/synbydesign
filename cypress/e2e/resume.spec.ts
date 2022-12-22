import { axeRunOptions, terminalLog } from './helpers/axe';

beforeEach(() => {
  cy.visit('/resume');
});

/**
 * Verify my /resume page exists
 */
it('should exist', () => {
  cy.get('h1')
    .contains(/resume/i)
    .should('exist');
});

it('is accessible', () => {
  // Inject the axe-core library
  cy.injectAxe();
  cy.checkA11y(null, axeRunOptions, terminalLog);
});

it('should contain an email contact in the header', () => {
  cy.get('header a[href*="mailto:eric.j.masiello@gmail.com"]').should('exist');
});

it('should display my website address in the header', () => {
  cy.get('header a').contains('synbydesign.com').should('exist');
});

it('should display [a/my] phone number in the header', () => {
  cy.get('header')
    .contains(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)
    .should('exist');
});

it('passes visual regression', () => {
  cy.percySnapshot('Resume Page', { widths: [375, 768, 992, 1200] });
});
