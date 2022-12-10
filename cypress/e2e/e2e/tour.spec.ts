/// <reference types="cypress" />

function terminalLog(violations) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${violations.length === 1 ? '' : 's'} ${
      violations.length === 1 ? 'was' : 'were'
    } detected`
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(({ id, impact, description, nodes }) => ({
    id,
    impact,
    description,
    nodes: nodes.length,
  }));

  cy.task('table', violationData);
}

context('Tour', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    // Inject the axe-core library
    cy.injectAxe();
  });

  it('is accessible', () => {
    // first a11y test
    cy.checkA11y(
      null,
      {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag21a', 'wcag2aa', 'wcag21aa'],
        },
      },
      terminalLog
    );
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
});
