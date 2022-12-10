beforeEach(() => {
  cy.visit('/privacy');
});

/**
 * This test was added to ensure we continue to offer a privacy page
 * as required by Apple's app store (re: Tap 4 BPM app)
 */
it('should exist', () => {
  cy.get('h1').contains(/privacy policy/i);
});

it('should contain an email contact', () => {
  cy.get('a[href*="mailto:eric.j.masiello@gmail.com"]').should('exist');
});

it('passes visual regression', () => {
  cy.percySnapshot('Privacy Page', { widths: [375, 768, 992, 1200] });
});
