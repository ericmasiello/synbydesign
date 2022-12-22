import { AxeResults } from 'axe-core';
import { Options } from 'cypress-axe';

// https://www.deque.com/axe/core-documentation/api-documentation/#axe-core-tags
export const axeRunOptions: Options = {
  runOnly: {
    type: 'tag',
    values: ['wcag2a', 'wcag21a', 'wcag2aa', 'wcag21aa'],
  },
};

export function terminalLog(violations: AxeResults['violations']) {
  cy.task(
    'log',
    `\n${violations.length} accessibility violation${violations.length === 1 ? '' : 's'} ${
      violations.length === 1 ? 'was' : 'were'
    } detected:\n`
  );

  const violationData = violations.map(({ id, impact, description, nodes }) => ({
    id,
    impact,
    description,
    nodes: nodes.length,
  }));
  cy.task('table', violationData);

  const violationIdToNodesMap = violations.reduce<Record<string, string[]>>((aggregate, violation) => {
    return {
      ...aggregate,
      [violation.id]: violation.nodes.map((n) => n.html),
    };
  }, {});
  cy.task('log', `\nOffending nodes: ${JSON.stringify(violationIdToNodesMap, null, 2)} \n`);
}
