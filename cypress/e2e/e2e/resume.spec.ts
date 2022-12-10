beforeEach(() => {
  cy.visit('http://localhost:3000/resume');
});

/**
 * Verify my /resume page exists
 */
it('should exist', () => {
  cy.get('h1')
    .contains(/resume/i)
    .should('exist');
});

it('should contain an email contact in the header', () => {
  cy.get('header a[href*="mailto:eric.j.masiello@gmail.com"]').should('exist');
});

it('passes visual regression', () => {
  cy.percySnapshot('Resume Page', { widths: [375, 768, 992, 1200] });
});
